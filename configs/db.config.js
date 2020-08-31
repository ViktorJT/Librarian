const mongoose = require('mongoose');

mongoose
  .connect(`mongodb://localhost/${process.env.DATABASE_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false ? forgot which is which, but there could be a deprecation error for this due to something with a MongoDB method
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
