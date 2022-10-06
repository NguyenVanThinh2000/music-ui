import FavoriteSong from "../pages/FavoriteSong";
import Login from "../pages/Login";
import NewSong from "../pages/NewSong";
import SongTop from "../pages/SongTop";
import UserProfile from "../pages/UserProfile";

const publicRoutes = [
    { path: "/", component: SongTop },
    { path: "/new-song", component: NewSong },
    { path: "/favorite-song", component: FavoriteSong },
    { path: "/user-profile", component: UserProfile },
    { path: "/login", component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
