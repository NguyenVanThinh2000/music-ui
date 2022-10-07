import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faHeart,
    faAdd,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./SongCard.module.scss";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function VerticalCard({
    song,
    inPlayList,
    inFavoriteList,
    handleAddToFavoriteList,
    handleAddToPlayLists,
    handlePlay,
}) {
    return (
        <div className={cx("wrapper-vertical")}>
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
                                inFavoriteList ? "active-heart" : ""
                            )}
                            onClick={handleAddToFavoriteList}
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

export default VerticalCard;
