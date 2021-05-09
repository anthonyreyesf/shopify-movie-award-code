import Navbar from "./Common/Navbar";
import Home from "./Sections/Home";
import Movies from "./Sections/Movies";

import "./root.scss";

function Root() {
    return (
        <div className="Root">
            <Navbar />
            <Home />
            <Movies />
        </div>
    );
}

export default Root;