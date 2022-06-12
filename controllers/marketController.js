const fs = require('fs');
const jwt = require('jsonwebtoken');



// Handler
const getMarket = (req, res) => {
    // if(
    //     !req.headers.authorization ||
    //     !req.headers.authorization.startsWith('Bearer') ||
    //     !req.headers.authorization.split(' ')[1]
    // ){
    //     return res.status(422).json({
    //         message: "Please provide the token",
    //     });
    // }
    const jsonString = fs.readFileSync("./market.json");
    const market = JSON.parse(jsonString);
    res.send(market);     
}
  

module.exports = {getMarket};