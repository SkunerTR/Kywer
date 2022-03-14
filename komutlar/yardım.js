           
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Wasten Sunucu Menüsü')

  .addField("• | w!anti-raid",`__Anti raid Açar__`)
  
  .addField("• | w!bot-izni",`__Botların anti raid İznini ayarlar__`)
  
  .addField("• | w!ban",`__İstediğiniz kişiyi sunucudan yasaklar.__`)

  .addField("• | w!banlog-ayarla",`__Sohbete yazma sınır (süre) ekler.__`)

  .addField("• | w!banyetkilisi-ayarla",`__Sohbete yazma sınır (süre) ekler.__`)
  
  .addField("• | w!bansistem-kapat",`__Sohbete yazma sınır (süre) ekler.__`)

  .addField("• | w!capsengel",`__Capslock kullanımını engeller.__`)

  .addField("• | w!emoji-koruma",`__Emojileri korur.__`)

  .addField("• | w!ever-engel",`__Everyone ve here yi engeller.__`)

  .addField("• | w!kanal-koruma",`__Kanal silinirse Geri Çeker.__`)

  .addField("• | w!kick",`__İstediğiniz kişiyi sunucudan atar.__`)
 
  .addField("• | w!küfür-engel",`__Küfürleri engeller__`)

  .addField("• | w!mod-log",`__Mod-Log kanalını belirler.__`)

  .addField("• | w!reklam-engel",`__reklamı engeller.__`)

  .addField("• | w!rol-koruma",`__Rolleri Korur.__`)

  .addField("• | w!sohbet-aç",`__Sohbetinizi açmaya yarar.__`)

  .addField("• | w!sohbet-kapat",`__Sohbetinizi kapatmaya yarar.__`)

  .addField("• | w!sil-üye",`__Belirtilen kişinin belirtilen miktarda mesajını siler.__`)

  .addField("• | w!temizle",`__Belirlenen miktarda mesajı siler.__`)

  .addField("• | w!yavaş-mod",`__Sohbete yazma sınır (süre) ekler.__`)
     
  .addField("• | w!rol-ver",`__w!rol-ver ``Roladı`` **@Kişietiket**.__`)

  .addField("• | w!rol-al",`__w!rol-al ``Roladı`` **@Kişietiket**__`)
 .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}