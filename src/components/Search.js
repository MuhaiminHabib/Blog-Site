import { useState, useEffect } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("i will handle the search")
    // }

    useEffect(() => {
        console.log(search)
    }, [search])

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
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                {/* <button type='submit' onClick={handleSubmit}>Search</button> */}
            </form>
        </div>
    )
}

export default Search;