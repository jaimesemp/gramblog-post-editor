'use strict';

const express = require('express');
const axios = require('axios');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

//External services
const post_edit_repo_url = process.env.POST_EDIT_REPO_URL;
//export POST_EDIT_REPO_URL=http://localhost:8081

// App
const app = express();
app.get('/', (req, res) => {
  console.log(process.env.foo);
  res.send('Hello world - FROM POST-EDITOR\n');
});
app.get('/call_repo', (req, res) => {
  axios.get(post_edit_repo_url).then((response)=> {
    console.log(response.data);
    res.send(response.data);
  })
  .catch(error => {
    console.log(error);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
