var React = require('react');
var FilmSelector = require('../components/FilmSelector');
var FilmDetail = require('../components/FilmDetail');

var FilmContainer = React.createClass({

  componentDidMount: function(){
    var url = "http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage";
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function(){
      if(request.status !== 200) return;
      var data = JSON.parse(request.responseText);
      this.setState({ movies: data, focusMovie: data[0] });
    }.bind(this)
    request.send()
  },

  getInitialState: function(){
    return { movies: [], focusMovie: null }
  },

  render: function(){
    return (
      <div className="film-container">
        <h2>nicolas cage movies</h2>
        <FilmSelector movies={this.state.movies} didSelectAMovie={this.didSelectAMovie} />
        <FilmDetail movie={this.state.focusMovie}/>
      </div>)
  },

  didSelectAMovie: function(movie){
    this.setState({focusMovie: movie});
  }
});

module.exports = FilmContainer;