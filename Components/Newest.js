// Include React 
var React = require('react');

// This is the history component. It will be used to show a log of  recent searches.
var Articles = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Articles</h3>
				</div>
				<div className="panel-body text-center">

					{/* Here we use a map function to loop through an array in JSX*/}
					{this.props.articles.news(function(search, i)
						{
							return <p key={i}>{search.api} - {search.date}</p> 
						}
					)}
				</div>
			</div>

		)
	}
});
