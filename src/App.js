import './App.css';
import { useEffect, useState } from 'react';

import {fetchFromApi} from "./helpers/fetch.js";

/*const DisplayFetch = () => {
    const url = 'https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple';
    fetchFromApi(url).then(res => {
        console.log(res);
    });
}*/
function QuestionAndAnswer() {
    const url = 'https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple';
    const [questions , setQuestions] = useState([]);
    const [questionsIsFetched , setQuestionsIsFetched] = useState(false);
    const [answersAreSet , setAnswersAreSet] = useState(false);
    const [selectedQuestion , setSelectedQuestion] = useState(0);
    const [answers , setAnswers] = useState([]);


    useEffect(()=>{
        fetchFromApi(url).then(data=> {setQuestions(data.results);
            console.log(data.results);
            setQuestionsIsFetched(true);
        });

    }, []);

    useEffect(()=>{
        if (questionsIsFetched){
            addAnswers()
            setAnswersAreSet(true);
        }
    } , [questions])

    const addAnswers = () => {
        let tempAnswers = [];
        tempAnswers.push(questions[selectedQuestion].correct_answer);
        questions[selectedQuestion].incorrect_answers.forEach(el => {
           tempAnswers.push(el);
        });
        setAnswers(tempAnswers);
        console.log(answers);
    }

   if (questionsIsFetched && answersAreSet){
       return(
         <div>
            <p>{questions[selectedQuestion].question}</p>
             <ul>
                 <li>
                     {answers[0]}
                 </li>
                 <li>
                     {answers[1]}
                 </li>
                 <li>
                     {answers[2]}
                 </li>
                 <li>
                     {answers[3]}
                 </li>
             </ul>
         </div>

       );
   }else {
       return (
           <p>is loading ..</p>
       );
   }
}

function App() {

    return (
        <div className="App">
            <QuestionAndAnswer>
            </QuestionAndAnswer>
        </div>
    );
}

export default App;
