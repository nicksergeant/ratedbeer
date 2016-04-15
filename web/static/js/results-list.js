import { h, Component } from 'preact';

class ResultsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };

    props.channel.on('phx_reply', res => {
      if (res.response.results) {
        this.setState({
          results: res.response.results
        });
      }
    });
  }

  render() {
    const results = this.state.results.map((result) => {
      return (
        <li key={result}>
          <a href={result.url}>
            {result.name}<br />
            {result.brewery}<br />
            {result.abv}, {result.ibu}<br />
            Rated {result.rating}<br />
            <img src={result.image} />
          </a>
        </li>
      );
    });
    return (
      <ul>
        {results}
      </ul>
    );
  }
}

export default ResultsList;
