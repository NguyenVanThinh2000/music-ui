import { useDispatch } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    // faCircleXmark,
    faArrowUpFromBracket,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searched } from "../../../../store/actions/search";

const cx = classNames.bind(styles);

function Header() {
    // search redux state
    const dispatch = useDispatch();

    const [keyWord, setKeyWord] = useState("");

    const navigate = useNavigate();

    const onChange = (e) => {
        let value = e.target.value;
        setKeyWord(value);
    };
    const handleSearch = () => {
        if (keyWord === "") return;
        axios
            .get(process.env.REACT_APP_API_URL + "search", {
                params: { keyWord: keyWord },
            })
            .then(function (response) {
                setKeyWord("");
                const newSearchState = {
                    keyWord: keyWord,
                    list: response.data,
                };
                const action = searched(newSearchState);
                dispatch(action);
            })
            .catch(function (error) {
                console.log(error);
            });
        navigate("/search");
    };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("search")}>
                <div className={cx("input")}>
                    <div className={cx("search-icon")} onClick={handleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <input
                        placeholder="Tìm kiếm tên bài hát, ca sĩ,..."
                        type="text"
                        value={keyWord}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                    />
                    {/* <div className={cx("clear")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </div> */}
                </div>
            </div>
            <div className={cx("header-button")}>
                <div className={cx("button-item")}>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </div>
                <div className={cx("button-item")}>
                    <FontAwesomeIcon icon={faGear} />
                </div>
                <div className={cx("button-item")}>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </header>
    );
}

export default Header;
