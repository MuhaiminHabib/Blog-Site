import Blogs from "./Blogs";
import Search from "./Search";

const Feeds = ({ blogs }) => {
    return (
        <main>
            <Search blogs={blogs}/>
            <Blogs blogs={blogs}/>
        </main>
    )
}

export default Feeds;