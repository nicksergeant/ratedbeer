import ResultsList from './results-list';
import SearchForm from './search-form';
import { Socket } from '../../../deps/phoenix/web/static/js/phoenix';
import { h, render } from 'preact';

let socket = new Socket('/socket');

socket.connect();

let channel = socket.channel('ratedbeer:search', {});

channel.join();

render((
  <div>
    <SearchForm channel={channel} />
    <ResultsList channel={channel} />
  </div>
), document.getElementById('app'));
