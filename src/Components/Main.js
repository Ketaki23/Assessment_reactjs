import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import AddBlogForm from './AddBlogForm';
import Home from './Home';
const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/LoginForm' component={LoginForm}/>
        <Route path='/RegistrationForm' component={RegistrationForm}/>
        <Route path='/AddBlogForm' component={AddBlogForm}/>
      </Switch>
    </main>
  )
  
  export default Main