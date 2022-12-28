import * as React from 'react';

export interface  QuestionPageProps {
}

export default function QuestionPage (props:  QuestionPageProps) {
  return (
    <div className='App-constructor'>
      <div className='header'>
      <div className="btn-start mt-5">
        <button className='btn-question btn-secondary black' >Previous</button>
        <button className='btn-success btn-question text-dark'>Next</button>
        </div>
        </div>
        <div className='container d-flex justify-content-center'>
         <div className=' rounded content-question'>
          <div className="number-question pb-3">
            <h5 className='fs-5 text-ques fst-normal'> Question 1/5</h5>
          </div>
          <div className='content mb-5'>
            <p className='fw-bold fs-5 pb-4'> ____Can be done while multiple elements need to be returned from a components</p>
          </div>
          <div className="answer pt-4 d-flex justify-content-center align-items-center flex-column">
          <div className="answer-content d-flex justify-content-start align-items-center">
           <p className='text-lg font-answer mt-3'>content answer</p>
          </div>
          <div className="answer-content d-flex justify-content-start ">
           <p className='text-lg font-answer mt-3'>content answer</p>
          </div>
          <div className="answer-content d-flex justify-content-start ">
           <p className='text-lg font-answer mt-3'>content answer</p>
          </div>
          <div className="answer-content d-flex justify-content-start ">
           <p className='text-lg font-answer mt-3'>content answer</p>
          </div>
         </div>
      
        </div>
        
        </div>
    </div>
  );
}
