import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faHeart,
    faAdd,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./SongCard.module.scss";
import { SongContext } from "../../../../App";
import { useContext, useState } from "react";

const cx = classNames.bind(styles);

function SongCard({ song }) {
    const [
        isPlaying,
        setIsPlaying,
        currentSong,
        setCurrentSong,
        audioElem,
        playLists,
        setPlayList,
    ] = useContext(SongContext);

    const [inPlayList, setInPlayList] = useState(false);

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

    return (
        <div className={cx("wrapper")}>
            <div className={cx("image")}>
                <img src={song.imageUrl} alt="" />
                <div className={cx("overlay")}>
                    <div className={cx("btn-top")}>
                        <div
                            className={cx(
                                "add-to-playLists",
                                inPlayList ? "active-add" : ""
                            )}
                            onClick={handleAddToPlayLists}
                        >
                            {inPlayList ? (
                                <FontAwesomeIcon icon={faCheck} />
                            ) : (
                                <FontAwesomeIcon icon={faAdd} />
                            )}
                        </div>
                        <div
                            className={cx(
                                "add-to-favoriteLists",
                                "active-heart"
                            )}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                    <div className={cx("btn-play")} onClick={handlePlay}>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </div>
            </div>
            <div className={cx("info")}>
                <p className={cx("song-name")}>{song.songName}</p>
                <p className={cx("singer-name")}>{song.singerName}</p>
            </div>
        </div>
    );
}

export default SongCard;
