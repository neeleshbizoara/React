import { useState } from "react";
import "./user.css";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [timerT, setTimerT] = useState(null);
  const [count2] = useState(1);

  const increaseCounter = () => {
    if (timerT) {
      console.log("Timer is already running");
      return; // Prevent multiple timers
    }
    console.log("Starting timer...");
    const newTimer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setTimerT(newTimer);
  };

  const pauseCounter = () => {
    if (timerT) {
      clearInterval(timerT);
      setTimerT(null); // Ensure timer state is cleared
      console.log("Timer paused");
    }
  };

  const clearCounter = () => {
    if (timerT) {
      clearInterval(timerT);
      setTimerT(null); // Clear the timer state
    }
    setCount(0); // Reset count
    console.log("Counter cleared");
  };

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <div>
        <label>Name:</label> {name}
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
      <button onClick={increaseCounter}>Increase Count</button>
      <button onClick={pauseCounter}>Pause Count</button>
              <button onClick={clearCounter}>Clear Count</button>
              </div>
    </div>
  );
};

export default User;




// import { useState } from "react";
// import "./user.css";

// const User = ({ name }) => {
//   const [count, setCount] = useState(0);
//   const [timerT, setTimerT] = useState(null);
//   const [count2] = useState(1);
//   const increaseCounter = () => {
//     if (!timerT) {
//       console.log("Timer is null");
//       setTimerT(
//         setInterval(() => {
//           setCount((prev) => prev + 1);
//         }, 1000)
//       );
//     } else {
//       console.log("Timer is not added");
//     }
//   };

//   const pauseCounter = () => {
//     clearInterval(timerT);
//     setTimerT(null);
//   };

//   const clearCounter = () => {
//     clearInterval(null);
//     setTimerT(null);
//     setCount(0);
//   };
//   return (
//     <div className="user-card">
//       <h2>Count: {count}</h2>
//       <h2>Count2 : {count2}</h2>
//       <div>
//         <label>Name:</label>
//         {name}
//       </div>
//       <button onClick={increaseCounter}>Increase Count</button>
//       <button onClick={pauseCounter}>Pause Count</button>
//       <button onClick={clearCounter}>Clear Count</button>
//     </div>
//   );
// };

// export default User;
