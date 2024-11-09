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
        <div style={{display: "flex", flexDirection: 'row' }}>
            <input className={styles.filterInput} type="text" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }}></input>
            <button className={styles.searchBtn} onClick={getRestFilterByName}>Search</button>
            <button className={styles.searchBtn} onClick={getTopRatedRestaurant}
                onMouseOver={() => { console.log('On Mouse Over') }}>
                Top Rated Restaurant
            </button>
        </div>
    )
}

export default SearchBar;