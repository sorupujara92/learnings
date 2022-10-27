import Card from "../Card/card.component";

import "./card.styles.css";

const CardList = ({filteredMonsters}) => {

return (

<div className="card-list" >
    
            {

filteredMonsters.map((monster) => {
    console.log(monster);

    const {id,name,email} = monster;
    return <Card name={name} email={email} id={id}></Card>
}


)
            }
            </div>

);
}
export default CardList;