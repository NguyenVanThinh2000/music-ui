import { memo, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./PlayList.module.scss";

import { SongContext } from "../../App";
import SongCard from "../Layout/components/SongCard";

const cx = classNames.bind(styles);

function PlayList() {
    const [
        isPlaying,
        setIsPlaying,
        currentSong,
        setCurrentSong,
        audioElem,
        playLists,
        setPlayList,
    ] = useContext(SongContext);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("title")}>Danh sách phát</div>
            <div className={cx("list")}>
                {playLists.map((song, id) => (
                    <SongCard key={id} song={song} isHorizontal={true} />
                ))}
            </div>
        </div>
    );
}

export default memo(PlayList);
