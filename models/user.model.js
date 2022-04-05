/* User {
username: a unique string that is going to be used in the API URLs to specify the
user in Rest API
phone: it is a mandatory string that should follow this format: “123-456-7890”
*/

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,  
    username: { 
        type: String, 
        required: 'Please enter username', 
        unique: true
    },
    phone: {
         type: String, 
         /*add phone format*/
         required: 'Please enter phone number',
    }
});

mongoose.model('userModel', userSchema);
