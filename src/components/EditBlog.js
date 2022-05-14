import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dateFormat from "dateformat";

const EditBlog = ({ blogs, handleEdit }) => {
    let navigate = useNavigate();
    const { id } = useParams();
    const blog = blogs.filter(blog => {return blog.id === parseInt(id)})
    const [editTitle, setEditTitle] = useState(blog[0].title);
    const [editDescription, setEditDescription] = useState(blog[0].body);
    // const [updatedDateTime, setUpdatedDateTime] = useState(blog[0].dateTime);

    
    // const updateTime = () => {
    //     setUpdatedDateTime(dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT"));
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!blog[0].title.length) {
             return alert("Please enter a title");
        } else {
            let editDateTime = dateFormat(new Date(), "fullDate");
            // console.log(editDescription);
            handleEdit(parseInt(id), editTitle, editDescription, editDateTime)
            navigate('/')
        }
    }

    return (
        <main className='main_section'>
            <div className="editBlog__container">
                <form className="editBlog__form">
                    <div className="editBlog__form__formControl">
                        <div className="blog__text">
                            <label 
                                htmlFor="blog__text__title">
                                    Blog Title
                            </label>
                            <input 
                                id="blog__text__title"
                                type="text"
                                placeholder="Enter Blog Title"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
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
                                value={editDescription}
                                onChange={(e) => setEditDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type='submit' onClick={handleSubmit}>Update Blog</button>
                </form>
            </div>
        </main>
    )
}

export default EditBlog;