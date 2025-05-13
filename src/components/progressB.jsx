import './progressB.css'


function ProgressB({barVie}){
    const blocs = [];
    for (let i = 0; i < 10; i++){
        if (i < barVie/10){
            blocs.push(<div key = {i} className='life-block active'></div>);
        }
        else{
            blocs.push(<div key={i} className='life-block'></div>);
        }
    }


    return (
        <div id='barreVie'>
            {blocs}
        </div>
    )
}

export default ProgressB