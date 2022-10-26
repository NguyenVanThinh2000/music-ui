import { memo } from "react";
import classNames from "classnames/bind";
import styles from "./PlayList.module.scss";

import SongCard from "../Layout/components/SongCard";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function PlayList() {
    const songs = useSelector((state) => state.songs.list);
    const playList = songs.filter((song) => song.isPlayList === true);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("title")}>Danh sách phát</div>
            <div className={cx("list")}>
                {playList.map((song, id) => (
                    <SongCard key={id} song={song} isHorizontal={true} />
                ))}
            </div>
        </div>
    );
}

export default memo(PlayList);
