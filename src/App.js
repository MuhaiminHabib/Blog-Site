import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import dateFormat from "dateformat";
import styled from 'styled-components';
import './App.css';

import AddBlog from './components/AddBlog';
import Header from './components/header/Header';
import ShowBlog from './components/ShowBlog';
import EditBlog from './components/EditBlog';
import Feeds from './feeds/Feeds';
import Footer from './components/Footer';
import About from './components/about/About';
import ApiRequest from './ApiRequest';

// feeds, showBlog, editBlog are <main>

function App() {
  const blogUrl = "http://localhost:8000/blogs";
  
  const [blogs, setBlogs] = useState([]);
  const [matchedBlogs, setMatchedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);



  //use TryCatch and fetchError 
  //need to refactor this fetch
useEffect(() => {
  const getDataFromServer = async () => {
    setIsLoading(true)
    const response = await fetch(blogUrl);
    const data = await response.json();
    setBlogs([...data])
    setIsLoading(false)
  }
  getDataFromServer()
}, [])


  
//================handle blog add=======================
  const handleAdd = async (title, description) => {
    console.log("i was called");
    console.log(title);
    console.log(description);

    let id = (() => {
        return blogs.length ? blogs[blogs.length - 1].id + 1 : 1;
    })()

    let dateTime = dateFormat(new Date(), "fullDate");
    
    const newBlog = {
      id: id,
      title: title,
      body: description,
      like: 0,
      dateTime: dateTime
    };
    setBlogs([...blogs, newBlog]);

    const addOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({...newBlog})
    }
    const response = await ApiRequest(blogUrl, addOptions);
    setFetchError(response)
  }
//================handle blog edit=======================
  const handleEdit = async (id, editTitle, editDescription, editDateTime) => {
    setBlogs(blogs.map(blog => (blog.id === id ? {...blog, title: editTitle, body: editDescription, dateTime:editDateTime} : blog)))
    const editUrl = `${blogUrl}/${id}`;
    const editOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: editTitle, body: editDescription, dateTime:editDateTime })
    }

    const response = await ApiRequest(editUrl, editOptions);
    setFetchError(response);
  }


  //================handle blog like=======================
  // const handleLike = async (id, likeCount) => {
  //   const targetBlog = blogs.map(blog => (blog.id === parseInt(id) ? {...blog, like: likeCount} : blog))
  //   setBlogs(targetBlog);
  //   console.log(blogs)

  //   const likeUrl = `${blogUrl}/${id}`;
  //   const likeOptions = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({like: likeCount})
  //   }

  //   const response = await ApiRequest(likeUrl, likeOptions);
  //   setFetchError(response);
   
  // }

//================handle blog delete=======================
  const handleDelete = async (id) => {
    const newBlogsList = blogs.filter(blog => {return blog.id !== parseInt(id)});
    console.log(newBlogsList)
    setBlogs([...newBlogsList])

    const deleteUrl = `${blogUrl}/${id}`;
    const deleteOptions = {
      method: 'Delete'
    }

    const response = await ApiRequest(deleteUrl, deleteOptions);
    setFetchError(response)
};

  return (
    
      <Router>
        <Header />
        <Container>
        <Routes>
          <Route 
            path="/" 
            element={<Feeds 
              blogs={blogs} 
              isLoading = {isLoading}
              matchedBlogs = {matchedBlogs}
              setMatchedBlogs = {setMatchedBlogs}
            />} 
          />
          <Route 
              path="/addBlog" 
              element={<AddBlog 
                handleAdd={handleAdd}
            />} 
          />
          <Route 
            path="/blogDetails/:id" 
            element={<ShowBlog 
              blogs={blogs}
              handleDelete={handleDelete}
              // handleLike={handleLike}
            />}  
          />
          <Route 
            path="/blogEdit/:id" 
            element={<EditBlog 
              blogs={blogs}
              setBlogs={setBlogs}  
              handleEdit={handleEdit}
            />}  
          />
          <Route 
            path="/about" 
            element={<About />}  
          />
        </Routes>
        </Container>
        <Footer />
      </Router>
  );
}

export default App;


const Container = styled.div`
flex-grow: 100;
overflow-y: scroll;
border: 1px solid var(--color-text);
  width: var(--container-width-lg);
  margin: 0 auto;
`



