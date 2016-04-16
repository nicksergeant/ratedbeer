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
        <li key={result.url}>
          <a href={result.url}>
            <div className="bg-blur" style={{backgroundImage: `url(${result.image})`}}></div>
            <div className="card">
              <div className="thumb">
                <img src={result.image} />
              </div>
              <div className="meta">
                {result.name}<br />
                {result.brewery}<br />
                {result.abv}, {result.ibu}<br />
              </div>
            </div>
            <div className="rating">
              {result.rating}
            </div>
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
