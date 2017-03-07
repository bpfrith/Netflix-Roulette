var React = require('react');

var FilmDetail = React.createClass({
  getInitialState: function(){
    return {details: undefined}
  },

  // componentDidMount: function(){
  //   var movie = JSON.stringify(this.state.movie)
  //   var url = "http://netflixroulette.net/api/api.php?title=" + this.props.movie;
  //   var request = new XMLHttpRequest();
  //   request.open('GET', url);

  //   request.onload = function(){
  //     if(request.status !== 200) return;
  //     var data = JSON.parse(request.responseText);
  //     this.setState({details: data});
  //   }

  //   request.send();
  // },

  render: function(){
    if (this.props.movie === null){
      return <p>Please select a movie</p>
    }
    return (
      <div className="film-detail">
        <p>Rating: {this.props.movie.rating} </p>
        <p className="year">Year Released: {this.props.movie.release_year}</p>
        <p>Cast: {this.props.movie.show_cast}</p>
        <p>Summary: {this.props.movie.summary}</p>
      </div>
    )
  }
});

module.exports = FilmDetail;

