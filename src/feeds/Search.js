import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({ blogs, setMatchedBlogs }) => {
    const [searchPattern, setSearchPattern] = useState('');
   

    useEffect(() => {
//        console.log(searchPattern)
        let searchString = new RegExp(searchPattern, 'i');
        setMatchedBlogs(blogs.filter(blog => (searchString.test(blog.title))))
    }, [searchPattern, blogs]);

    return (
        <StyledSearchContainer>
            <form className="search__form">
                <StyledSearchLabel 
                    htmlFor="search__text__title">
                        Search Text
                </StyledSearchLabel>
                <StyledSearchInput 
                    id="search__text__title"
                    type="search"
                    placeholder="Enter Search Title"
                    value={searchPattern}
                    onChange={(e) => setSearchPattern(e.target.value)}
                />
            </form>
        </StyledSearchContainer>
    )
}

export default Search;

const StyledSearchContainer = styled.div`
    margin: 2rem 0 1rem;
`

const StyledSearchLabel = styled.label`
    position: absolute;
    left: -9999px;
`

const StyledSearchInput = styled.input`
    font-size: inherit;
    padding: 0.5rem;
    text-align: start;
    width: 90%;
    border-radius: 0.5rem;
    border: none;
    width: 200px;
    transition: width 0.1s ease-in-out;
    border: 2px solid var(--color-bg);

    &:focus {
        font-size: 1.5rem;
        width: 80%;
    }
`