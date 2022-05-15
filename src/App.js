import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import dateFormat from "dateformat";
import './App.css';

import AddBlog from './components/AddBlog';
import Header from './components/Header';
import ShowBlog from './components/ShowBlog';
import EditBlog from './components/EditBlog';
import Feeds from './components/Feeds';
import Footer from './components/Footer';

// feeds, showBlog, editBlog are <main>

function App() {
  const postUrl = "http://localhost:8000/blogs";
  
  const [blogs, setBlogs] = useState([]);
  const [matchedBlogs, setMatchedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [fetchError, setFetchError] = useState(null);

useEffect(() => {
  const getDataFromServer = async () => {
    setIsLoading(true)
    const response = await fetch(postUrl);
    const data = await response.json();
    console.log(data);
    setBlogs([...data])
    setIsLoading(false)
  }

  getDataFromServer()

}, [])



  // useEffect(() => {
  //   const getTasksFromServer = async () => {
  //     console.log("getting frm server")
  //     try {
  //       const response = await fetch(postUrl);
  //       const data = await response.json();
  //       console.log(data)
  //       setBlogs(data)
  //     } catch (err) {
  //       console.log(err.stack)
  //     } finally {
  //       console.log(blogs)
  //     }
     
  //   }
  //   getTasksFromServer();
      
  // }, [])

  //Fetch all Blogs
  // const handleFetchAllBlogs = async () => {
  //   const res = await fetch(postUrl);
  //   const data = await res.json();
  //   console.log(data)
  //   return data;
  // }
  //Fetch a Blog

  

  const handleAdd = (title, description) => {
    console.log("i was called");
    console.log(title);
    console.log(description);

    let id = (() => {
        return blogs.length ? blogs[blogs.length - 1].id + 1 : 1;
    })()

    console.log(`blogs length is: ${blogs.length}`)
    console.log(`id is ${id}`)

    let dateTime = dateFormat(new Date(), "fullDate");
    
    const newBlog = {
      id: id,
      title: title,
      body: description,
      dateTime: dateTime
    };
    setBlogs([...blogs, newBlog]);
  }

  const handleEdit = (id, editTitle, editDescription, editDateTime) => {

    console.log(id);
    console.log(editTitle);
    console.log(editDescription)
    console.log(editDateTime)

    setBlogs(blogs.map(blog => (blog.id === id ? {...blog, title: editTitle, body: editDescription, dateTime:editDateTime} : blog)))
  }

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<Feeds 
              blogs={blogs} 
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
              setBlogs={setBlogs}  
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



