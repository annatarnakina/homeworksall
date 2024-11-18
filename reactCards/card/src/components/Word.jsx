function Word(props) {
    return (
        <div className="word">
                <h4 className="word-title">{props.word}</h4>
                <p className="word-text">{props.wordMeaning}</p>
                <p className="word-text">{props.wordTranscription}</p>
                <p className="word-text">{props.wordTranslation}</p>
                <p className="word-text">{props.wordTopic}</p>
        </div>
    );
}

export default Word;