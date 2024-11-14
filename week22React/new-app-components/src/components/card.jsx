function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-universe">{props.universe}</p>
                <p className="card-alterego">{props.alterego}</p>
                <p className="card-occupation">{props.occupation}</p>
                <p className="card-friends">{props.friends}</p>
                <p className="card-superpowers">{props.superpowers}</p>
                <p className="card-info">{props.info}</p>
            </div>
            <div className="card-footer">
            <img className="character" src={props.url} alt={props.name}/>
            </div>
        </div>
    );
}

export default Card