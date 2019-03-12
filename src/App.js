import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './App.css';
//import RegistrationForm from './Components/RegistrationForm';
//import LoginForm from './Components/LoginForm';
//import AddBlogForm from './Components/AddBlogForm'

// function App(){
//   return(
//     <div>
//     {/* <RegistrationForm/>
//       <LoginForm></LoginForm> */}
//       <AddBlogForm></AddBlogForm>
//     </div>
   
//   )
// }

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;
