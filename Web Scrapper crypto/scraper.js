const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const app = express();

async function getPrice() {
  try {
    const siteUrl = "https://coinmarketcap.com/";
    const { data } = await axios(siteUrl);
    const $ = cheerio.load(data);
    const elmSelector =
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr";
    const keys = [
      "Rank",
      "Name",
      "Price",
      "24hr Volume",
      "7days Volume",
      "Market Cap",
      "Volume",
      "supply",
    ];
    const coinsArr = [];
    $(elmSelector).each((elementIndex, element) => {
      let index = 0;
      const coinObj = {};
      if (elementIndex <= 9) {
        $(element)
          .children()
          .each((childIndex, child) => {
            let result = $(child).text();
            if (index === 1 || index === 6) {
              result = $(child).find("p:first-child").text();
            }
            if (result) {
              coinObj[keys[index]] = result;
              index++;
            }

            // const childData = $(child).text();
            // if (childData) console.log(childData);
          });
        coinsArr.push(coinObj);
      }
    });
    return coinsArr;
  } catch (err) {
    console.error(err);
  }
}

getPrice();

app.get("/api/price", async (req, res) => {
  try {
    const finalResult = await getPrice();
    res.status(200).json({
      result: finalResult,
    });
  } catch (err) {
    res.status(500).json({
      err: err.toString(),
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`app listening at port http://localhost:${PORT}/api/price`);
});
