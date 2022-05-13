import { useState, useEffect } from 'react';

const Search = ({ blogs }) => {
    const [searchPattern, setSearchPattern] = useState('');
    const [matchedBlogs, setMatchedBlogs] = useState('')

    useEffect(() => {
        console.log(searchPattern)
        let searchString = new RegExp(searchPattern, 'i');
        setMatchedBlogs(blogs.filter(blog => (searchString.test(blog.title))))
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
            </form>
        </div>
    )
}

export default Search;