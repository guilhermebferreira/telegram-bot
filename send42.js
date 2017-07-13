const TelegramBot = require( `node-telegram-bot-api` )

require('dotenv').config() 

const TOKEN = process.env.TOKEN

const bot = new TelegramBot( TOKEN, { polling: true } )

//return "42" as answer to every question ended with "?"

var send42 = function(msg, match){
  bot.sendMessage( msg.chat.id, '42' );
};


bot.onText( /(.*)\?/, send42);
