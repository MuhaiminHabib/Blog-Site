import Blogs from '../components/Blogs';
import Search from './Search';

const Feeds = ({ blogs, isLoading, matchedBlogs, setMatchedBlogs }) => {
    return (
        <main className='main_section'>
            <Search blogs={blogs} setMatchedBlogs={setMatchedBlogs}/>

            {isLoading? <p>Loading Data...</p> : (<Blogs blogs={matchedBlogs} isLoading={isLoading}/>)}
        </main>
    )
}

export default Feeds;