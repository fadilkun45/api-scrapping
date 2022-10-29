const axios = require("axios")
const cherrio = require("cheerio")

module.exports = async (req,res) => {

    try{
        // const response = await axios.get('https://www.jadwalsholat.org/')

        // const $ = cherrio.load(response.data)

        // // console.log($.html())

        // const htmlParse = $.html()

        // console.log("test", $.find(".table_header"))

        // // console.log($.html())

        res.json({message: "hayo ngapain disini"})

    }catch(err){

    }
}