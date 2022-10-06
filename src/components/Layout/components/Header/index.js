import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleXmark,
    faArrowUpFromBracket,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("search")}>
                <div className={cx("input")}>
                    <div className={cx("search-icon")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <input
                        placeholder="Tìm kiếm tên bài hát, ca sĩ, lời bài hát,..."
                        type="text"
                    />
                    <div className={cx("clear")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
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
