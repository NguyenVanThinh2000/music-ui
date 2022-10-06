import classNames from "classnames/bind";
import SongCard from "../Layout/components/SongCard";
import styles from "./ListSongs.module.scss";

const cx = classNames.bind(styles);

function ListSongs({ pageTitle, songs }) {
    return (
        <>
            <div className={cx("wrapper")}>
                <h2 className={cx("title")}>{pageTitle}</h2>
                <div className={cx("songs")}>
                    {songs.map((song, id) => {
                        return <SongCard key={id} song={song} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default ListSongs;
