import './imgs.css'
import {bag} from "../assets/img/bag.png";
import {bagBurst} from "../assets/img/bag-burst.png";


function Imgs(){

    return(
        <div>
            <img id='imgBag' src={bag} alt="" />
            <img id='imgBagBurst' src={bagBurst} alt="" />
        </div>
    )
}

export default Imgs
