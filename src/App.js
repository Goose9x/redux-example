import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function App() {
  let counter = useSelector((state) => state.CounterReducer.counter);
  let darkMode = useSelector((state) => state.DarkModeReducer.isDarkMode);
  let dispatch = useDispatch();
  return (
    <>
      <div
        className='App'
        style={
          darkMode
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "blue", color: "white" }
        }
      >
        <button onClick={() => dispatch({ type: "darkMode" })}>DarkMode</button>
        <div>Counter: {counter}</div>
        <button onClick={() => dispatch({ type: "decrease" })}>-</button>
        <button onClick={() => dispatch({ type: "increase" })}>+</button>
      </div>
    </>
  );
}

export default App;
