import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple, faMusic } from "@fortawesome/free-solid-svg-icons";
import {
    faStar,
    faAddressCard,
    faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <Link to="/" className={cx("title")}>
                <FontAwesomeIcon icon={faHeadphonesSimple} />
                <p className={cx("title-text")}>MUSIK</p>
            </Link>
            <div className={cx("list")}>
                <Link to="/" className={cx("item")}>
                    <div className={cx("item-icon")}>
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className={cx("item-text")}>Top 100</p>
                </Link>
                <Link to="/new-song" className={cx("item")}>
                    <div className={cx("item-icon")}>
                        <FontAwesomeIcon icon={faMusic} />
                    </div>
                    <p className={cx("item-text")}>Bài hát mới</p>
                </Link>
                <Link to="/favorite-song" className={cx("item")}>
                    <div className={cx("item-icon")}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <p className={cx("item-text")}>Yêu thích</p>
                </Link>
                <Link to="/user-profile" className={cx("item")}>
                    <div className={cx("item-icon")}>
                        <FontAwesomeIcon icon={faAddressCard} />
                    </div>
                    <p className={cx("item-text")}>Cá nhân</p>
                </Link>
            </div>
        </aside>
    );
}

export default Sidebar;
