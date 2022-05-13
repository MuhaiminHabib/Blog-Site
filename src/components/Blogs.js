import Blog from "./Blog";
import Search from "./Search";

const Blogs = ({ blogs }) => {
    return (
        blogs.map(blog => (
            <Blog key={blog.id} blog={blog}/>
        )).reverse()
    )
}

export default Blogs