import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';

const ShowBlog = ({ blogs, setBlogs, handleDelete }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const blog = blogs.filter(blog => {return blog.id === parseInt(id)})
    
    const handleBlogDelete = (id) => {
        handleDelete(id)
        navigate('/')
    }

    return (
        <main className='main_section'>
            <div className='blog'>
                <div className="blog__display">
                    <article>
                        <h1>{blog[0].title}</h1>
                        <p>{blog[0].dateTime}</p>
                        <p>{blog[0].body}</p>
                    </article>
                </div>
                <div className='blog__controls'>
                    <Button 
                        text="Like"
                        color="white"
                        bgColor="red"
                        onClick={() => {}}
                    />
                    <Link to={`/blogEdit/${blog[0].id}`}>
                        <Button 
                            text="Edit"
                            color="white"
                            bgColor="Green"
                            // onClick={handleEdit}
                        />
                    </Link>
                    
                    <Button 
                        text="Delete"
                        color="white"
                        bgColor="red"
                        onClick={() => {handleBlogDelete(id)}}
                    />
                </div>
            </div>
        </main>
        
    )
}

export default ShowBlog;