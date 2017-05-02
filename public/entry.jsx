import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import Home from './jsx/home.jsx';
import ResearchDirections from './jsx/researchDirections.jsx';
import TeamMembers from './jsx/teamMembers.jsx';
import ResearchProjects from './jsx/researchProjects.jsx';
import ProductPrototype from './jsx/productPrototype.jsx';
import PostgraduateTraining from './jsx/postgraduateTraining.jsx';
import Login from './jsx/login.jsx';
import Notice from './jsx/notice.jsx';
import Admin from './jsx/admin.jsx';
import ResearchDirectionsEditor from './jsx/researchDirections-editor.jsx';
import App from './jsx/app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
require('jquery');
require("bootstrap-webpack");

const route = <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRedirect to='/home'/>
    <Route path='/admin' component={Admin}/>
    <Route path='/researchDirections-editor' component={ResearchDirectionsEditor}/>
    <Route path='/home' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/researchDirections' component={ResearchDirections}/>
    <Route path='/teamMembers' component={TeamMembers}/>
    <Route path='/researchProjects' component={ResearchProjects}/>
    <Route path='/productPrototype' component={ProductPrototype}/>
    <Route path='/postgraduateTraining' component={PostgraduateTraining}/>
    <Route path='/notice' component={Notice}/>
  </Route>
</Router>;

ReactDOM.render(
  route,
  document.getElementById("content")
);

if (module.hot) {
  module.hot.accept();
}
