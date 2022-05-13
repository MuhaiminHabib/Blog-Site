import Blogs from "./Blogs";
import Search from "./Search";

const Feeds = ({ blogs, matchedBlogs, setMatchedBlogs }) => {
    return (
        <main>
            <Search blogs={blogs} setMatchedBlogs={setMatchedBlogs}/>
            <Blogs blogs={matchedBlogs}/>
        </main>
    )
}

export default Feeds;