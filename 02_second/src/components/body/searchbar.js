import { useState } from 'react';
import styles from './searchbar.module.css';

const SearchBar = (props) => {
    const [searchText, setSearchText] = useState('');
    function getTopRatedRestaurant() {
      props.filterRestaurant()
    }

    function getRestFilterByName() {
        props.filterRestByName(searchText);
    }
    return (
        <div className='flex row-auto justify-start gap-4' >
            <input className="border border-solid rounded-sm" type="text" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }}></input>
            <button className='px-2 py-2 rounded-sm bg-blue-100 hover:bg-blue-300 ' onClick={getRestFilterByName}>Search</button>
            <button className='px-2 py-2 rounded-sm bg-blue-100 hover:bg-blue-300 ' onClick={getTopRatedRestaurant}
                onMouseOver={() => { console.log('On Mouse Over') }}>
                Top Rated Restaurant
            </button>
        </div>
    )
}

export default SearchBar;