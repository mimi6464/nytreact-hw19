var React = require('react');

var Router = require('react-router').Router;
var Router = Router.Route;

var IndexRoute = Router.IndexRoute;
//Reference the high level componants
var Main = require('../components/Main');
var Search = require('../components/Search');
var Saved = require('../components/Saved');

module.exports =(

<Route path = '/' component={Main}>
{/*if user selects search or saved show the appropriate comp*/}
  <Route path = 'Search' component={Search} />
  <Route path = 'Saved' component={Saved} />
{/*if user selects any other path.. we get the home routers*/}
	<IndexRoute component = {Search} />
</Route>
);