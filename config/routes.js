var React = require('react');

var Router = require('react-router').Router;
var Router = Router.Route;

var IndexRoute = Router.IndexRoute;
//Reference the high level componants
var Main = require('../Components/Main');
var Search = require('../Components/Search');
var Saved = require('../Components/Saved');

module.exports =(

<Route path = '/' component={Main}>
{/*if user selects search or saved show the appropriate comp*/}
  <Route path = 'Search' component={Search} />
  <Route path = 'Saved' component={Saved} />
{/*if user selects any other path.. we get the home routers*/}
	<IndexRoute component = {Search} />
</Route>
);