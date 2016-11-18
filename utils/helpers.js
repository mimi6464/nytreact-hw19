// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// NYT API
var nytAPI = require('./routes.js');

// Current base URL
var baseURL = window.location.origin;

// Helper Functions (in this case the only one is runQuery)
var helpers = {

  getArticle: function(){

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    return axios.get(queryURL) {
      
      .then(function(response){

        console.log(response);
        return response;
      })
  },

  saveArticle: function(article){

    var queryURL = baseURL + '/api/saved';

    return axios.post(queryURL, {
      'title': article.title,
        'date': article.date,
        'url': article.url
      })
      .then(function(res){
        return res.data;
      })
      .catch(function(err) {
        return false;
      })
  },

  getSaved: function(){

    var queryURL = baseURL + '/api/saved';

    return axios.get(queryURL)
      .then(function(res){
        if (res.status === 'error') return false;
        return res.data;
      })
      .catch(function(err) {
        return false;
      })
  },
  postSaved: function(title, date, url){
 
    var newArticle = {title: title, date: date, url: url};
    return axios.post('/api/saved', newArticle)
      .then(function(results){
        console.log("axios results", results._id);
        return results._id;
      })
 
  },
 

  deleteSaved: function(id){

    var queryURL = baseURL + '/api/saved/' + id;

    return axios.delete(queryURL)
      .then(function(res){
        if (res.status === 'error') return false;
        return res.data;
      })
      .catch(function(err) {
        return false;
      })
  }

}

module.exports = helpers;