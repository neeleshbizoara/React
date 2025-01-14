import { useEffect, useState } from "react";
import { API_URL } from "./common";

function useRestauarantMenu(props) {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchRestInfo();
  }, []);

  const fetchRestInfo = async () => {
    const data = await fetch(`${API_URL}${props}`);
    const json = await data.json();
    console.log(json);
    console.log(this);
    setRestInfo(json.data);
  };

  // return restInfo;

  return null
}

export default useRestauarantMenu;
