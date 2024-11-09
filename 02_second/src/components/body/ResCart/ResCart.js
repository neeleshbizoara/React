import { Link } from "react-router-dom";
import { CDN_URL } from "../../../utill/common";
import styles from "./resCart.module.css";

export const ResCart = (props) => {
    const { restData } = props;
    // const imgSrc = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
    const imgSrc = CDN_URL
    // console.log(restData);
    // return<div>Hi</div>
    // debugger;
    return (
        <div className={styles.resCard}>
            <img src={imgSrc + restData?.cloudinaryImageId} alt="Restornmt name" style={{width: '200px', height: '200px'}}></img>
            <h3>{restData?.name}</h3>
            <h4>{restData?.cuisines.join(', ')}</h4>
            <h4> {restData?.avgRatingString}</h4>
            <Link to={`/restaurant/${restData.id}`}>Show Details</Link>
            {/* <h4>{deliveryTime}</h4> */}
        </div>
    );
};