import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
import { Fragment, useState, useRef, createContext, useEffect } from "react";
import { stringtotime } from "./store";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

export const SongContext = createContext();

function App() {
    const songs = useSelector((state) => state.songs.list);
    const playLists = songs.filter((song) => song.isPlayList === true);

    const [isRepeat, setIsRepeat] = useState(true);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState({
        ...playLists[0],
        progress: 0,
    });

    const audioElem = useRef();
    const onPlaying = () => {
        const ct = audioElem.current.currentTime;
        setCurrentSong({
            ...currentSong,
            progress: ct,
            currentTimeStr: stringtotime(ct, "mm:ss"),
        });
    };

    const onLoading = () => {
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;
        const time = stringtotime(duration, "mm:ss");
        setCurrentSong({
            ...currentSong,
            totalTimeStr: time,
            currentTimeStr: stringtotime(ct, "mm:ss"),
            length: duration,
        });
    };

    const onEnded = () => {
        let index = playLists.findIndex((x) => x.id === currentSong.id);
        if (index === playLists.length - 1) {
            index = 0;
            if (isRepeat === false) {
                setIsPlaying(!isPlaying);
                audioElem.current.currentTime = 0;
                setCurrentSong({ ...currentSong, progress: 0 });
                return;
            }
        } else {
            index += 1;
        }
        setCurrentSong({ ...playLists[index], progress: 0 });
        audioElem.current.currentTime = 0;
    };

    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    }, [isPlaying, currentSong]);

    return (
        <SongContext.Provider
            value={[
                isPlaying,
                setIsPlaying,
                currentSong,
                setCurrentSong,
                audioElem,
                isShuffle,
                setIsShuffle,
                isRepeat,
                setIsRepeat,
            ]}
        >
            <Router>
                <div className="App">
                    <div className={cx("app-wrapper")}>
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                let Layout = DefaultLayout;
                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </div>
            </Router>
            <audio
                src={currentSong.audioUrl}
                ref={audioElem}
                onTimeUpdate={onPlaying}
                onCanPlay={onLoading}
                onEnded={onEnded}
            />
        </SongContext.Provider>
    );
}

export default App;
