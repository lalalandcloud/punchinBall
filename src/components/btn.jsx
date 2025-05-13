import './btn.css'

function Btn({barVie, setBarVie}) {

    const punch10 = () => {
        setBarVie(Math.max(barVie -10,0));
        console.log(`cav`);
    };

    return(
        <div id='divBtn'>
            <button onClick={punch10}>PUNCH</button>
        </div>
    )
}

export default Btn