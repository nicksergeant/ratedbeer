import { h, Component } from 'preact';

let timer;

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleQueryChange(event) {
    this.setState({ query: event.target.value });
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.props.channel.push('search:query', {
        query: this.state.query
      });
    }, 300);
  }

  handleSubmit(event) {
    if (event) event.preventDefault();
    this.props.channel.push('search:query', {
      query: this.state.query
    });
  };

  render() {
    return (
      <div>
        <input
          onInput={this.handleQueryChange.bind(this)}
          placeholder="Search..."
          type="text"
        />
      </div>
    );
  }
}

export default SearchForm;
