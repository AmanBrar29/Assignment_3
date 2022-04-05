// Mongo connection is set up ./models/DBconfig , I also copied url below
//var mongodb_url = 'mongodb+srv://<<User>>:<<password>>@cluster0.cbqxt.mongodb.net/A2?retryWrites=true&w=majority';

const http = require('http');
const app = require('./app');
const port = process.env.PORT  || 8889;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('SERVER is listening on PORT 8889');
});
