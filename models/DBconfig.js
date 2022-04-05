var mongodb_url = 'mongodb+srv://amankaur:m%40k1tH3pen@cluster0.cbqxt.mongodb.net/A2?retryWrites=true&w=majority';

const mongoose = require('mongoose');
 
mongoose.connect(mongodb_url, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connection created.')
    }
    else {
        console.log('Connection failed: : ' + err)
    }
});
 
// model
require('./user.model');	
require('./book.model');	