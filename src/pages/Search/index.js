import { useSelector } from "react-redux";
import ListSongs from "../../components/ListSongs";
function Search() {
    const searchList = useSelector((state) => state.search.list);
    const searchKeyword = useSelector((state) => state.search.keyWord);

    return (
        <ListSongs
            pageTitle={
                searchList.length > 0
                    ? `Kết quả tìm kiếm của "${searchKeyword}"`
                    : `Không có kết quả phù hợp với "${searchKeyword}"`
            }
            songs={searchList}
        />
    );
}

export default Search;
