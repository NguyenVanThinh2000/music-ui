import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMicrophone,
    faVolumeOff,
    faVolumeHigh,
    faList,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Player from "../Player";
import styles from "./MusicPlayer.module.scss";
import { useState, useContext, useEffect } from "react";
import { SongContext } from "../../../../App";
import PlayList from "../../../PlayList";
import SongCard from "../SongCard";

const cx = classNames.bind(styles);

function MusicPlayer() {
    const [showPlayList, setShowPlayList] = useState(false);
    const [isPlaying, setIsPlaying, currentSong, setCurrentSong, audioElem] =
        useContext(SongContext);
    const [volume, setVolume] = useState(100);
    const handleShowPlayList = () => {
        setShowPlayList(!showPlayList);
    };
    const handleVolume = (e) => {
        let value = e.target.value;
        setVolume(value);
    };
    useEffect(() => {
        audioElem.current.volume = volume * 0.01;
    }, [volume]);
    const handleMute = () => {
        if (volume === "0") {
            setVolume(100);
        } else {
            setVolume("0");
        }
    };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("current-song")}>
                {currentSong.imageUrl ? (
                    <SongCard
                        song={currentSong}
                        isHorizontal={true}
                        nonStyle={true}
                    />
                ) : (
                    ""
                )}
            </div>
            <Player />
            <div className={cx("actions")}>
                <div className={cx("left")}>
                    <div className={cx("lyrics")}>
                        <div className={cx("lyrics-icon")}>
                            <FontAwesomeIcon icon={faMicrophone} />
                        </div>
                        <div className={cx("lyrics-content")}></div>
                    </div>
                    <div className={cx("sound")}>
                        <div className={cx("sound-icon")} onClick={handleMute}>
                            {volume === "0" ? (
                                <FontAwesomeIcon icon={faVolumeOff} />
                            ) : (
                                <FontAwesomeIcon icon={faVolumeHigh} />
                            )}
                        </div>
                        <div className={cx("sound-input")}>
                            <input
                                className={cx("input-range")}
                                type="range"
                                min="0"
                                max="100"
                                value={volume}
                                onChange={handleVolume}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("right")}>
                    <div
                        className={cx("play-lists-icon")}
                        onClick={handleShowPlayList}
                    >
                        <FontAwesomeIcon icon={faList} />
                    </div>
                    <div
                        className={cx(
                            "play-list",
                            showPlayList ? "play-list-show" : ""
                        )}
                    >
                        <PlayList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;
