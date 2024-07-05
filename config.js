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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_21_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk1LFxuICAgICAgICA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYzLFxuICAgICAgICA2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDU1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTksXG4gICAgICAgIDQxLFxuICAgICAgICAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBybTdjRWxIc0grRm1qWk85WUxCUm91TGxJWTV1VDlDdElpcEVVZkE0ZXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5Mjg5MDcxNDk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMjQ0OEU5NEVGMERGRDJENkEzNUVBNTk3MEQ2QThBRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxODU3MTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkyODkwNzE0OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAyOENEQUJBMUY0M0E4M0MyNTVGNDM0NUI5MDc0ODFFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE4NTcxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTI4OTA3MTQ5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTA5NkY4MDVDMTI4NUUxMTJCQTExMkY4ODI0M0FGMTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTg1NzE1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5Mjg5MDcxNDk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RTU2RDg1QTg0N0M3MzI5RUNBQzFBQkU5MjE4NkU0MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxODU3MTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOE9NMzl1dmtULXk3SHZUWExEcko0QVwiLFxuICBcInBob25lSWRcIjogXCIyYWFhN2QwOC1jOTg5LTQwNGMtYWRiZi1mOTQ3M2MwNmE5M2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAyNDQsXG4gICAgICAzMyxcbiAgICAgIDE1OCxcbiAgICAgIDIwMSxcbiAgICAgIDEwMixcbiAgICAgIDIyNixcbiAgICAgIDIwOSxcbiAgICAgIDE3NyxcbiAgICAgIDc5LFxuICAgICAgOTQsXG4gICAgICAxNTMsXG4gICAgICAyMjQsXG4gICAgICAxMzcsXG4gICAgICA2NCxcbiAgICAgIDI1MixcbiAgICAgIDExMSxcbiAgICAgIDgxLFxuICAgICAgMTk0LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICA3NSxcbiAgICAgIDQ4LFxuICAgICAgMjQwLFxuICAgICAgMTY4LFxuICAgICAgMjMzLFxuICAgICAgODMsXG4gICAgICAyLFxuICAgICAgMTExLFxuICAgICAgMTc0LFxuICAgICAgMTQwLFxuICAgICAgNzEsXG4gICAgICAxOTAsXG4gICAgICAyMTQsXG4gICAgICAxNzYsXG4gICAgICAxNDYsXG4gICAgICAyMTksXG4gICAgICAxNDQsXG4gICAgICAxMDYsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLMk5pbU1RN2VhZnRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZucW1TMjNSQnF3VGlwWmRVRjltbzUrY1FBN29zd3FUL0RMZW8rbFZlMGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOUI1VHpGVlUrWkVlMWFkRTRBVWxyR2RXakVNWkRBY3dGaSswdkJrdkJRbzdMRGwwVzlDNXZ0aEM1Y3pxMGt4cnZFVWIzUzBPcS9MKy9lL1o0Z3ZyQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN0M5UlppSU43WlduUVozUjJEMFhUY1g3aUFsMExaU1Z4Tm5wVSthbzVCdWFaRnBNUDlnbWVyM0JYSkRCRFBxWHNzbWQ3bFgzL3I5b2NvdTZxeE1vQUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkyODkwNzE0OTk6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk4ODcwMTYzOTkyNTgzOjQ4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFkaVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5Mjg5MDcxNDk5OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE4NTcxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFPSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQU9KLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMXIxa2I5K1hjVW11MFZRcDNudk9KbXIveHVLSDlOVnZJT0ZZeXQ4dW5PWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDc3ODM1OTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE4NTcxMjEzOFwifSIKfQ=="  // PUT your SESSION_ID 


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
