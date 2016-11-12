// Include React 
var React = require('react');

// Here we include all of the sub-components
var Query = require('./Children/Query');
var Results = require('./Children/Results');

// Helper Function
var helpers = require('./utils/helpers.js');

// This is the main component. 
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			searchTerm: "",
			results: ""
		}
	},	

	setTerm: function(term){
		this.setState({
			searchTerm: term
		})
	},

	// If the 
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");

			helpers.runQuery(this.state.searchTerm)
				.then(function(data){
					if (data != this.state.results)
					{

						console.log(data);

						this.setState({
							results: data
						})		
					}
// After we've received the result... then post the search term to our history. 
						helpers.postHistory(this.state.searchTerm)
							.then(function(data){
								console.log("Updated!");

								// After we've done the post... then get the updated history
								helpers.getArticle()
									.then(function(response){
										console.log("Current Article", response.data);
										if (response != this.state.article){
											console.log ("article", response.data);

											this.setState({
												article: response.data
											})
										}
									}.bind(this))	
							}.bind(this)
						)
					}
				}.bind(this))
				
			}
	},

	// The moment the page renders get the History
	componentDidMount: function(){

		// Get the latest history.
		helpers.getArticle()
			.then(function(response){
				if (response != this.state.article){
					console.log ("Article", response.data);

					this.setState({
						article: response.data
					})
				}
			}.bind(this))
	},


	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h1 className="text-center">New York Times Article Scrubber</h1>
						<p className="text-center"><em>Search for and annotate articles of interest!</em></p>
					</div>
				
					<div className="panel-body">
              <form>
                <div className="form-group">
                  <h4><strong>Topic</strong></h4>
                  <input type="text" className="form-control" id="search" onChange= {this.props.handleChange} required=""/>
                  <h4 className=""><strong>Start Year</strong></h4>
                  <input type="number" className="form-control" id="start" onChange= {this.props.handleChange} required=""/>
                  <h4 className=""><strong>End Year</strong></h4>
                  <input type="number" className="form-control" id="end" onChange= {this.props.handleChange} required=""/>
                </div>
                <div className="pull-right">
                  <button type="button" className="btn btn-primary" onClick= {this.props.handleClick}>
                    <h4>Search</h4>
                  </button>
                </div>
              </form>
            </div>
            </div>  
          </div>
       
    )
  }
});


// Export the componen back for use in other files
module.exports = Main;