import MainLayount from './layount/MainLayount'
import Cards from './pages/Cards'
import Accounts from './pages/Accounts'
import Loans from './pages/Loans'
import ApllyLoan from './pages/ApplyLoan'
import Transactions from './pages/Transactions'
import ApplyCard from './pages/ApplyCard'
import Account from './pages/Account'
import CreateAccount from './pages/CreateAccount'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <BrowserRouter> 
    <MainLayount>
    <Routes>
      {/*DEFINO LAS LISTAS DE RUTAS */}
      <Route path="/" element={<Accounts/>}/>
      <Route path="/cards" element={<Cards/>}/>
      <Route path="/loans" element={<Loans/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/apply-loan" element={<ApllyLoan/>}/>
      <Route path="/create-account" element={<CreateAccount/>}/>
      <Route path="/apply-card" element={<ApplyCard/>}/>
      <Route path='/transactions' element={<Transactions/>}/>
    </Routes>

    </MainLayount>
    </BrowserRouter>
 
  
  )
}

export default App