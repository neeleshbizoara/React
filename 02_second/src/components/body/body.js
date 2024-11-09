import React from 'react';

import { ResCartContainer } from "./resCartContainer/resCartContainer"
import SearchBar from "./searchbar";
import styles from './body.module.css';


const RestaurantBody = () => {

    const filterRestaurantInRestContainer = React.useRef()

    function handelFilterRestaurant() {
        if (filterRestaurantInRestContainer.current) {
            filterRestaurantInRestContainer.current();
        }
    }

    function handelFilterRestByName(searchText) {
        console.log(searchText, 'Called filterRestaurantInRestContainer')
        if (filterRestaurantInRestContainer.current) {
            filterRestaurantInRestContainer.current(searchText);
        }
    }
    return (
        <div className={styles.restBody}>
            <SearchBar filterRestaurant={handelFilterRestaurant} filterRestByName={handelFilterRestByName}></SearchBar>
            <ResCartContainer refCallback={(fn) => filterRestaurantInRestContainer.current = fn}></ResCartContainer>
        </div>
    )
}

export default RestaurantBody