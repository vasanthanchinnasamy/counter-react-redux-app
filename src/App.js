import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, logIn, logOut, reset } from "./redux/actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>
        Hello World <br /> A Simple Redux Project. Yaay!
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Deccrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <h2>For Logged in users only</h2>
      <p>Log in to see a secret about me</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? (
        <div>
          <p>
            I don't more than 50% of redux. But if you know 50% of it, you're
            like a Superman.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
