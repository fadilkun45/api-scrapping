const cheerio = require('cheerio')
const axios = require('axios');
const dayjs = require('dayjs');
const url = require('url')

module.exports = async (req,res) => {
    const tgl = []
    const search = req.query.search || ""


    console.log(req.query.search)

       try{
        const response = await  axios.get(`https://www.tokopedia.com/s/jadwal-sholat/${search}`)
        const $ = cheerio.load(response.data)

        const el = $(".unf-card")

        // console.log($(".unf-card").find('.css-us5js3').text())

      

        $('.unf-card').each( (i, element) => {
            
            let jadwal = []


            // console.log($(element).find('.css-us5js3').text().split(',')[0] + $(element).find('.css-us5js3').text().split(',')[1].split('2022')[0])
           for(i = 1 ; i <= 7; i++){

            jadwal.push({
                jam: $(element).find(`.css-1xghdgy:nth-child(${i}) > .css-dche4e `).text(),
                waktu: $(element).find(`.css-1xghdgy:nth-child(${i}) > div:nth-child(1)`).text()
            })

            // console.log($(element).find(`.css-1xghdgy:nth-child(${i}) > .css-dche4e `).text())
            // console.log($(element).find(`.css-1xghdgy:nth-child(${i}) > div:nth-child(1)`).text())
           }


            tgl.push({
                hari: $(element).find('.css-us5js3').text().split(',')[0] + $(element).find('.css-us5js3').text().split(',')[1].split('2022')[0],
                jadwal: jadwal
            })
        })


        // console.log(tgl)

        res.status(200).json(tgl)


       }catch(err){


       }

       
};

