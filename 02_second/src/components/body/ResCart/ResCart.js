import { Link } from "react-router-dom";
import { CDN_URL } from "../../../utill/common";
import styles from "./resCart.module.css";

const ResCart = (props) => {
  const { restData } = props;
  // const imgSrc = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
  const imgSrc = CDN_URL;
  // console.log(restData);
  // return<div>Hi</div>
  // debugger;
  return (
    <div className="p-4 w-[300px] shadow-lg flex-col gap-3 hover:bg-slate-200 hover: rounded-md">
      <img
        src={imgSrc + restData?.cloudinaryImageId}
        alt="Restornmt name"
        className="rounded-md"
      ></img>
      <h3 className="font-semibold py-2 text-lg">{restData?.name}</h3>
      <h4>{restData?.cuisines.join(", ")}</h4>
      <h4 className="pb-2"> {restData?.avgRatingString}</h4>
      <Link
        to={`/restaurant/${restData.id}`}
        className="text-blue-700 bg-gray-200 rounded-md inline hover:font-bold"
      >
        Show Details
      </Link>
      {/* <h4>{deliveryTime}</h4> */}
    </div>
  );
};

export default ResCart;

export const DiscountResCart = (WrappedComponent) => {
    return (props) => {
        debugger;
        console.log('Discounted', props?.restData?.aggregatedDiscountInfoV3.header);
    return (
      <div>
        <div className="m-2 absolute p-1 bg-gray-400">Discount: {props?.restData?.aggregatedDiscountInfoV3.header}</div>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
