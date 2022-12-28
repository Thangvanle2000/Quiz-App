import * as React from 'react';

export interface IAppProps {
}

export default function HomePage (props: IAppProps) {
  return (
    <div>
       <h1>Welcome to React Quiz Game!</h1>
        <div className="btn-start">
        <button className='btn-app'>Start</button>
        </div>
    </div>
  );
}
