import { useContext } from "react";
import ListSongs from "../../components/ListSongs";
import { SearchContext } from "../../App";
function Search() {
    const [search] = useContext(SearchContext);
    return (
        <ListSongs
            pageTitle={
                search.songs.length > 0
                    ? `Kết quả tìm kiếm của "${search.keyWord}"`
                    : `Không có kết quả phù hợp với "${search.keyWord}"`
            }
            songs={search.songs}
        />
    );
}

export default Search;
