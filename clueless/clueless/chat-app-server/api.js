// api.js
const express = require('express');
const router = express.Router();
const pusher = new Pusher({
  appId: '963722',
  key: '8fb6e8dc4e3a6884c1a4',
  secret: 'fce5d56f30ba8dd1e7ea',
});

router.get('/', (req, res) => {
  res.send('all good');
});

router.post('/pusher/auth', (req, res) => {
  console.log('POST to /pusher/auth');
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

module.exports = router;