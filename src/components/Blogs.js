import Blog from "./Blog";
import Search from "./Search";

const Blogs = ({ blogs, isLoading }) => {
    return (
        blogs.map(blog => (
            <Blog key={blog.id} blog={blog} isLoading={isLoading}/>
        )).reverse()
    )
}

export default Blogs