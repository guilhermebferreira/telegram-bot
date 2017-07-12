const TelegramBot = require( `node-telegram-bot-api` )

require('dotenv').config() 

const TOKEN = process.env.TOKEN

const bot = new TelegramBot( TOKEN, { polling: true } )

bot.on('message', function(msg){
  console.log('msg', msg)
})

bot.onText( /(.*)\?/, function(msg, match){
  bot.sendMessage( msg.chat.id, '42' )
})

var logErrorEcho = function logErrorEcho(msg) {
  return function (err) {
    return console.log(msg, err);
  };
};

var logSuccessEcho = function(msg, match){
  return function(data){
    console.log( 'Success:', data);
  };
};

var sendEcho = function(msg, match){
  bot.sendMessage( msg.chat.id, match[ 1 ] )
      .then( logSuccessEcho( msg, match ) )
      .catch( logErrorEcho( 'Error:') );
};

var send42 = function(msg, match){
  bot.sendMessage( msg.chat.id, '42' );
};

bot.onText( /\/echo (.*)/, sendEcho);
