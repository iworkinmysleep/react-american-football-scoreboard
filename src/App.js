//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

const [homescore, sethomescore] = useState(2);
const [awayscore, setawayscore] = useState(3);
const [timer, setTimer] = useState(60)

useEffect(() => {
  const clock =
    timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
  return () => clearInterval(clock);
}, [timer]);
  return (    

    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homescore}</div>
          </div>
          <div className="timer">15:{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayscore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => sethomescore(homescore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => sethomescore(homescore + 3)}>Home Field Goal</button>
        </div>
        
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => setawayscore(awayscore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setawayscore(awayscore + 3)}>Away Field Goal</button>
        
        {/* <div className= 'quarter_change'>
          <button className= 'quarterButton' onClick={() => setQuarter(quarter + 1)}>Change Quarter</button>
        </div> */}
        </div>
      </section>
    </div>
  );
}

export default App;
