const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());

const routes = require('./api/routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
