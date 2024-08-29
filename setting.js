/*
    CREDIST !!!
        > Hw Mods [ Base ]
        > Rerez Hosting [ Developer ]

    SAYA SANGAT BERTERIMA KASIH JIKA KALIAN MEMBIARKAN CREDIT INI TANMPA MENGHAPUS ATAU MENGGANTI NYA 
    TOLONG HARGAI YAA
    
WA ME : https://wa.me/6282312436896
TE ME : https://t.me/rerez_x_hosting
YT ME : https://www.youtube.com/@RerezHosting
SALURAN WA : https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r
    
WOI JB KONTOL JANGAN DI JUAL BANGSAT 🤬

*/
const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ALWAYS XYREZZ OFFC' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6281563424562','6281563424562'] // ubah aja pake nomor lu
global.noown = '6283841605780'
global.botname = 'XYREZZ BOTZ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'XYREZZ' //Gausah Juga
global.idchannel = '120363289337334615@newsletter'
global.linkgc = 'https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r'
global.gcbuyer = "https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r"
global.thumbnail = 'https://telegra.ph/file/24b24857cf823991a2c5f.jpg'
global.autobio = false // AutoBio
global.autoread = false // ReadChat 
global.Ghost = '`'
global.versibot = 'V 8.0.0'
global.packname = 'XYREZZ TEAM'
global.author = 'XYREZZ TEAM'
global.skizo = "ALWAYS TEAM"
global.wm = "TEAM XYREZZ"
global.gris = "`"
//=================================================//
global.onlypc = false
global.onlygc = false
//=================================================//
//cpanel
global.domain = "https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r"
global.apikey = "https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r"
global.capikey = "https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r"
global.egg = "15"
global.loc = "1"


global.text1 = "ASSALAMUALAIKUM"

//Send Pay
global.dana = "085216955233"
global.ovo = "085216955233"
global.gopay = "085216955233"
global.qris = "-"

//limit & balance
global.limitawal = 10
global.balanceawal = 10000

global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};

// CUMAN SIMBOL MENU UBAH AJA SESUKA KALIAN
global.atas = '┏━━━━━━━━━━━━━━━━'
global.tengah = '┣━━━━━━━━━━━━━━━━'
global.bawah = '┗━━━━━━━━━━━━━━━━'
global.garis = '┃'
//mess
global.mess = {
    premium: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴘʀᴇᴍɪᴜᴍ!'),
    done: ('ᴘʀosᴇs...'),
    owner: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ!'),
    wait: ('ᴘʀosᴇs...!'),
    group: 'κнusus ԍʀouᴘ cнᴀт!',
    admin: 'κнusus ᴀᴅмιɴ ԍʀouᴘ!',
    botAdmin: 'ʙoт нᴀʀus ᴀᴅмιɴ!',
    linkvalid: 'ʟιɴκ тᴀuтᴀɴ тιᴅᴀκ vᴀʟιᴅ!', 
    error: 'ᴇʀoʀ тᴇʀנᴀᴅι κᴇsᴀʟᴀнᴀɴ!',
    limit: `ʟιмιт κᴀмu suᴅᴀн нᴀʙιs!\nκᴇтικ .ʙuʏʟιмιт uɴтuκ мᴇмʙᴇʟι ʟιмιт`,
    regis: (`κᴀмu ʙᴇʟoм тᴇʀᴅᴀғтᴀʀ\nsιʟᴀнκᴀɴ ᴅᴀғтᴀʀ ᴅᴇɴԍᴀɴ cᴀʀᴀ .ᴅᴀғтᴀʀ`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})