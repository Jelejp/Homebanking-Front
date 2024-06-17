// import { useSelector } from "react-redux";
// import { Navigate, Route } from "react-router-dom";

// function AuthRoute(route){
//     const { loggedIn } = useSelector((store) => store.auth);

//     return loggedIn ? <Route path = {route.path} key = {route.key} element = {route.element} /> : <Navigate to= '/'/>
// }

// export default AuthRoute;

import { useSelector } from "react-redux";

function AuthRoute({ element }) {
//   const { loggedIn } = useSelector((store) => store.auth);
const { loggedIn} = useSelector(state => state.auth); 

  return loggedIn && element;
}

export default AuthRoute;
