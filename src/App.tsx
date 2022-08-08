import CustomHookComponent from "./CustomHookComponent";
import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import UseStateComponent from "./UseStateComponent";

function App() {
  return (
    <div>
      <h1>CustomHook</h1>
      <CustomHookComponent />
      <h1>UseRef</h1>
      <UseRefComponent />
      <h1>UseReducer</h1>
      <UseReducerComponent />
      <h1>UseContext</h1>
      <UseContextComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useState</h1>
      <UseStateComponent />
    </div>
  );
}

export default App;
