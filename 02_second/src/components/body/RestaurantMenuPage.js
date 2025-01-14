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
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // const { info } = resInfo?.cards[2]?.card?.card;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      .categories;

  return (
    <div>
      {/* <h1>{info?.name}</h1>
      <h3>{info?.cuisines.join(", ")}</h3>
      <h3>{info?.costForTwoMessage}</h3>
      <h2>Menu</h2> */}
      {itemCards.map((ele) => {
        console.log("Main ", ele?.title);
        return ele?.itemCards.map((ele1) => {
          console.log(ele1.card.info);
          const { name, category, price } = ele1.card.info;
          return (
            <div className="p-4 w-[300px] shadow-lg gap-3 hover:bg-slate-200 hover: rounded-md flex m-4">
              <h2>{ele?.title}</h2>
              <ul>
                <li>{name}</li>
                <li>{category}</li>
                <li>{price / 100}</li>
              </ul>
            </div>
          );
        });
        // const { name, category, description } = ele?.itemCards?.card?.info;
        // return (
        //   <ul>
        //     <li>{name}</li>
        //     <li>{category}</li>
        //     <li>{description}</li>
        //   </ul>
        // );
      })}
    </div>
  );
};

export default RestaurantMenuPage;
