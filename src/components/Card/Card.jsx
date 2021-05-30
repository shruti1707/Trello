import './Card.css';


const Card = ({cards }) => {

    return ( 


        <div className="card">

            

            <div className="cards">
                
            {cards.map((card) => (
                <div className="cardlist" key = {card.id}>
                    <h2>{card.name}</h2>
                    
                </div>
                
            ))}

            </div>
            

        </div>


     );
}
 
export default Card;