import { Route, Routes } from "react-router-dom";
import Home from "../views/home";
import PostIndex from "../views/pages";
import PostCreate from "../views/pages/create";
import PostEdit from "../views/pages/edit";

function RoutesIndex() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostIndex />} />
            <Route path="/posts/create" element={<PostCreate />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
        </Routes>
    )
}

export default RoutesIndex;