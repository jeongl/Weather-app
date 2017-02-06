const express = require('express')
const next = require('next')
const request = require('request');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const apiKey = 'aa31e194dd2e04e872b4ff58837f61bf';

app.prepare()
.then(() => {
  const server = express()

  server.use(express.static('assets'));

  server.get('/fetchForecast/:lat/:lng', function (req, res){
    console.log('req.params:', req.params);
    request.get(`https://api.darksky.net/forecast/${apiKey}/${req.params.lat},${req.params.lng}`, 
      (err, resp, body) => {
        res.send(body);
      });
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3010, (err) => {
    if (err) throw err
    console.log(`> Ready on 3010`)
  })
})