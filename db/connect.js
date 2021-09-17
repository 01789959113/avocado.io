const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'abunaim1_avocadoUser',
  password : '$av#C*&@do',
  database : 'abunaim1_avocado'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting:');
    return;
  }
 
  console.log('connected');
});

module.exports = connection;
