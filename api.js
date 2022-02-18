import {WebSocket} from 'ws'

var obj = {}

let btc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
btc.onmessage = (data_btc) => {
    data_btc = JSON.parse(data_btc.data)
    obj["btc"] = data_btc
}

let eth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
eth.onmessage = (data_eth) => {
    data_eth = JSON.parse(data_eth.data)
    obj["eth"] = data_eth
}

let bnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@ticker');
bnb.onmessage = (data_bnb) => {
    data_bnb = JSON.parse(data_bnb.data)
    obj["bnb"] = data_bnb
}

let dot = new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@ticker');
dot.onmessage = (data_dot) => {
    data_dot = JSON.parse(data_dot.data)
    obj["dot"] = data_dot
}

let ada = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@ticker');
ada.onmessage = (data_ada) => {
    data_ada = JSON.parse(data_ada.data)
    obj["ada"] = data_ada
}

let xrp = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@ticker');
xrp.onmessage = (data_xrp) => {
    data_xrp = JSON.parse(data_xrp.data)
    obj["xrp"] = data_xrp
}

let ltc = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@ticker');
ltc.onmessage = (data_ltc) => {
    data_ltc = JSON.parse(data_ltc.data)
    obj["ltc"] = data_ltc
}

let waxp = new WebSocket('wss://stream.binance.com:9443/ws/waxpusdt@ticker');
waxp.onmessage = (data_waxp) => {
    data_waxp = JSON.parse(data_waxp.data)
    obj["waxp"] = data_waxp
}

let bch = new WebSocket('wss://stream.binance.com:9443/ws/bchusdt@ticker');
bch.onmessage = (data_bch) => {
    data_bch = JSON.parse(data_bch.data)
    obj["bch"] = data_bch
}

let xlm = new WebSocket('wss://stream.binance.com:9443/ws/xlmusdt@ticker');
xlm.onmessage = (data_xlm) => {
    data_xlm = JSON.parse(data_xlm.data)
    obj["xlm"] = data_xlm
}

let xmr = new WebSocket('wss://stream.binance.com:9443/ws/xmrusdt@ticker');
xmr.onmessage = (data_xmr) => {
    data_xmr = JSON.parse(data_xmr.data)
    obj["xmr"] = data_xmr
}

let doge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@ticker');
doge.onmessage = (data_doge) => {
    data_doge = JSON.parse(data_doge.data)
    obj["doge"] = data_doge
}

let shib = new WebSocket('wss://stream.binance.com:9443/ws/shibusdt@ticker');
shib.onmessage = (data_shib) => {
    data_shib = JSON.parse(data_shib.data)
    obj["shib"] = data_shib
}

let dash = new WebSocket('wss://stream.binance.com:9443/ws/dashusdt@ticker');
dash.onmessage = (data_dash) => {
    data_shib = JSON.parse(data_dash.data)
    obj["dash"] = data_dash
}

export {obj}
