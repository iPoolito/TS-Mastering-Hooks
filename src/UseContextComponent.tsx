import UserContext, { UserState } from "./store";
import { useContext, useState } from "react";

function ConsumerComponent() {
  const user = useContext(UserContext);
  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}
function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Jane",
    last: "Smith",
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() => {
          setUser({
            first: "Josie",
            last: "Wales",
          });
        }}
      >
        Change context
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
