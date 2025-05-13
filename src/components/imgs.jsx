import './imgs.css'
import bag from "../assets/img/bag.png";
import bagBurst from "../assets/img/bag-burst.png";
import Btn from './btn';

function Imgs({barVie}){
    const gamOver = barVie === 0;
    

    return(
        <div id='divImg'>
            <img src={gamOver ? bagBurst : bag} alt="" />
        </div>
    )
}

export default Imgs
