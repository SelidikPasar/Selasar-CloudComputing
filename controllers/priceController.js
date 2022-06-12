const { v4 : uuidv4 } = require('uuid');
const fs = require('fs');
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();



// Handler
const getPrice = (req, res) => {
    console.log('Reading File');
            var archivo = storage.bucket('hargapangan_downloaded_data').file('harga_pangan.json').createReadStream();
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

module.exports = getPrice;