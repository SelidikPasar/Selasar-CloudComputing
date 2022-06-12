const { v4 : uuidv4 } = require('uuid');
const fs = require('fs');
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
const jwt = require('jsonwebtoken');



// Handler
const getArticles = (req, res) => {
            console.log('Reading File');
            var archivo = storage.bucket('news_summary').file('article_processed.json').createReadStream();
            var buf = '';
            archivo.on('data', function(d) {
              buf += d;
            }).on('end', function() {
              console.log(buf);
              console.log("End");
              res.setHeader('Content-Type', 'application/json');
              res.send(buf);
              res.json(req.buf);
            });     
          }

module.exports = {getArticles};