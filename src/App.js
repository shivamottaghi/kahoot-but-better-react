import './App.css';
import {useEffect, useState} from 'react';
import {fetchFromApi} from "./helpers/fetch.js";
import parse from 'html-react-parser';

/*const DisplayFetch = () => {
    const url = 'https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple';
    fetchFromApi(url).then(res => {
        console.log(res);
    });
}*/


function Question(props) {
    const shuffle = (arr) => {
        arr.sort((a, b) => 0.5 - Math.random());
        return arr;
    }
    const question = props.question;
    const correctAnswer = props.correctAnswer;
    const handleClick = props.handleClick;
    let allAnswers = props.allAnswers;
    allAnswers = shuffle(allAnswers);


    return (
        <div className="QuestionBox">
            <p>{parse(question)}</p>
            <button className='Answers'
                    onClick={event => handleClick(allAnswers[0] === correctAnswer)}>{allAnswers[0]}</button>
            <button className='Answers'
                    onClick={event => handleClick(allAnswers[1] === correctAnswer)}>{allAnswers[1]}</button>
            <button className='Answers'
                    onClick={event => handleClick(allAnswers[2] === correctAnswer)}>{allAnswers[2]}</button>
            <button className='Answers'
                    onClick={event => handleClick(allAnswers[3] === correctAnswer)}>{allAnswers[3]}</button>
        </div>
    );
}

function QuestionsAndAnswers() {
    const url = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple';
    const [questions, setQuestions] = useState([]);
    const [questionsIsFetched, setQuestionsIsFetched] = useState(false);
    const [answersAreSet, setAnswersAreSet] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);


    useEffect(() => {
        fetchFromApi(url).then(data => {
            setQuestions(data.results);
            console.log('data', data.results);
            setQuestionsIsFetched(true);
        });

    }, []);

    useEffect(() => {
        if (questionsIsFetched) {
            addAnswers()
            setAnswersAreSet(true);
        }
    }, [questions])

    useEffect(() => {
        addAnswers()
    }, [selectedQuestion])

    const addAnswers = () => {

        let tempAnswers = [];
        //setAnswers(tempAnswers);
        if (questions.length){
            tempAnswers.push(questions[selectedQuestion ].correct_answer);
            questions[selectedQuestion ].incorrect_answers.forEach(el => {
                tempAnswers.push(el);
            });
            setAnswers([...tempAnswers]);
        }

        console.log("temp:", tempAnswers);
        console.log("answers", answers);

    }

    const handleClick = (boolResult) => {
        if (boolResult) {
            setScore(score + 1);
        }
        setSelectedQuestion(selectedQuestion +1);

    }

    return (
        <div>
            <h5>your score : {score}</h5>
            {questionsIsFetched && answersAreSet
                ? <Question handleClick={handleClick} question={questions[selectedQuestion].question} allAnswers={answers} correctAnswer={questions[selectedQuestion].correct_answer}/>
                : <p>is loading ..</p>
            }

        </div>
    );
}

function App() {

    return (
        <div className="App">

            <QuestionsAndAnswers>
            </QuestionsAndAnswers>
        </div>
    );
}

export default App;
