import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';

const ShowBlog = ({ blogs, handleDelete, handleLike }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const blog = blogs.filter(blog => {return blog.id === parseInt(id)})


    const [likeCount, setLikeCount] = useState(parseInt(blog[0].like));

    console.log("likeCount state is saying: " + likeCount)

    useEffect(() => {
        
    }, [likeCount])


    const handleBlogDelete = (id) => {
        handleDelete(id)
        navigate('/')
    }

    const handleBlogLike = (id) => {
    //    blog[0].like = parseInt(blog[0].like + 1);
        setLikeCount(blog[0].like + 1)
        handleLike(id, likeCount);
    }

    return (
        <main className='main_section'>
            <div className='blog'>
                <div className="blog__display">
                    <article>
                        <h1>{blog[0].title}</h1>
                        <p>{blog[0].dateTime}</p>
                        <p>{blog[0].body}</p>
                        <h4>{likeCount}{blog[0].like !== 1  ? ' likes' : ' like'}</h4>
                    </article>
                </div>
                <div className='blog__controls'>
                    <Button 
                        text="Like"
                        color="white"
                        bgColor="steelblue"
                        onClick={() => {handleBlogLike(blog[0].id)}}
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