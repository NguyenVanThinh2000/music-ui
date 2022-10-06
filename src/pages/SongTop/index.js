import axios from "axios";
import ListSongs from "../../components/ListSongs";
import { useEffect, useState } from "react";

function SongTop() {
    const [songTops, setSongTops] = useState([]);
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + "getSongTops")
            .then(function (response) {
                setSongTops(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return <ListSongs pageTitle="Top 100 Bài Hát Nhạc Trẻ" songs={songTops} />;
}

export default SongTop;
