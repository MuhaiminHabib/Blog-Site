import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from './Button';

const ShowBlog = ({ blogs, setBlogs}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const blog = blogs.filter(blog => {return blog.id === parseInt(id)})

    const handleEdit = () => {
        console.log("i will edit")
      };
    
      const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => {return blog.id !== parseInt(id)});
        console.log(newBlogs)
        setBlogs([...newBlogs])
        navigate('/')
      };


    return (
        <div className='blog'>
            <div className="blog__display">
                <article>
                    <h1>{blog[0].title}</h1>
                    <p>{blog[0].dateTime}</p>
                    <p>{blog[0].body}</p>
                </article>
            </div>
            <div className='blog__controls'>
                <Link to={`/blogEdit/${blog[0].id}`}>
                    <Button 
                        text="Edit"
                        color="white"
                        bgColor="Green"
                        onClick={handleEdit}
                    />
                </Link>
                
                <Button 
                    text="Delete"
                    color="white"
                    bgColor="red"
                    onClick={() => {handleDelete(id)}}
                />
            </div>
        </div>
        
        
    )
}

export default ShowBlog;