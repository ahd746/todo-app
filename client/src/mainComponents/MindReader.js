import React, { useContext } from 'react';
import Card from '../components/Card';

import { ThemeContext } from '../contexts/ThemeContext'

export default function MindReader() {
  const { sum, toggle, setToggle } = useContext(ThemeContext)
  let msg = "Read My Mind";
  if (sum > 60 || sum < 1) {
    msg = "choose a number from 1 to 60"
  } else {
    msg = `You choosed ${sum}`;
  }

  return (
    <div className="container">
      <h1>Mind Reader Game</h1  >
      <h3>Choose a number from 1 and 60 and press on the tables that contain it</h3>
      <div className="row mt-4">
        <div className="col-lg" >
          <Card binaryNumber={1} />
        </div>
        <div className="col-lg" >
          <Card binaryNumber={4} />
        </div>
        <div className="col-lg" >
          <Card binaryNumber={3} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg" >
          <Card binaryNumber={2} />
        </div>
        <div className="col-lg" >
          <Card binaryNumber={6} />
        </div>
        <div className="col-lg" >
          <Card binaryNumber={5} />
        </div>
      </div>
      <div className="text-center mb-5">
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            setToggle(!toggle)
          }}>
          Read My Mind
          </button>
        <p className={toggle ? 'font-weight-bold p-4' : 'd-none'}>
          {msg}
        </p>
      </div>
    </div>
  );
}
