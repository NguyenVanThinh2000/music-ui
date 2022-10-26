import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./SongCard.module.scss";

const cx = classNames.bind(styles);

function HorizontalCard({
    song,
    activeBox,
    handlePlay,
    inPlayList,
    inFavoriteList,
    handleAddToPlayLists,
    handleAddToFavoriteList,
    nonStyle,
    isPlaying,
}) {
    return (
        <div
            className={cx(
                "wrapper-horizontal",
                activeBox ? "active" : "",
                nonStyle ? "non-style" : ""
            )}
        >
            <div className={cx("left")}>
                <div className={cx("image", isPlaying ? "image-spin" : "")}>
                    <img src={song.imageUrl} alt="" />
                    {!nonStyle ? (
                        <div className={cx("overlay")} onClick={handlePlay}>
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className={cx("info")}>
                    <p className={cx("song-name")}>{song.songName}</p>
                    <p className={cx("singer-name")}>{song.singerName}</p>
                </div>
            </div>
            <div className={cx("right")}>
                <div
                    className={cx(
                        "icon-heart",
                        "icon-right",
                        inFavoriteList ? "active-heart" : ""
                    )}
                    onClick={handleAddToFavoriteList}
                >
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                {!nonStyle ? (
                    <div
                        className={cx(
                            "icon-add",
                            "icon-right",
                            inPlayList ? "added" : ""
                        )}
                        onClick={handleAddToPlayLists}
                    >
                        <FontAwesomeIcon icon={faAdd} />
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default HorizontalCard;
