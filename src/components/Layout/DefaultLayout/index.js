import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { memo } from "react";
import MusicPlayer from "../components/MusicPlayer";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("app-top")}>
                <Sidebar />
                <div className={cx("app-left-wrapper")}>
                    <Header />
                    <div className={cx("app-content")}>{children}</div>
                </div>
            </div>
            <MusicPlayer />
        </div>
    );
}

export default DefaultLayout;
