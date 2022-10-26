import { SongContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";
import VerticalCard from "./VerticalCard";
import HorizontalCard from "./HorizontalCard";
import { useDispatch, useSelector } from "react-redux";
import {
    addFS,
    addPL,
    removeFS,
    removePL,
} from "../../../../store/actions/songs";

function SongCard({ song, isVertical, isHorizontal, nonStyle }) {
    const [isPlaying, setIsPlaying, currentSong, setCurrentSong, audioElem] =
        useContext(SongContext);

    const [activeBox, setActiveBox] = useState(false);
    const [inPlayList, setInPlayList] = useState(false);
    const [inFavoriteList, setInFavoriteList] = useState(false);

    // redux playlist
    const songs = useSelector((state) => state.songs.list);

    // redux dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentSong.id === song.id) {
            setActiveBox(true);
        } else {
            setActiveBox(false);
        }
    }, [currentSong]);

    useEffect(() => {
        const foundSong = songs.find((x) => x.id === song.id);

        if (foundSong) {
            if (foundSong.isPlayList) {
                setInPlayList(true);
            } else {
                setInPlayList(false);
            }
            if (foundSong.isFavoriteSong) {
                setInFavoriteList(true);
            } else {
                setInFavoriteList(false);
            }
        } else {
            setInPlayList(false);
            setInFavoriteList(false);
        }
    }, [songs]);

    const handlePlay = () => {
        addToPlayList();
        setInPlayList(true);
        setCurrentSong({ ...song, progress: 0 });
        setIsPlaying(true);
        audioElem.current.currentTime = 0;
    };

    // xử lý thêm vào danh sách phát
    const addToPlayList = () => {
        const newSong = {
            ...song,
            isPlayList: true,
            isFavoriteSong: false,
        };
        const action = addPL(newSong);
        dispatch(action);
    };

    const handleAddToPlayLists = () => {
        if (inPlayList) {
            const action = removePL(song);
            dispatch(action);
        } else {
            addToPlayList();
        }
        setInPlayList(!inPlayList);
    };

    // xử lý thêm vào danh sách yêu thích
    const handleAddToFavoriteList = () => {
        if (inFavoriteList) {
            const action = removeFS(song);
            dispatch(action);
        } else {
            const newSong = {
                ...song,
                isPlayList: false,
                isFavoriteSong: true,
            };
            const action = addFS(newSong);
            dispatch(action);
        }
        setInFavoriteList(!inFavoriteList);
    };
    return (
        <>
            {isVertical ? (
                <VerticalCard
                    song={song}
                    inPlayList={inPlayList}
                    inFavoriteList={inFavoriteList}
                    handleAddToFavoriteList={handleAddToFavoriteList}
                    handleAddToPlayLists={handleAddToPlayLists}
                    handlePlay={handlePlay}
                />
            ) : (
                ""
            )}
            {isHorizontal ? (
                <HorizontalCard
                    song={song}
                    activeBox={activeBox}
                    handlePlay={handlePlay}
                    inPlayList={inPlayList}
                    inFavoriteList={inFavoriteList}
                    handleAddToPlayLists={handleAddToPlayLists}
                    handleAddToFavoriteList={handleAddToFavoriteList}
                    nonStyle={nonStyle}
                    isPlaying={isPlaying}
                />
            ) : (
                ""
            )}
        </>
    );
}

export default SongCard;
