import cardlist from '../CardList/cardlist.component';
import './card.styles.css'

const Card = ({id,name,email}) => {
   

    return (
        <div className="card-container" key={id}> <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2andsize=180*180`}/>
        <h2>{name}</h2>
        <p>{email}</p>
        </div>

    );
}

export default Card;