import { ResCartContainer } from "./resCartContainer/resCartContainer"
import SearchBar from "./searchbar";
import styles from './body.module.css';


const RestaurantBody = () => {
    return (
        <div className={styles.restBody}>
            <SearchBar></SearchBar>
            <ResCartContainer></ResCartContainer>
        </div>
    )
}

export default RestaurantBody