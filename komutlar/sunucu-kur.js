const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Oyun & Sohbet Tema')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun kurulmasını onaylıyor musun?** 😇

**Dipnot:** Bazı kanllar silinmemiş gibi görünebilir. Discord dan çıkıp girin düzelir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());

message.guild.roles.create({ data: { name: 'Kurucu' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
message.guild.roles.create({ data: { name: '$ViskiciZZers' }, reason: 'ayn' }).then(role => {
role.setPermissions(['DEAFEN_MEMBERS']);
role.setColor('#3b0b0b');
});
message.guild.roles.create({ data: { name: 'WastenGamer' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'Üst Admin  ' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '---TAM YETKİ---' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('BLACK');
});
message.guild.roles.create({ data: { name: 'Admin' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'Moderatör' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'The Wasten' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'Wasten Of Manages' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '---ORTA YETKİ---' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('BLACK');
});
message.guild.roles.create({ data: { name: 'Wasten Of Stajer' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'Wasten Usta' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'Wasten Vip' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'Wasten Cırak' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '---ALT YETKİ---' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#BLACK');
});
message.guild.roles.create({ data: { name: 'Wasten Of  Friends' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'Wasten E-Spor Player' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'Wasten Ekip' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'Yayıncı/Youtuber' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'Wasten-İnvites' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: 'Wasten Booster' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '🎨Ressam' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});message.guild.roles.create({ data: { name: 'Özel üye' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});message.guild.roles.create({ data: { name: 'Wasten Booster' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});message.guild.roles.create({ data: { name: 'Wasten Booster' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '♀・KIZ' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '♂・ERKEK' }, reason: 'ayn' }).then(s => s.setColor('#2e9afe'))
message.guild.roles.create({ data: { name: 'Kayıtsız' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: 'Wasten Family' }, reason: 'ayn' }).then(s => s.setColor('#00d119'))
message.guild.roles.create({ data: { name: 'Güvenli Değil(Jail)' }, reason: 'ayn' }).then(s => s.setColor('#00d119'))
message.guild.roles.create({ data: { name: 'Bot' }, reason: 'ayn' }).then(s => s.setColor('#00d119'))
message.guild.roles.create({ data: { name: '______________' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: 'Kayıt Sorumlusu' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: 'Ban Sorumlusu' }, reason: 'ayn' }).then(s => s.setColor('#ffff00'))
message.guild.roles.create({ data: { name: '_______________' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Fake Role' }, reason: 'ayn' }).then(s => s.setColor('#2e9afe'))
message.guild.roles.create({ data: { name: 'Muted' }, reason: 'ayn' }).then(s => s.setColor('#8000ff'))
message.guild.roles.create({ data: { name: '_______________' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Koç' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Boğa' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'İkizler' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Yengeç' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Aslan' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Başak' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Terazi' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Akrep' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Yay' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Kova' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Balık' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: 'Oğlak' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: '______' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: '🎮 | CSGO' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: '🎮 | Zula' }, reason: 'ayn' }).then(s => s.setColor('#29cb79'))
message.guild.roles.create({ data: { name: '🎮 | Apex Legends' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '🎮 | Pubg Mobile' }, reason: 'ayn' }).then(s => s.setColor('#2efec8'))
message.guild.roles.create({ data: { name: '🎮 | League of Legends' }, reason: 'ayn' }).then(s => s.setColor('#3299d8'))
message.guild.roles.create({ data: { name: '🎮 | Mobile Legends' }, reason: 'ayn' }).then(s => s.setColor('#ffbf00'))
message.guild.roles.create({ data: { name: '🎮 | PUBG' }, reason: 'ayn' }).then(s => s.setColor('#81f79f'))
message.guild.roles.create({ data: { name: '🎮 | Fortnite' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '_______________' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: '💞 | Sevgilim var' }, reason: 'ayn' }).then(s => s.setColor('#ff0080'))
message.guild.roles.create({ data: { name: '💔 | Sevgilim yok' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))

message.guild.channels.create('●▬▬๑「Kayıt Alanı」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('📋┇ᴋᴀʏɪᴛ', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎤 | Teyit ¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🎤 | Teyit ²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🎤 | Teyit ³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
});

message.guild.channels.create('𝐖𝐚𝐬𝐭𝐞𝐧𝐆𝐚𝐦𝐞𝐫', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(0));
message.guild.channels.create('WASTENGAMER Log Kanallar', {type: 'category'}).then(parent => {
message.guild.channels.create('wastengamer-log', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('wasten-kayıt-log', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('wasten-guard-log', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('wasten-ban-log', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('wasten-tag-rol-log', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('𝐖𝐀𝐒𝐓𝐄𝐍 𝐘𝐄𝐓𝐊𝐈̇𝐋𝐈̇ 𝐄𝐊𝐈̇𝐏', {type: 'category'}).then(parent => {
message.guild.channels.create('💬┇ʏᴇᴛᴋɪʟɪ-ꜱᴏʜʙᴇᴛ', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📢┇ʏᴇᴛᴋɪʟɪ-ᴅᴜʏᴜʀᴜ', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🌀┇ʏᴇᴛᴋɪʟɪ ᴛᴏᴘʟᴀɴᴛɪ', {type: 'voice'}).then(c => c.setParent(parent.id));
message.guild.channels.create('👑┇ʏᴇᴛᴋɪʟɪ ꜱᴇꜱʟɪ', {type: 'voice'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('ʙɪʟɢɪ', {type: 'category'}).then(parent => {
message.guild.channels.create('📑│𝐊𝐮𝐫𝐚𝐥𝐥𝐚𝐫', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📢│𝐃𝐮𝐲𝐮𝐫𝐮𝐥𝐚𝐫', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎥│𝐘𝐚𝐲𝐢𝐧-𝐃𝐮𝐲𝐮𝐫𝐮', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎥│𝐕𝐢𝐬𝐤𝐢𝐜𝐢-𝐃𝐮𝐲𝐮𝐫𝐮', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📜│𝐑𝐨𝐥-𝐁𝐢𝐥𝐠𝐢', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎉│𝐂𝐞𝐤𝐢𝐥𝐢𝐬', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('uyarı-logs', {type: 'text'}).then(c => c.setParent(parent.id));
});
message.guild.channels.create('sᴏʜʙᴇᴛ ᴠʙ.', {type: 'category'}).then(parent => {
message.guild.channels.create('💬│𝐒𝐨𝐡𝐛𝐞𝐭', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🤖│𝐁𝐨𝐭-𝐊𝐨𝐦𝐮𝐭', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💠│𝐎𝐧𝐞𝐫𝐢-𝐒𝐢𝐤𝐚𝐲𝐞𝐭', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📚│𝐊𝐞𝐥𝐢𝐦𝐞-𝐓𝐮𝐫𝐞𝐭𝐦𝐞𝐜𝐞', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📷│𝐅𝐨𝐭𝐨-𝐂𝐡𝐚𝐭', {type: 'text'}).then(c => c.setParent(parent.id));
});


message.guild.channels.create('>Giriş Çıkış<', {type: 'category'}).then(parent => {
message.guild.channels.create('🧳│𝚐𝚒𝚛𝚒ꜱ-ᴄɪ𝚔ɪꜱ', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🧳│ɪ̇ɴᴠɪᴛᴇ', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('Yayıncı Odası', {type: 'category'}).then(parent => {
message.guild.channels.create('🎥│Yayın Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(0));
message.guild.channels.create('⛔│Yayın Bekleme', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(0));
});

//message.guild.channels.create('●▬▬▬▬๑「🎵」๑▬▬▬▬●', {type: 'category'}).then(parent => {
//message.guild.channels.create('🎵 ・ Music Room', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
//message.guild.channels.create('🎤 ・ Live Music', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
//message.guild.channels.create('🔓 ・ Free Style', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
//message.guild.channels.create('💫・ Starbucks', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
//});

//message.guild.channels.create('●▬▬▬▬๑「Eğlence」๑▬▬▬▬●', {type: 'category'}).then(parent => {
//message.guild.channels.create('・tuttu-tutmadı', {type: 'text'}).then(c => c.setParent(parent.id));
//message.guild.channels.create('・bir-söz-bırak', {type: 'text'}).then(c => c.setParent(parent.id));
//message.guild.channels.create('・instagram', {type: 'text'}).then(c => c.setParent(parent.id));
//message.guild.channels.create('・sayı-sayma', {type: 'text'}).then(c => c.setParent(parent.id));
//message.guild.channels.create('・şarkı-türet', {type: 'text'}).then(c => c.setParent(parent.id));
//});

message.guild.channels.create('ʀᴏʟ ᴀʟᴍᴀ', {type: 'category'}).then(parent => {
message.guild.channels.create('🎮│𝐎𝐘𝐔𝐍-𝐒𝐄𝐂̧', {type: 'text'}).then(a => a.setParent(parent.id) && a.setUserLimit(0));
message.guild.channels.create('🥰│𝐋𝐨𝐯𝐞-𝐘𝐨𝐮', {type: 'text'}).then(a => a.setParent(parent.id) && a.setUserLimit(0));
message.guild.channels.create('⚧│ʙᴜʀᴄ-ꜱᴇᴄ', {type: 'text'}).then(a => a.setParent(parent.id) && a.setUserLimit(0));
});
message.guild.channels.create('sᴏʜᴅᴇᴛ ᴏᴅᴀʟᴀʀɪ', {type: 'category'}).then(parent => {
message.guild.channels.create('🎯│𝐄𝐭𝐤𝐢𝐧𝐥𝐢𝐤', {type: 'voice'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎶│ 𝗠𝘂𝘇𝗶𝗸 𝗢𝗱𝗮𝘀𝗶', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(0));
message.guild.channels.create('🎬│𝐅𝐢𝐥𝐦 𝐈̇𝐳𝐥𝐞𝐦𝐞', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(0));
message.guild.channels.create('🔊│𝐆𝐞𝐧𝐞𝐥 𝐒𝐨𝐡𝐛𝐞𝐭', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(0));
message.guild.channels.create('🔊│𝟐 𝐊𝐢𝐬𝐢𝐥𝐢𝐤 𝐒𝐨𝐡𝐛𝐞𝐭', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(2));
message.guild.channels.create('🔊│𝟐 𝐊𝐢𝐬𝐢𝐥𝐢𝐤 𝐒𝐨𝐡𝐛𝐞𝐭', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(2));
message.guild.channels.create('🔊│𝟑 𝐊𝐢𝐬𝐢𝐥𝐢𝐤 𝐒𝐨𝐡𝐛𝐞𝐭', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(3));
message.guild.channels.create('🔊│𝟑 𝐊𝐢𝐬𝐢𝐥𝐢𝐤 𝐒𝐨𝐡𝐛𝐞𝐭', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(3));
message.guild.channels.create('🔊│𝟔 𝐊𝐢𝐬𝐢𝐥𝐢𝐤 𝐒𝐨𝐡𝐛𝐞𝐭', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(6));
message.guild.channels.create('🔊│𝟔 𝐊𝐢𝐬𝐢𝐥𝐢𝐤 𝐒𝐨𝐡𝐛𝐞𝐭', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(6));
message.guild.channels.create('🔊│𝟗 𝐊𝐢𝐬𝐢𝐥𝐢𝐤 𝐒𝐨𝐡𝐛𝐞𝐭', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(9));
message.guild.channels.create('🔊│𝟗 𝐊𝐢𝐬𝐢𝐥𝐢𝐤 𝐒𝐨𝐡𝐛𝐞𝐭', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(9));

});
message.guild.channels.create('Eᴋɪᴘ Oᴅᴀʟᴀʀı', {type: 'category'}).then(parent => {
message.guild.channels.create('🌠𝐄𝐤𝐢𝐩-𝐂𝐡𝐚𝐭', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🌠| 𝐄𝐤𝐢𝐩 𝐎𝐝𝐚𝐬𝐢 ¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🌠| 𝐄𝐤𝐢𝐩 𝐎𝐝𝐚𝐬𝐢 ²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🌠| 𝐄𝐤𝐢𝐩 𝐎𝐝𝐚𝐬𝐢 ³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🌠| 𝐄𝐤𝐢𝐩 𝐎𝐝𝐚𝐬𝐢 ⁴', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🌠| 𝐄𝐤𝐢𝐩 𝐎𝐝𝐚𝐬𝐢 ⁵', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🌠| 𝐄𝐤𝐢𝐩 𝐎𝐝𝐚𝐬𝐢 ⁶', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🌠| 𝐄𝐤𝐢𝐩 𝐎𝐝𝐚𝐬𝐢 ⁷', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🌠| 𝐄𝐤𝐢𝐩 𝐎𝐝𝐚𝐬𝐢 ⁸', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🌠| 𝐄𝐤𝐢𝐩 𝐎𝐝𝐚𝐬𝐢 ⁹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🌠| 𝐄𝐤𝐢𝐩 𝐎𝐝𝐚𝐬𝐢 ¹⁰', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});
});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'gizlikod.mod.on.yaz'
};