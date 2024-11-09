import { ResCart } from "../ResCart/ResCart";
import { data as initialData } from "../../../utill/data";
import styles from "./resCartContainer.module.css";
import { useEffect, useState } from "react";
import Shimmer from "../ResCart/Shimmer";
import { Link } from "react-router-dom";

export const ResCartContainer = (props) => {
  // console.log(data)
  const [filteredData, setFilteredData] = useState([]); // Use state for data
  let cacheSearchText = "";

  useEffect(() => {
    console.log("Called Effect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const url =
      "/dapi/restaurants/list/v5?lat=18.598764164757174&lng=73.76075505061787&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    // const url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.598764164757174&lng=73.76075505061787&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    // const data = fetch(url).then(d => console.log(d)).catch(err => console.log(err))
    // const url = 'https://jsonplaceholder.typicode.com/photos'
    const data = await fetch(url);
    const json = await data.json();
    console.log(
      "get Data",
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredData(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    // setTimeout(() => setFilteredData(initialData), 3000);
  };

  console.log("Cart render");

  const filterRestList = (param) => {
    debugger;
    if (param && param !== cacheSearchText) {
      cacheSearchText = param;
      const data = initialData.filter((elem) =>
        elem.info.name.toLowerCase().includes(param.toLowerCase())
      );
      setFilteredData(data);
    } else {
      const data = initialData.filter((elem) => elem.info.avgRating >= 4.5);
      setFilteredData(data);
    }
  };

  useEffect(() => {
    if (props.refCallback) {
      props.refCallback(filterRestList);
    }
    return () => {
      // Called when component is unmount
      setFilteredData([])
    }
  }, [props.refCallback]);

  return filteredData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className={styles.container}>
      {filteredData.map(({ info }, index) => {
        return (
          // <Link to={`/restaurant/${info.id}`} key={info.id} >
            <ResCart restData={info} key={info.id}/>
          // </Link>
        );
      })}
    </div>
  );
};
