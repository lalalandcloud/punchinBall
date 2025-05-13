import './btn.css'

function Btn({barVie, setBarVie}) {

    const punch10 = () => {

        if(barVie === 0){
            setBarVie(100)
        }
        else{
            setBarVie(Math.max(barVie -10,0));
        }
    };
    return(
        <div id='divBtn'>
            <button onClick={punch10}>{barVie === 0 ? "Rejouer" : "PUNCH"}</button>
        </div>
    )
}

export default Btn