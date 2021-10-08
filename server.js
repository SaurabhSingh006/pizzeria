// IMPORTING PACKAGES AND FILES
const app = require('./app');
const mongoose = require('mongoose');

// DATABASE CONNECTION WITH MONGOOSE DRIVER
mongoose.connect('mongodb+srv://root:root@vnnogile.dns2g.mongodb.net/pizzaDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}).then((con) => {
    console.log('Database Connection Successfull');
}).catch((err) => {
    console.log('Database connection fails', err.message);
});

// STARTING THE SERVER AT PORT 3000
app.listen(3000, () => {
    console.log('APP IS RUNNING ON PORT 3000');
});