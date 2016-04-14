import { h, Component } from 'preact';

let timer;

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    let qsQuery = window.location.search;
    if (qsQuery) {
      qsQuery = decodeURI(qsQuery.split('=')[1]);
      this.handleQueryChange({
        target: { value: qsQuery }
      });
    }
  }

  handleQueryChange(event) {
    this.setState({ query: event.target.value || '' });
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.props.channel.push('search:query', {
        query: this.state.query
      });
    }, 300);
  }

  render() {
    return (
      <div>
        <input
          onInput={this.handleQueryChange.bind(this)}
          placeholder="Search..."
          type="text"
          value={this.state.query}
        />
      </div>
    );
  }
}

export default SearchForm;
