import { useSelector } from "react-redux";
import ListSongs from "../../components/ListSongs";

function FavoriteSong() {
    const songs = useSelector((state) => state.songs.list);
    const favoriteSongs = songs.filter((song) => song.isFavoriteSong === true);
    return <ListSongs pageTitle="Bài Hát Yêu Thích" songs={favoriteSongs} />;
}

export default FavoriteSong;
