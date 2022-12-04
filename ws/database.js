const mongoose = require('mongoose');
const URI = 'mongodb+srv://will:HtVX5aaruHYwkb1t@clusterdev.apcqaza.mongodb.net/claudia-gomesapp?retryWrites=true&w=majority&authMechanism=SCRAM-SHA-1';

mongoose.connect(URI, {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true,
    //useCreateIndex: true
})
    .then(() => console.log('DB is Up!'))
    .catch((err) => console.log(err));



