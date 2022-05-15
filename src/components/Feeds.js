import Blogs from "./Blogs";
import Search from "./Search";

const Feeds = ({ blogs, isLoading, matchedBlogs, setMatchedBlogs }) => {
    console.log(blogs)
    return (
        <main className='main_section'>
            <Search blogs={blogs} setMatchedBlogs={setMatchedBlogs}/>

            {isLoading? <p>Loading Data...</p> : (<Blogs blogs={matchedBlogs} isLoading={isLoading}/>)}
        </main>
    )
}

export default Feeds;