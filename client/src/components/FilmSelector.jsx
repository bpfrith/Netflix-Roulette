var React = require('react');

var FilmSelector = React.createClass({
  getInitialState: function(){
    return {selectedIndex: undefined}
  },

  render: function(){
    var movieOptions = this.props.movies.map(function(movie, index){
      return <option value={index} key={index}>
        {movie.show_title}
      </option>
    });
    return (
    <div className="film-selector">
      <select id="movies" value={this.state.selectedIndex} onChange={this.movieSelection}>
        <option disabled>Select a movie</option>
        {movieOptions}
      </select>
    </div>)},

    movieSelection: function(event){
      var newIndex = event.target.value;
      this.setState({selectedIndex: newIndex});
      var selectedMovie = this.props.movies[newIndex];
      this.props.didSelectAMovie(selectedMovie);
    },
});

module.exports = FilmSelector;