import {Telegraf} from 'telegraf'
import dotenv from 'dotenv'; dotenv.config()
import {resolve, join} from 'path'
import fs  from 'fs'
import {obj} from './api.js'

const bot = new Telegraf(process.env.TOKEN)

bot.start(async (ctx) => {
    fs.appendFile('users.txt', JSON.stringify(ctx.message.from)+'\n', function (err) {
        if (err) {
            console.log(err)
        }
      })

    let start_text = `
    📊Թոփ կրիպտոների ակտուալ գները՝ \n
/BTC - $<code>${+obj.btc.c.toString()}</code> | <code>${obj.btc.P.slice(0,1) != '-' ? '+' + (+obj.btc.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.btc.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/ETH - $<code>${+obj.eth.c.toString()}</code> | <code>${obj.eth.P.slice(0,1) != '-' ? '+' + (+obj.eth.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.eth.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/BNB - $<code>${+obj.bnb.c.toString()}</code> | <code>${obj.bnb.P.slice(0,1) != '-' ? '+' + (+obj.bnb.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.bnb.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/DOT - $<code>${+obj.dot.c.toString()}</code> | <code>${obj.dot.P.slice(0,1) != '-' ? '+' + (+obj.dot.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.dot.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/ADA - $<code>${+obj.ada.c.toString()}</code> | <code>${obj.ada.P.slice(0,1) != '-' ? '+' + (+obj.ada.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.ada.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/XMR - $<code>${+obj.xmr.c.toString()}</code> | <code>${obj.xmr.P.slice(0,1) != '-' ? '+' + (+obj.xmr.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.xmr.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/XLM - $<code>${+obj.xlm.c.toString()}</code> | <code>${obj.xlm.P.slice(0,1) != '-' ? '+' + (+obj.xlm.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.xlm.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/XRP - $<code>${+obj.xrp.c.toString()}</code> | <code>${obj.xrp.P.slice(0,1) != '-' ? '+' + (+obj.xrp.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.xrp.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/LTC - $<code>${+obj.ltc.c.toString()}</code> | <code>${obj.ltc.P.slice(0,1) != '-' ? '+' + (+obj.ltc.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.ltc.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/BCH - $<code>${+obj.bch.c.toString()}</code> | <code>${obj.bch.P.slice(0,1) != '-' ? '+' + (+obj.bch.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.bch.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/WAXP - $<code>${+obj.waxp.c.toString()}</code> | <code>${obj.waxp.P.slice(0,1) != '-' ? '+' + (+obj.waxp.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.waxp.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/DOGE - $<code>${+obj.doge.c.toString()}</code> | <code>${obj.doge.P.slice(0,1) != '-' ? '+' + (+obj.doge.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.doge.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/SHIB - $<code>${+obj.shib.c.toString()}</code> | <code>${obj.shib.P.slice(0,1) != '-' ? '+' + (+obj.shib.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.shib.P).toFixed(2) + '</code>%' + ' 🔴'}
<code>---------------------------</code>
/DASH - $<code>${+obj.dash.c.toString()}</code> | <code>${obj.dash.P.slice(0,1) != '-' ? '+' + (+obj.dash.P).toFixed(2) + '</code>%' + ' 🟢' : (+obj.dash.P).toFixed(2) + '</code>%' + ' 🔴'}
    
`
    try{
	    await ctx.reply(start_text, {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }

})


bot.help(async (ctx) => {
    try{
		await bot.telegram.copyMessage(ctx.chat.id, -1001627405148, 16);
    }catch(e){
    	console.log(e)
    }
})


bot.command('admin', (ctx) => {
    try{
    	ctx.reply('@mr_an0nim')
    }catch(e){
    	console.log(e)
    }
})



function x(obj, coin){
    return {
        price_change:obj[coin]['p'].slice(0,1) != '-' ? '+' + (+obj[coin]['p']).toString() : +obj[coin]['p'].toString() ,
        price_change_percent:obj[coin]['P'].slice(0,1) != '-' ? '+' + (+obj[coin]['P']).toFixed(2) : (+obj[coin]['P']).toFixed(2),
        last_price:+obj[coin]['c'].toString(),
        high_price:+obj[coin]['h'].toString(),
        low_price:+obj[coin]['l'].toString(),
    }
}

function coins_res(coin){ //data=obj
    let coin_name = {
        "btc" : "Bitcoin",
        "eth" : "Ethereum",
        "bnb" : "Binance Coin",
        "dot" : "Polkadot",
        "ada" : "Cardano",
        "xmr" : "Monero",
        "xlm" : "Stellar",
        "xrp" : "Ripple",
        "ltc" : "Litecoin",
        "bch" : "Bitcoin Cash",
        "waxp" : "WAX",
        "doge" : "Dogecoin",
        "shib" : "Shiba Inu",
	"dash" : "Dash"
    }
    let {price_change, price_change_percent, last_price, high_price, low_price} = x(obj, coin)

    let res_text = `
${coin_name[coin]}(<b>${coin.toUpperCase()}</b>)  /  <b>USDT</b>   24ժ
    
<code>Ներկա գինը - </code><b>${last_price}</b>
<code>----------------------------</code>
<code>Գնի տատանումը - </code><b>${price_change}</b>
<code>----------------------------</code>
<code>Գնի տատանման տոկոսը - </code><b>${price_change_percent}</b>%
<code>----------------------------</code>
<code>Ամենաբարձր գինը - </code><b>${high_price}</b>
<code>----------------------------</code>
<code>Ամենացածր գինը - </code><b>${low_price}</b>
    
    `
    return res_text
}



bot.command('BTC', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('btc'), {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }
})


bot.command('ETH', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('eth'), {parse_mode:'HTML'})

    }catch(e){
    	console.log(e)
    }
})


bot.command('BNB', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('bnb'), {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }
})


bot.command('DOT', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('dot'), {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }
})


bot.command('ADA', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('ada'), {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }
})


bot.command('XMR', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('xmr'), {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }
})


bot.command('XLM', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('xlm'), {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }
})


bot.command('XRP', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('xrp'), {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }
})


bot.command('LTC', (ctx) => {    
	try{
    	ctx.replyWithHTML(coins_res('ltc'), {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }
})



bot.command('BCH', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('bch'), {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }
})



bot.command('WAXP', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('waxp'), {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }
})



bot.command('DOGE', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('doge'), {parse_mode:'HTML'})
    }catch(e){
    	console.log(e)
    }
})



bot.command('SHIB', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('shib'), {parse_mode:'HTML'})

    }catch(e){
    	console.log(e)
    }
})


bot.command('DASH', (ctx) => {
    try{
    	ctx.replyWithHTML(coins_res('dash'), {parse_mode:'HTML'})

    }catch(e){
    	console.log(e)
    }
})


function start(){
    try{
	    // let coins = ['btc', 'eth', 'bnb', 'dot', 'ada', 'xmr', 'xlm', 'xrp', 'ltc', 'bch', 'waxp', 'doge', 'shib']
	    bot.launch() 
	    console.log("[+] bot started")    
    }catch(e){
    	console.log(e)
    } 
}
setTimeout(start, 10000)


process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
