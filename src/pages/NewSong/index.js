import axios from "axios";
import { useEffect, useState } from "react";
import ListSongs from "../../components/ListSongs";

function NewSong() {
    const [newSongs, setNewSongs] = useState([]);
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + "getNewSongs")
            .then(function (response) {
                setNewSongs(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return <ListSongs pageTitle="Bài Hát Mới Nhất" songs={newSongs} />;
}

export default NewSong;
