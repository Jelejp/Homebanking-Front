import { useSelector } from "react-redux";

function AuthRoute({ element }) {
  //   const { loggedIn } = useSelector((store) => store.auth);
  const { loggedIn } = useSelector(state => state.auth);

  return loggedIn && element;
}

export default AuthRoute;
