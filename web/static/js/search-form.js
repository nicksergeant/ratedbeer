import { h, Component } from 'preact';

let timer;

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      resultsCount: 0,
      searchCount: 0
    };

    let qsQuery = window.location.search;
    if (qsQuery) {
      qsQuery = decodeURI(qsQuery.split('=')[1]);
      this.handleQueryChange({
        target: { value: qsQuery }
      });
    }

    props.channel.on('phx_reply', res => {
      if (res.response.results) {
        this.setState({
          resultsCount: this.state.resultsCount + 1
        });
      }
    });
  }

  handleQueryChange(event) {
    this.setState({ query: event.target.value || '' });
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.props.channel.push('search:query', {
        query: this.state.query
      });
      this.setState({
        searchCount: this.state.searchCount + 1
      });
    }, 300);
  }

  render() {
    let loading;
    if (this.state.searchCount !== this.state.resultsCount) {
      loading = (
        <div className="loading">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      );
    }
    return (
      <header>
        <a href="/"><img src="/images/logo.png" /></a>
        <div className="search-container">
          <input
            onInput={this.handleQueryChange.bind(this)}
            placeholder="Search..."
            type="text"
            value={this.state.query}
          />
          {loading}
        </div>
      </header>
    );
  }
}

export default SearchForm;
