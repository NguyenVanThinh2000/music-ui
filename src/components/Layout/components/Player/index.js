import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShuffle,
    faBackwardStep,
    faPlay,
    faForwardStep,
    faRepeat,
    faPause,
} from "@fortawesome/free-solid-svg-icons";
import className from "classnames/bind";
import styles from "./Player.module.scss";
import { useContext } from "react";
import { SongContext } from "../../../../App";
import { stringtotime } from "../../../../store";
import { useSelector } from "react-redux";
const cx = className.bind(styles);

function Player() {
    const [
        isPlaying,
        setIsPlaying,
        currentSong,
        setCurrentSong,
        audioElem,
        isShuffle,
        setIsShuffle,
        isRepeat,
        setIsRepeat,
    ] = useContext(SongContext);
    const songs = useSelector((state) => state.songs.list);
    const playLists = songs.filter((song) => song.isPlayList === true);
    const playPause = () => {
        setIsPlaying(!isPlaying);
    };
    const handleShuffle = () => {
        setIsRepeat(false);
        setIsShuffle(!isShuffle);
    };
    const handleRepeat = () => {
        setIsShuffle(false);
        setIsRepeat(!isRepeat);
    };
    const handlePrevSong = () => {
        let index = playLists.findIndex((x) => x.id === currentSong.id);
        if (index === 0) {
            index = playLists.length - 1;
        } else {
            index -= 1;
        }
        setCurrentSong({ ...playLists[index], progress: 0 });
        audioElem.current.currentTime = 0;
    };
    const handleNextSong = () => {
        let index = playLists.findIndex((x) => x.id === currentSong.id);
        if (index === playLists.length - 1) {
            if (isRepeat === false) {
                if (isShuffle === false) {
                    setIsPlaying(false);
                    audioElem.current.currentTime = 0;
                    setCurrentSong({ ...currentSong, progress: 0 });
                    return;
                }
            }
            index = 0;
        } else {
            index += 1;
        }
        if (isShuffle) {
            index = Math.floor(Math.random() * playLists.length);
        }
        setIsPlaying(true);
        setCurrentSong({ ...playLists[index], progress: 0 });
        audioElem.current.currentTime = 0;
    };
    const handleChange = (e) => {
        const v = e.target.value;
        audioElem.current.currentTime = v;
        setCurrentSong({
            ...currentSong,
            progress: v,
            currentTimeStr: stringtotime(v, "mm:ss"),
        });
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("buttons")}>
                <div className={cx("btn")}>
                    <div
                        className={cx("btn-item", isShuffle ? "active" : "")}
                        onClick={handleShuffle}
                    >
                        <FontAwesomeIcon icon={faShuffle} />
                    </div>
                    <div className={cx("btn-item")} onClick={handlePrevSong}>
                        <FontAwesomeIcon icon={faBackwardStep} />
                    </div>
                    {!isPlaying ? (
                        <div
                            className={cx("btn-item", "btn-circle")}
                            onClick={playPause}
                        >
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    ) : (
                        <div
                            className={cx("btn-item", "btn-circle")}
                            onClick={playPause}
                        >
                            <FontAwesomeIcon icon={faPause} />
                        </div>
                    )}
                    <div className={cx("btn-item")} onClick={handleNextSong}>
                        <FontAwesomeIcon icon={faForwardStep} />
                    </div>
                    <div
                        className={cx("btn-item", isRepeat ? "active" : "")}
                        onClick={handleRepeat}
                    >
                        <FontAwesomeIcon icon={faRepeat} />
                    </div>
                </div>
            </div>
            <div className={cx("time")}>
                <div className={cx("current-time")}>
                    {currentSong.currentTimeStr || "00:00"}
                </div>
                <div className={cx("timeline")}>
                    <input
                        className={cx("input-range")}
                        type="range"
                        min="0"
                        max={currentSong.length}
                        value={currentSong.progress}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx("total-time")}>
                    {currentSong.totalTimeStr || "00:00"}
                </div>
            </div>
        </div>
    );
}

export default Player;
