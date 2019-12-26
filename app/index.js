import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router, 
  Route, 
  Link, 
  IndexRoute, 
  browserHistory }
from 'react-router';

const {Router, Route, IndexRoute, Link} = ReactRouter;

const style = {
  color: '#fff',
  backgroundColor: 'red'
};

const Header = React.createClass({
  render: function() {
    return (
       <div id="header">
         <h3>App Header</h3>
         <Link to="/">Page 1</Link>
         <Link to="/two">Page 2</Link>
         <Link to="/three">Page 3nnnkknk</Link>
       </div>
    );
  }
});

const one = React.createClass({
  render: function() {
    return (
      <h1>Page 1</h1>
    );
  }
});

const two = React.createClass({
  render: function() {
    return (
      <h1>Page 2</h1>
    );
  }
});

const three = React.createClass({
  render: function() {
    return (
      <h1>Page 3</h1>
    );
  }
});

const Footer = React.createClass({
  render: function() {
    return (
       <div id="footer">
         <h3>App Footer</h3>
       </div>
    );
  }
});

const app = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
   ); 
  }
});

ReactDOM.render((
  <Router>
    <Route path="/" component={app}>
      <IndexRoute component={one} />
      <Route path="/two" component={two} />
      <Route path="/three" component={three} />
    </Route>
  </Router>
), document.getElementById('app'));