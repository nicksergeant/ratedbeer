import { Socket } from '../../../deps/phoenix/web/static/js/phoenix';

let socket = new Socket('/socket', { token: window.userToken });

socket.connect();

let channel = socket.channel('ratedbeer:search', {});

channel.join()
  .receive('ok', resp => { console.log('Joined successfully', resp) })
  .receive('error', resp => { console.log('Unable to join', resp) });

setTimeout(function() {
  channel.push('search:query', { query: 'hallow' });
}, 2000);

channel.on('phx_reply', res => {
  if (res.response.results) {
    document.body.innerHTML = res.response.results;
  }
})

export default socket;
