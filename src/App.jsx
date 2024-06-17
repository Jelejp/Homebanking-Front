import MainLayount from './layount/MainLayount'

import Cards from './pages/Cards'
import Accounts from './pages/Accounts'
import Loans from './pages/Loans'
import ApllyLoan from './pages/ApplyLoan'
import Transactions from './pages/Transactions'
import ApplyCard from './pages/ApplyCard'
import CreateAccount from './pages/CreateAccount'
import Account from './pages/Account'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthRoute from './HOCs/AuthRoute'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

const routesAuth = [
  {
    path: '/accounts',
    element: <Accounts/>,
    key: 'Accounts',
  },
  {
    path: '/cards',
    element: <Cards/>,
    key: 'Cards',
  },
  {
    path: '/loans',
    element: <Loans/>,
    key: 'Loans',
  },
  {
    path: '/apply-loan',
    element: <ApllyLoan/>,
    key: 'ApplyLoan',
  },
  {
    path: '/transactions',
    element: <Transactions/>,
    key: 'Transactions',
  },
  {
    path: '/apply-card',
    element: <ApplyCard/>,
    key: 'ApplyCard',
  },
  {
    path: '/create-account',
    element: <CreateAccount/>,
    key: 'CreateAccount',
  },
  {
    path: "/account/:id",
    element: <Account/>,
    key: 'Account',
  },

]
const routesNoAuth =
  [{
    path: '/login',
    element: <Login/>,
    key: 'login',
  },
  {
    path: '/register',
    element: <Register/>,
    key: 'register',

  }]
const routesAll = [{
  path: '/',
  element: <Home/>,
  key: 'Home',
}]

function App() {
  // useEffect(() => {
  //   console.log('me monte');
  //   return() => {
  //     console.log('me desmonte');
  //   }
  // },[])


  const { loggedIn} = useSelector(state => state.auth); 

  return (

    <BrowserRouter>
      <MainLayount>
        <Routes>

        {/* <Route path="/" element={<Home />} />
          {routesAll.map(route => (
            <Route key={route.key} path={route.path} element={route.element} />
          ))}

          {
            !loggedIn && routesNoAuth.map(route => (
            <Route key={route.key} path={route.path} element={route.element} />
            
          ))}
          {
            routesAuth.map(AuthRoute)
          }
          <Route path='*' element={<Navigate to='/'/>}/> */}

{routesAll.map(route => (
            <Route key={route.key} path={route.path} element={route.element} />
          ))}

          {
          loggedIn ? routesAuth.map(route => (
                <Route key={route.key} path={route.path} element= {<AuthRoute element={route.element} />} />
              ))
            : 
            routesNoAuth.map(route => (
                <Route key={route.key} path={route.path} element={route.element} />
              ))
          }

        </Routes>
      </MainLayount>
    </BrowserRouter>
  )
}

export default App