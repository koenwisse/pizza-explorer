//1. We're importing the useSelector hook from react-redux, allows to extract data from the Redux store state, using a selector function.
import { useSelector } from "react-redux";

// .. because 1 level up to src out of components and then in store
import { selectUser } from "../store/user/selectors.js";

export default function PizzaList() {
  //2. Use useSelector to get relevant data from redux store
  const user = useSelector(selectUser);
  return (
    <div>
      <h1>Pizza explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <p>TODO: the list of pizzas</p>
    </div>
  );
}
