import { useState, useEffect } from 'react';

const Search = ({ blogs }) => {
    const [searchPattern, setSearchPattern] = useState('');
    const [matchedBlogs, setMatchedBlogs] = useState('')

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("i will handle the search")
    // }

    // array.reverse() to reverse an array
        const string = "hello i am habib";
        // console.log(string.match());

    // useEffect(() => {
    //     console.log(searchPattern)
    //     let searchString = `/${searchPattern}/i`;
    //     console.log(blogs.filter(blog => (blog.title.match(searchString) !== null)))
    // }, [searchPattern]);

    //`\\b${searchPattern}\\b

    useEffect(() => {
        console.log(searchPattern)
        // let searchString = /searchPattern/i;
        let searchString = new RegExp(searchPattern, 'i');
        console.log(blogs.filter(blog => (searchString.test(blog.title))))
    }, [searchPattern]);

    return (
        <div className="search__container">
            <form className="search__form">
                <div className="search__form__formControl">
                    <div className="search__text">
                        <label 
                            htmlFor="search__text__title">
                                Search Text
                        </label>
                        <input 
                            id="search__text__title"
                            type="text"
                            placeholder="Enter Search Title"
                            value={searchPattern}
                            onChange={(e) => setSearchPattern(e.target.value)}
                        />
                    </div>
                </div>
                {/* <button type='submit' onClick={handleSubmit}>Search</button> */}
            </form>
        </div>
    )
}

export default Search;