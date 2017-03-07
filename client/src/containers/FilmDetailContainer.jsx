var React = require('react');
var FilmDetail = require('../components/FilmDetail.jsx');

var FilmDetailContainer = React.createClass({
  componentDidMount: function(){
    var url = "http://netflixroulette.net/api/api.php?title=" + {this.state.focusMovie};
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function(){
      if(request.status !== 200) return;
      var data = JSON.parse(request.responseText);
    }
  }

  render: 
  return(
    <div className="film-detail-container">
      <FilmDetail />
    </div>
    )
});

module.exports = FilmDetailContainer;