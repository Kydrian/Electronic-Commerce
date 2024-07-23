const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes); // use apiRoutes

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>") // send back a 404 if it can't find the route and send back an message
});

module.exports = router;