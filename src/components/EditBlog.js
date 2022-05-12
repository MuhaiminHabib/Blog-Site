import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = ({ blogs, setBlogs }) => {
    let navigate = useNavigate();
    const { id } = useParams();
    const blog = blogs.filter(blog => {return blog.id === parseInt(id)})
    // const [editTitle, setEditTitle] = useState('');
    // const [editDescription, setEditDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        

        if(!title.length) {
             return alert("Please enter a title");
        } else {
            //add edit functionality here
            // blog[0].title
            // blog[0].dateTime
            // blog[0].body
            navigate('/')
        }
    }

    return (
        <div className="addBlog__container">
            <form className="addBlog__form">
                <div className="addBlog__form__formControl">
                    <div className="blog__text">
                        <label 
                            htmlFor="blog__text__title">
                                Blog Title
                        </label>
                        <input 
                            id="blog__text__title"
                            type="text"
                            placeholder="Enter Blog Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="blog__text">
                        <label 
                            htmlFor="blog__text__body">
                                Blog Descripiton
                        </label>
                        <input 
                            id="blog__text__body"
                            type="text"
                            placeholder="Enter Blog Descripiton"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                
                </div>
                <button type='submit' onClick={handleSubmit}>Add Blog</button>
            </form>
        </div>
    )
}

export default EditBlog;