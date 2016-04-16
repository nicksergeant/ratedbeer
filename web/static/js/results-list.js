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
            <div className="bg-blur-bg"></div>
            <div className="bg-blur" style={{backgroundImage: `url(${result.image})`}}></div>
            <div className="card clearfix">
              <div className="thumb">
                <img src={result.image} />
              </div>
              <div className="meta">
                <p className="name">{result.name}</p>
                <p className="style">{result.style}</p>
                <p>{result.brewery}</p>
                <p>
                  <span className="abv">{result.abv}</span>
                  <span className="ibu">{result.ibu}</span>
                  </p>
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
      <ul className="clearfix">
        {results}
      </ul>
    );
  }
}

export default ResultsList;
