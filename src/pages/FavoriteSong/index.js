import { useContext } from "react";
import { FavoriteContext } from "../../App";
import ListSongs from "../../components/ListSongs";

function FavoriteSong() {
    const [favoriteSongs] = useContext(FavoriteContext);
    return <ListSongs pageTitle="Bài Hát Yêu Thích" songs={favoriteSongs} />;
}

export default FavoriteSong;
