// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the Main Component
var Main = require('../Components/Main')
var Search = require('../Components/Search'); 
var Saved = require('../Components/Saved');
// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(

	<Main />,
	document.getElementById('app')
)


