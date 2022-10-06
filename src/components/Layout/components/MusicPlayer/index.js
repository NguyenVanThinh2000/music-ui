import classNames from "classnames/bind";
import Player from "../Player";
import styles from "./MusicPlayer.module.scss";
import { useContext } from "react";
import { SongContext } from "../../../../App";

const cx = classNames.bind(styles);

function MusicPlayer() {
    const [isPlaying, setIsPlaying, currentSong, setCurrentSong] =
        useContext(SongContext);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("current-song")}>
                {currentSong.imageUrl ? (
                    <img alt="" src={currentSong.imageUrl} />
                ) : (
                    ""
                )}
                <div className={cx("info")}>
                    <p className={cx("name")}>{currentSong.songName}</p>
                    <p className={cx("single")}>{currentSong.singerName}</p>
                </div>
            </div>
            <Player />
            <div className={cx("actions")}></div>
        </div>
    );
}

export default MusicPlayer;
