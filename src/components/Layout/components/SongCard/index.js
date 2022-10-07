import { SongContext, FavoriteContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";
import VerticalCard from "./VerticalCard";
import HorizontalCard from "./HorizontalCard";

function SongCard({ song, isVertical, isHorizontal, nonStyle }) {
    const [
        isPlaying,
        setIsPlaying,
        currentSong,
        setCurrentSong,
        audioElem,
        playLists,
        setPlayList,
    ] = useContext(SongContext);
    const [favoriteSongs, setFavoriteSongs] = useContext(FavoriteContext);
    const [activeBox, setActiveBox] = useState(false);
    const [inPlayList, setInPlayList] = useState(false);
    const [inFavoriteList, setInFavoriteList] = useState(false);
    useEffect(() => {
        if (currentSong.id === song.id) {
            setActiveBox(true);
        } else {
            setActiveBox(false);
        }
    }, [currentSong]);
    useEffect(() => {
        const foundPL = playLists.find((x) => x.id === song.id);
        if (foundPL) {
            setInPlayList(true);
        } else {
            setInPlayList(false);
        }
        const foundFL = favoriteSongs.find((x) => x.id === song.id);
        if (foundFL) {
            setInFavoriteList(true);
        } else {
            setInFavoriteList(false);
        }
    }, [playLists, favoriteSongs]);

    // xử lý thêm vào danh sách phát
    const addToPlayList = () => {
        const checkSong = playLists.find((x) => x.id === song.id);
        if (!checkSong) {
            setPlayList([...playLists, song]);
        }
    };
    const handlePlay = () => {
        addToPlayList();
        setInPlayList(true);
        setCurrentSong({ ...song, progress: 0 });
        setIsPlaying(true);
        audioElem.current.currentTime = 0;
    };

    const handleAddToPlayLists = () => {
        if (inPlayList) {
            let indexSong = playLists.findIndex((x) => x.id === song.id);
            playLists.splice(indexSong, 1);
            setPlayList([...playLists]);
        } else {
            addToPlayList();
        }
        setInPlayList(!inPlayList);
    };

    // xử lý thêm vào danh sách yêu thích
    const handleAddToFavoriteList = () => {
        if (inFavoriteList) {
            let indexSong = favoriteSongs.findIndex((x) => x.id === song.id);
            favoriteSongs.splice(indexSong, 1);
            setFavoriteSongs([...favoriteSongs]);
        } else {
            const checkSong = favoriteSongs.find((x) => x.id === song.id);
            if (!checkSong) {
                setFavoriteSongs([...favoriteSongs, song]);
            }
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
