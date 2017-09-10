require('eventsource-polyfill');
// eslint-disable-next-line import/no-unresolved
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe(function(event) {
  if (event.action === 'reload') {
    window.location.reload();
  }
});
