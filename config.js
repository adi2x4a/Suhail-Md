const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="India,kolkata."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://anonymous2x4a:adi2x4a@cluster0.hnefcwm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝔏𝔲𝔬 𝔖𝔥𝔢𝔫" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "918920659106";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919289071499";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_44_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MixcbiAgICAgICAgMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICA5NCxcbiAgICAgICAgNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5OCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMixcbiAgICAgICAgODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyLFxuICAgICAgICA4MyxcbiAgICAgICAgODksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMixcbiAgICAgICAgNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibHhjcjd3THNqb0JOQlo5WVZwTk9CZFl3NE1XNnZ3elZvVStobURoR0NTUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTg5MjA2NTkxMDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc5NzhGRjg3RDUwNEM0NzQ2NjhFQzc4MUYwREE5QTgxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDg0NTgzN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODkyMDY1OTEwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTFBQzVFNkZEOTgzQTc1RTREQzNGRDE1NUIxMENBMUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODQ1ODM3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJVdWZZbUFOUW1pQWxxcXI3Q0RqZHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2Q0NGM1ZTYtYzBkNS00M2RlLWFhZTEtYjk0OGYzM2RhMzNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDMwLFxuICAgICAgMTI0LFxuICAgICAgMTYsXG4gICAgICAxNzYsXG4gICAgICAxNzMsXG4gICAgICA2NyxcbiAgICAgIDkwLFxuICAgICAgMjM2LFxuICAgICAgNzgsXG4gICAgICA0MCxcbiAgICAgIDAsXG4gICAgICA5MyxcbiAgICAgIDEzNixcbiAgICAgIDI3LFxuICAgICAgMTczLFxuICAgICAgMjksXG4gICAgICAxMDUsXG4gICAgICAxNDUsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICAxOTksXG4gICAgICAyMjMsXG4gICAgICA1NyxcbiAgICAgIDI1LFxuICAgICAgMzAsXG4gICAgICAxMjQsXG4gICAgICA5MixcbiAgICAgIDI1MCxcbiAgICAgIDU1LFxuICAgICAgODUsXG4gICAgICA1LFxuICAgICAgNjksXG4gICAgICAxMDQsXG4gICAgICAyMjksXG4gICAgICAyMTgsXG4gICAgICA3MCxcbiAgICAgIDE0NCxcbiAgICAgIDk3LFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjRURjNFWEJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODkyMDY1OTEwNjozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA1ODc1NDE1MzYzNjQxOjM4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFkaVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6S29iUUZFSWlNeUxRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUTZncG0wZW1HK2NpbWZta1JjUGtobXh0VDBCM0hUR01ZMlJOMndMWk8xWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuRGp4bDFBQW5PcHhPdjBqOWRZamk2V0JyUEhUWG54ejVHb1VuT1JqNlRrRGZLRzJ5S0FaM21LZ2JmNDhYS2NlN2ErZGQ4VXV2SWhqdllSa0lGWE9EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEZTcyUlR3K1BySnF0UVRWQmhrMG9tVkh0V2FSd2RtejI0ZUhvMjEwaUpjM0prWFpHS2gxNjVpWmZxWERIWWxxTDU5VUE3WmlaNDg2VWVFUi9WZDVodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg5MjA2NTkxMDY6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg0NTgzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU8zRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzNFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaHhyL25kZmxoSGVtYTk0ZmVDSGRFOE5pdENzcFIya2lzSG5GbEYzUkI3RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDUxNzc5MzU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxODcwODg4NzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Adi",
  packname: process.env.PACK_NAME || "𝔏𝔲𝔬 𝔖𝔥𝔢𝔫",
  botname : process.env.BOT_NAME  || "𝔏𝔲𝔬 𝔖𝔥𝔢𝔫",
  ownername:process.env.OWNER_NAME|| "Adi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
