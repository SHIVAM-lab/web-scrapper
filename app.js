const cheerio = require('cheerio');
const got = require('got');
const puppeteer = require('puppeteer');
//const playwright = require('playwright');
//const jsdom = require("jsdom");//
// const axios = require('axios');
// const rp = require('request-promise');
// const url = 'https://money.cnn.com/data/hotstocks/index.html';

// rp(url)
//   .then(function(html){
//     //success!
//     //console.log($('big > a', html).length);
//     //console.log($('big > a', html));//
//     const wikiUrls = [];
//     for (let i = 0; i < $('big > a', html).length; i++) {
//       wikiUrls.push($('big > a', html)[i].attribs.href);
//     }
//     console.log(wikiUrls);
//   })
//   .catch(function(err){
//     if(err)
//     console.log(err);
//   });
// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://w
// axios(url)
//   .then(response => {
//     const html = response.data;
//     const $ = cheerio.load(html);
//     const div = $('.wsod_hotstocks > div');
    
//     console.log(statsTable.length);
//   })
//   .catch(console.error);

async function scrapeProduct(url){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  
// const [el1] = await page.$x('/html/body/div[2]/div[1]/div[1]/table[1]/tbody/tr[2]/td[3]');
 
// const txt = await el1.getProperty('textContent');
// const sample = await txt.jsonValue();

// console.log({sample});
 
// const [el2] = await page.$x('');
 
// const txt_2 = await el2.getProperty('textContent');
// const sample_1 = await txt_2.jsonValue();

// console.log({sample_1});

  const [el2] = await page.$x('/html/body/div[2]/div[1]/div[1]');
  const txt_2 = await el2.getProperty('textContent');
  const sq = await txt_2.jsonValue();

console.log({sq});


browser.close();

}
scrapeProduct('https://money.cnn.com/data/hotstocks/index.html');

