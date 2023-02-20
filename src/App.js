import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// import SignUp from './components/ClientSignup';
import AdvisorLogin from './components/AdvisorLogin';
import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import SignUp from './components/ClientSignup';
import ClientLogin from './components/ClientLogin';
import ClientForgotPassword from './components/ClientForgotPassword';
import AdvisorForgotPassword from './components/AdvisorForgotPassword';
import"./components/Background.css";
import Dashboard from './components/Dashboard';


function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login/advisor' element={<AdvisorLogin />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
      <Route path='/login/client' element={<ClientLogin/>}/>
      <Route path='/login/client/forgotpassword' element={<ClientForgotPassword/>}/>
      <Route path='/login/advisor/forgotpassword' element={<AdvisorForgotPassword/>}/>
      <Route path='/login/advisor/dashboard' element={<Dashboard/>}/>


    </Routes>
  </>
  );
}

export default App;
