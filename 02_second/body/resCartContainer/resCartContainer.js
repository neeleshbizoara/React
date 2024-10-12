import { ResCart } from "../ResCart/ResCart"
import { data } from "./data"
import styles from './resCartContainer.module.css'

export const ResCartContainer = () => {
    // console.log(data)
    return (<div className={styles.container}>
        {/* <ResCart resName="Pure Veg" cuisine="Panner, North Indian, Rice" ratting="4.4 star" deliveryTime="38 min"></ResCart> */}
        {/* <ResCart restData={data}></ResCart> */}
        {data.map((element, index) => {
            return  <ResCart restData={element.info} key={index}></ResCart>
        })}
    </div>)
}