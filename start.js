const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

require('./app/models/Store');
require('./app/models/User');
require('./app/handlers/winston');
const app = require('./app');

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE_DEV);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`Error: ${err.message}`);
});



app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

module.exports =app;
