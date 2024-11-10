import ResCart, { DiscountResCart } from "../ResCart/ResCart";
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
    // const url =
    //   "/dapi/restaurants/list/v5?lat=18.598764164757174&lng=73.76075505061787&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const url =
      "/dapi/restaurants/search/v3?lat=18.6051462&lng=73.7567953&str=wakad&trackingId=undefined&submitAction=ENTER&queryUniqueId=e778fbe2-d923-a274-176d-98ff27eda493";
    // const url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.598764164757174&lng=73.76075505061787&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    // const data = fetch(url).then(d => console.log(d)).catch(err => console.log(err))
    // const url = 'https://jsonplaceholder.typicode.com/photos'
    const data = await fetch(url);
    const json = await data.json();
    // debugger;
    console.log(
      json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards.filter(
        (card) => card.card.card.info.name === "Indian Thali House"
      )
    );
    console.log(
      "get Data",
      json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards
    );
    setFilteredData(
      json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards
    );
    // console.log(
    //   "get Data",
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    // setFilteredData(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    // setTimeout(() => setFilteredData(initialData), 3000);
  };

  console.log("Cart render");

// Usage of DiscountResCart
const WrappedResCart = DiscountResCart(ResCart);

  const filterRestList = (param) => {
    // debugger;
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
      setFilteredData([]);
    };
  }, [props.refCallback]);

  return filteredData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className={styles.container}>
        {filteredData.map(({ card }, index) => {
          if (card.card.info.aggregatedDiscountInfoV3) {
            // console.log('Discount', card.card.info)
            return <WrappedResCart restData={card.card.info} key={card.card.info.id} uid={ card.card.analytics.context} />
          } else {
            // console.log('No Discount', card.card.info)
            return <ResCart restData={card.card.info} key={card.card.info.id}  uid={ card.card.analytics.context}/>
        }
        // return card.card.info.aggregatedDiscountInfoV3 ?  <WrappedResCart restData={card.card.info} /> :
        //   // <Link to={`/restaurant/${info.id}`} key={info.id} >
        //   <ResCart restData={card.card.info} key={card.card.info.id} />
        //   // </Link>
      })}
    </div>
  );
};
