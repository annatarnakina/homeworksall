function CardWord(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.word}</h4>
                <p className="card-text">{props.wordMeaning}</p>
                <p className="card-text">{props.wordTranscription}</p>
                <p className="card-text">{props.wordTranslation}</p>
                <p className="card-text">{props.wordTopic}</p>
            </div>
        </div>
    );
}

export default CardWord;