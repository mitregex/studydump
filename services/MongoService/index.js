/* Legacy Modules */
const mongo = require('mongodb');


/* Import Utils */
const debugLog = require('../../utils/DebugLogger');


/* Module Pre-Init */
const { MongoClient } = mongo;


/* Functions */
// MongoClient Init
const init = MongoURL => new Promise((resolve, reject) => {
  MongoClient.connect(MongoURL, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      debugLog.error('Failed to connect to the database', err);
      return reject(err);
    }
    debugLog.info('Node.js app is listening to MongoServer');
    return resolve(client.db(process.env.MONGO_DB_NAME));
  });
});


/* Module Exports */
module.exports = {
  init
};
