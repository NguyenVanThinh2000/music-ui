import { useContext } from "react";
import { SongContext, FavoriteContext } from "../../App";
import ListSongs from "../../components/ListSongs";

function FavoriteSong() {
    const [favoriteSongs] = useContext(FavoriteContext);
    return <ListSongs pageTitle="Bài hát yêu thích" songs={favoriteSongs} />;
}

export default FavoriteSong;
