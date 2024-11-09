import { useEffect, useState } from "react";
import Shimmer from "./ResCart/Shimmer";
import { useParams } from "react-router-dom";
import useRestauarantMenu from "../../utill/useRestauarantMenu";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const resInfo = useRestauarantMenu(resId);
  // const [resInfo, setResInfo] = useState(null);

  // useEffect(() => {
  //   // setRestaurantDish(null)
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6051462&lng=73.7567953&restaurantId=${resId}&submitAction=ENTER`
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const { info } = resInfo?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{info?.name}</h1>
      <h3>{info?.cuisines.join(", ")}</h3>
      <h3>{info?.costForTwoMessage}</h3>
      <h2>Menu</h2>
      {itemCards.map((ele) => {
        const { name, category, description } = ele?.card?.info;
        return (
          <ul>
            <li>{name}</li>
            <li>{category}</li>
            <li>{description}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default RestaurantMenuPage;
