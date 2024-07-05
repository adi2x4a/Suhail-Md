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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_22_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDgwLFxuICAgICAgICA0MixcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMixcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImx6ZDlJUnBMdjhkclhLOHZ5a1lZYWlXR1lpbmNhQ0NIVGpBMWdtcDRWaXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5Mjg5MDcxNDk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNzJENjg1MzBCQjFCQUQ2Rjk2OTE4Q0RBMzg4REQxOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxNTY5NTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkyODkwNzE0OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFBODZEMjgyNDYwRjYzM0U0RkFCMzMwNjQ4QzA5MzE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE1Njk1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2Q0lZYmFhRFFCaUZxRFF1UFcteHhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIyNDc2MTc0LTc0MWItNDgwOC1hNTIzLWI0YjZkMjg1NzIwN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICA4OCxcbiAgICAgIDU0LFxuICAgICAgMTk3LFxuICAgICAgOSxcbiAgICAgIDIxNixcbiAgICAgIDM5LFxuICAgICAgMTk0LFxuICAgICAgOSxcbiAgICAgIDkyLFxuICAgICAgOSxcbiAgICAgIDUyLFxuICAgICAgNjcsXG4gICAgICAxMTMsXG4gICAgICAxNTcsXG4gICAgICAxMjIsXG4gICAgICAyMDUsXG4gICAgICAxNjgsXG4gICAgICAyMjAsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDE3MSxcbiAgICAgIDIwOCxcbiAgICAgIDIzNixcbiAgICAgIDEwOSxcbiAgICAgIDExOCxcbiAgICAgIDU4LFxuICAgICAgNCxcbiAgICAgIDEyOSxcbiAgICAgIDYzLFxuICAgICAgNCxcbiAgICAgIDE4MSxcbiAgICAgIDU2LFxuICAgICAgMTQyLFxuICAgICAgMTIzLFxuICAgICAgMjAwLFxuICAgICAgMTU1LFxuICAgICAgMTIwLFxuICAgICAgMTQ3LFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPUzgydjRHRUkyR25yUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImo5d2VDZ0xRdU9VcVlJZmpiOWEycElRbTNaMisvWi9scGlVb3JSYzBBVUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQXprTHlKUzVaY0xaTUxkUEtNUkZscGU2aDVRSzd2U2pHdFo2V2NLeEpVVFo1cnhFWEFQTFU3S3lnM0M4SFdtN095VlZjd0Z4WFhIU2hkanlTcDVOQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiekZLMWxhYjVhMFl1aGlobzRiajloSVNUeWlLMFNlWjhxL2tuR0YvYzIwc1Y2WlI2VHlOekE1NFFvL0N1dlpPOHkrdjlTK2VRemhtUVJYSkt0Z3NsQ0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkyODkwNzE0OTk6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk4ODcwMTYzOTkyNTgzOjQ2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFkaVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5Mjg5MDcxNDk5OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE1Njk0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU11TFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXVMLmpzb24iOiAie1wia2V5RGF0YVwiOlwicVZOLzZacUFic2hxL2NhWDFaRjkrZEI5RUdtS1ZSYXJrakJDRWxka2FKTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODc2MzM2MjI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxNTY5NDUxNjRcIn0iCn0="  // PUT your SESSION_ID 


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
