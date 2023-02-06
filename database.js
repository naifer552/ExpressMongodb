const mongoose = require('mongoose');

const NOTES_APP_MONGODB_HOST= process.env.NOTES_APP_MONGODB_HOST;
const NOTES_APP_MONGODB_DATABASE= process.env.NOTES_APP_MONGODB_DATABASE;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`
/**
 * Se debe indicar de manera explicita que
 * 'strictQuery' esta activada o true
 */
mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI,{

})

    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));