// Include React 
var React = require('react');
var Router = require('react-router');
// Include React Components
var Query = require('./Search/Query');
var Results = require('./Search/Results');
//var SaveItem = require('./Search/Results/SaveItem');

// Helper Function
var helpers = require('../utils/helpers');

var Search = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function(){
    return {
      search: "",
      start: "",
      end: "",
      same: false,
      results: {}
      // modalIsOpen: false,
      // type: "",
      // message: ""
    }
  },

  // This function will respond to the user input 
  handleChange: function(event){

    // Here we create syntax to capture any change in text to the query terms.
    var newState = {};
    newState[event.target.id] = event.target.value;
    // Allows the submit button to send a request again because state has changed
    newState['same'] = false;
    this.setState(newState);

  },

  // This function will respond to the user click
  handleClick: function(event){

    if (this.state.same === false) {
      // Stop submit button from sending a request again until state has changed
      this.setState({same: true});

      // Make object of search parameters
      var terms = {
        search: this.state.search.trim(),
        start: this.state.start,
        end: this.state.end
      }

      // Check terms to catch user errors
      if (terms.search === "" || terms.start === "" || terms.end === "") {
        // Show message if search terms are empty
        this.message('Error','fill in all inputs.');
        return
      } else if (terms.start < 1900 || terms.start > 2016 || terms.end < 1951 || terms.end > 2016) {
        // Show message if out of range
        this.message('Error','specify start and end date between 1900 and 2016.');
        return
      }

      // Search for articles
      helpers.getArticles(terms)
        .then(function(data){
          if (data === false) {
            // Show message if no results found
            this.message('Error','No results found');
          } else {
            // Save data to state
            this.setState({
              results: data
            });
          }
        }.bind(this))   
    }
  },



// Export the component back for use in other files
module.exports = Search;
