import { useReducer } from "react";

const initialState = {
  counter: 100,
};
type ActionTypes =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function counterReducer(state: typeof initialState, action: ActionTypes) {
  switch (action.type) {
    case "increment":
      return {
        ...state,

        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      throw new Error("Bad action");
  }
}

function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <div>{state.counter}</div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: 10,
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              payload: 5,
            })
          }
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default UseReducerComponent;
