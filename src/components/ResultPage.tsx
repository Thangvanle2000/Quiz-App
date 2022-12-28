import * as React from 'react';

export interface IAppProps {
}

export default function ResultPage (props: IAppProps) {
  return (
    <div>
    <h1 className='fs-2 lh-lg text-center mt-5'>Your score is : 0</h1>
     <div className="btn-result">
     <button className='btn-question'>Try Again</button>
     <button className='btn-question bg-danger text-white'>Review</button>
     </div>
 </div>
  );
}
