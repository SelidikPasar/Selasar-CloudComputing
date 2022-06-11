const { v4 : uuidv4 } = require('uuid');
const fs = require('fs');
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();



// Handler
const getArticles = (req, res) => {
    const jsonString = fs.readFileSync("./news.json");
    const article = JSON.parse(jsonString);
    res.send(article);
    
    // fs.readFile("./news.json", "utf8", (err, jsonString) => {
    //   if (err) {
    //     console.log("File read failed:", err);
    //     return;
    //   }
    //   console.log("File data:", jsonString);
    // });
}

const createArticle = (req, res) => {   
    const body = req.body;    
        // Insert the user
        const article = {
          publishedAt: body.publishedAt,
          author: body.author, 
          title: body.title,
          description: body.description,
          url: body.url,
          urlToImage: body.urlToImage,
          content: body.content
        };

        fs.readFile('news.json', function (err, data) {
          var json = JSON.parse(data)     
        fs.writeFile("news.json", JSON.stringify(json))
        });
        // Add to the database
        // news.push(user);   
        // articles.push({...article, id: uuidv4()});
    
        // Return a response confirming creation
        res.respondCreated('Berita berhasil diposting');
      }

const getArticle = (req, res) => {
    res.send(req.params.id)
};

const deleteArticle = (req, res) => { 
    console.log(`News with id ${req.params.id} has been deleted`);
    
    articles = articles.filter((article) => article.id !== req.params.id);
};
    

'use strict';


const readFile = (req, res) => {
        const bucketName = 'hargapangan_downloaded_data'
        console.log('Listing objects in a Bucket');
        const [files] = storage.bucket(bucketName).getFiles();
        files.forEach(file => {
            console.log('Reading: '+file.name);
            var archivo = file.createReadStream();
            console.log('Concat Data');
            var  buf = '';
            archivo.on('data', function(d) {
                buf += d;
            }).on('end', function() {
                console.log(buf);
                console.log("End");
            });    
        });
};

module.exports = {getArticles, createArticle, getArticle, deleteArticle};