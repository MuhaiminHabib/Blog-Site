import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = ({ handleAdd }) => {
    let navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        

        if(!title.length) {
             return alert("Please enter a title");
        } else {
            handleAdd(title, description);
            setTitle('');
            setDescription('');
            navigate('/')
        }
    }

    return (
        <main className='main_section'>
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
                    </div> hello
                    <div className="addBlog__form__formControl">
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
        </main>
 
    )
}

export default AddBlog;