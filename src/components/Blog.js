import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    return (
        
            <article>
                <Link to={`/blogDetails/${blog.id}`}>
                    <h1>{blog.title}</h1>
                    <p>{blog.body.length > 25 ? `${blog.body.slice(0, 25)}...` : blog.body}</p>
                </Link>
                 <p>{blog.dateTime}</p>
            </article>
        
    )
}

export default Blog;