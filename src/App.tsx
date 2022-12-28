import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Question from './components/Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';
function App() {
  return (
    <div className="App">
      <div className="App-constructor">
       
        <ResultPage/>
      </div>
    </div>
  );
}

export default App;
