const moment = require('moment');


function formatMessage(username, text) {
return {
  username,
  text, 
  time: moment().utc().local().format('lll')
}
}

module.exports = formatMessage;

