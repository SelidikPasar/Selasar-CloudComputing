const { v4 : uuidv4 } = require('uuid');
const fs = require('fs');



// let articles = {
//       articles: 
//       [
//         {
//           publishedAt: "2022-06-05T04:54:01Z",
//           author: "Jackie Manno",
//           title: "Joe Biden Claps Back At Elon Musk’s Economy Comments: ‘Lots Of Luck On His Trip To The Moon’",
//           description: "President Joe Biden had some harsh words to say to Elon Musk after he commented about the state of the economy.",
//           url: "https://hollywoodlife.com/2022/06/05/joe-biden-elon-musk-economy-comments-video/",
//           urlToImage: "https://hollywoodlife.com/wp-content/uploads/2022/06/Joe-Biden-Claps-Back-At-Elon-Musks-Economy-Comments-ss-ftr.jpg",
//           content: "View galleryImage Credit: Shutterstock\r\nPresident Joe Biden did not appear to take kindly to Elon Musks recent opinion about the financial state of America. According to Reuters, Musk told his Tesla … [+2252 chars]"
//         },
//         {
//           publishedAt: "2022-06-05T12:14:00Z",
//           author: "Reuters",
//           title: "Musk backtracks on job cuts, says Tesla salaried staff to be 'fairly flat'",
//           description: "Elon Musk said that total headcount will increase over next 12 months, but number of salaried staff should be little changed, backtracking from an email saying that job cuts of 10% were needed",
//           url: "https://www.business-standard.com/article/international/musk-backtracks-on-job-cuts-says-tesla-salaried-staff-to-be-fairly-flat-122060500566_1.html",
//           urlToImage: "https://bsmedia.business-standard.com/_media/bs/img/article/2022-05/21/full/1653103261-2256.jpg",
//           content: "Tesla Inc Chief Executive Elon Musk said on Saturday that the electric vehicle maker's total headcount will increase over the next 12 months, but the number of salaried staff should be little changed… [+2751 chars]"
//         },
//         {
//           publishedAt: "2022-06-05T12:00:49Z",
//           author: "iSeeCars, Nexstar Media Wire",
//           title: "The most and least expensive cities to buy electric cars",
//           description: "Due to regional used car price variations, budget-minded used car shoppers who are willing to travel can increase their chances of finding a discount on electric cars.",
//           url: "https://www.ozarksfirst.com/local-news/national-news/the-most-and-least-expensive-cities-to-buy-electric-cars/",
//           urlToImage: "https://www.ozarksfirst.com/wp-content/uploads/sites/65/2022/06/Tesla-Model-S.jpg?w=1280",
//           content: "(iSeeCars) – Although they have fallen in recent months, used car prices are still significantly higher than they were a year ago as a result of the ongoing microchip shortage. Meanwhile, gas prices … [+5615 chars]"
//         },
//         {
//           publishedAt: "2022-06-05T12:00:42Z",
//           author: "iSeeCars, Nexstar Media Wire",
//           title: "The most and least expensive cities to buy electric cars",
//           description: "Due to regional used car price variations, budget-minded used car shoppers who are willing to travel can increase their chances of finding a discount on electric cars.",
//           url: "https://wgntv.com/news/nexstar-media-wire/the-most-and-least-expensive-cities-to-buy-electric-cars/",
//           urlToImage: "https://wgntv.com/wp-content/uploads/sites/5/2022/06/Tesla-Model-S.jpg?w=1280",
//           content: "(iSeeCars) – Although they have fallen in recent months, used car prices are still significantly higher than they were a year ago as a result of the ongoing microchip shortage. Meanwhile, gas prices … [+5637 chars]"
//         },
//         {
//           publishedAt: "2022-06-05T11:58:00Z",
//           author: null,
//           title: "Musk backtracks on job cuts, says Tesla salaried staff to be 'fairly flat'",
//           description: "Tesla Chief Executive Elon Musk said on Saturday (Jun 4) that the electric vehicle maker's total headcount will increase over the next 12 months, but the number of salaried staff should be little changed, backtracking from an email just two days ago saying th…",
//           url: "https://www.channelnewsasia.com/business/elon-musk-tesla-backtracks-job-cuts-salaried-staff-fairly-flat-twitter-2728381",
//           urlToImage: "https://onecms-res.cloudinary.com/image/upload/s--1tEi0wN1--/c_crop,h_562,w_1000,x_0,y_64/fl_relative,g_south_east,l_one-cms:core:watermark:ap_data-1,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/musk_twitter_stock_sale_12290.jpg?itok=w1HeJRXX",
//           content: "Tesla Chief Executive Elon Musk said on Saturday (Jun 4) that the electric vehicle maker's total headcount will increase over the next 12 months, but the number of salaried staff should be little cha… [+1310 chars]"
//         },
//         {
//           publishedAt: "2022-06-05T11:58:00Z",
//           author: null,
//           title: "Musk backtracks on job cuts, says Tesla salaried staff to be 'fairly flat'",
//           description: "Tesla Chief Executive Elon Musk said on Saturday (Jun 4) that the electric vehicle maker's total headcount will increase over the next 12 months, but the number of salaried staff should be little changed, backtracking from an email just two days ago saying th…",
//           url: "https://www.channelnewsasia.com/business/musk-backtracks-job-cuts-says-tesla-salaried-staff-be-fairly-flat-2728381",
//           urlToImage: "https://onecms-res.cloudinary.com/image/upload/s--Ly1x8hex--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2022-06-05t115842z_3_lynxmpei530bq_rtroptp_3_tesla-jobs.jpg?itok=6cHbpkbj",
//           content: "Tesla Chief Executive Elon Musk said on Saturday (Jun 4) that the electric vehicle maker's total headcount will increase over the next 12 months, but the number of salaried staff should be little cha… [+1311 chars]"
//         },
//         {
//           publishedAt: "2022-06-05T11:52:39Z",
//           author: "feedfeeder",
//           title: "Elon Musk Opens Door To A Tesla Talent Exodus, Despite Golden Handcuffs - NDTV Profit",
//           description: "Elon Musk Opens Door To A Tesla Talent Exodus, Despite Golden HandcuffsNDTV Profit After emailing employees about job cuts at Tesla, Elon Musk says the total headcount at the company will increaseYahoo News Elon Musk Just Announced Some Very Big Changes, and …",
//           url: "https://slashdot.org/firehose.pl?op=view&amp;id=162650182",
//           urlToImage: null,
//           content: "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
//         },
//         {
//           publishedAt: "2022-06-05T11:15:00Z",
//           author: "MENAFN",
//           title: "Viettel Experts Win At World's Leading Cyber-Attack Contest",
//           description: "<p>VIETNAM, June 5 - </p> \n<p>IT experts at Viettel Cyber Security. Photo courtesy of Viettel</p> <p>HÀ NỘI — Two IT experts from Viettel Cyber Secu",
//           url: "https://menafn.com/1104325564/ViettelExperts-WinAt-Worlds-Leading-Cyber-Attack-Contest",
//           urlToImage: "https://menafn.com/includes/img/logo.jpg",
//           content: "(MENAFN- EIN Presswire) \r\nVIETNAM, June 5 - \r\nIT experts at Viettel Cyber Security. Photo courtesy of Viettel\r\nHÀ NI Two IT experts from Viettel Cyber Security, a member of Viettel Group, won the Pwn… [+1974 chars]"
//         },
//         {
//           publishedAt: "2022-06-05T11:12:17Z",
//           author: "Bloomberg",
//           title: "‘No longer sure bets’: Tech giants are dropping bad news daily",
//           description: "The drumbeat continued yesterday, as Tesla Inc. Chief Executive Officer Elon Musk told employees the electric-vehicle maker needs to reduce its salaried workforce by 10% and pause hiring worldwide. Cryptocurrency exchange Coinbase Global Inc. also said it wil…",
//           url: "https://economictimes.indiatimes.com/tech/technology/no-longer-sure-bets-tech-giants-are-dropping-bad-news-daily/articleshow/92019504.cms",
//           urlToImage: "https://img.etimg.com/thumb/msid-92019582,width-1070,height-580,imgsize-68700,overlay-ettech/photo.jpg",
//           content: "From Seattle to Silicon Valley to Austin, a grim new reality is setting in across the tech landscape: a heady, decades-long era of rapid sales gains, boundless jobs growth and ever-soaring stock pric… [+7789 chars]"
//         },
//         {
//           publishedAt: "2022-06-05T11:01:02Z",
//           author: "Tim Hakki",
//           title: "This Week on Crypto Twitter: Elon Musk and Dogecoin Co-Creator Jackson Palmer Exchange Words",
//           description: "Elsewhere, Vitalik Buterin ponders an anti-crypto letter sent to U.S. lawmakers, and New York's governor considers a two-year mining ban.",
//           url: "https://decrypt.co/102060/this-week-on-crypto-twitter-elon-musk-and-dogecoin-co-creator-jackson-palmer-exchange-words",
//           urlToImage: "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2022/04/dogecoin-price-trading-gID_6.jpeg",
//           content: "Illustration by Mitchell Preffer for Decrypt\r\nThe two most striking conversations this week on the world's largest microblogging platform were Elon Musk's beef with Dogecoin co-creator Jackson Palmer… [+6999 chars]"
//         }
//       ]
//     };

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

// const updateUser =  (req,res) => {
//     // const user = users.find((user) => user.id === req.params.id);
//     // Find the user
//   const index = findUser(req.params.id);
//   const body = req.body;

//   if (index !== -1) {
//     if (body.email) {
//       // Get the user
//       const user = users[index];

//       // If the email equals the current one, do nothing
//       if (body.email === user.email) {
//         // Return a response confirming update
//         res.respondUpdated('User account updated.');
//       }
//       else {
//         // Make sure the email is unqiue
//         if (!isEmailUnique(body.email)) {
//           // Duplicate email
//           res.failValidationError('email is taken.');
//           return;
//         }

//         // Update the email
//         user.email = body.email;

//         // Return a response confirming update
//         res.respondUpdated('User account updated.');
//       }
//     }
//     else {
//       // Return a failed response
//       res.failValidationError('Please provide all required data!');
//     }
//   }
//   else {
//     // User not found.
//     res.failNotFound('No user with such username exists!');
//   }
//   // user.username = req.body.username;
//     // user.email = req.body.email;

//     // console.log(`username has been updated to ${req.body.username}.email has been updated to be ${req.body.email}`)
// };
    
    

module.exports = {getArticles, createArticle, getArticle, deleteArticle};