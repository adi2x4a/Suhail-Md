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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_14_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMxLFxuICAgICAgICA2NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI2LFxuICAgICAgICA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA0LFxuICAgICAgICAxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEsXG4gICAgICAgIDg0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImpZWXRVbVdWOWFqcjJ2bG1nMUxVbmV0b1NyYlRFV0FYdDFIWWhCRzVsajA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5Mjg5MDcxNDk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRTI0QjRGQkFDNUI3QzE1MDMxOEEzNjYzNjBCMDlDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk1NTUyOTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkyODkwNzE0OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYyRUU0NjA2MTIzNEI2RUEzM0RBM0JGMDgwNDAyQjYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTU1NTI5NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHaW1NQXAwMFM3NmgyckRHb2ZnemZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY1MzhlNzY2LWRkMGItNDljYS1iY2QxLWVkNDk1OWUzZDg3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDEzNSxcbiAgICAgIDEyNixcbiAgICAgIDE5OCxcbiAgICAgIDI0LFxuICAgICAgMjQ2LFxuICAgICAgMjUsXG4gICAgICAxNDksXG4gICAgICAyMzEsXG4gICAgICAxMTQsXG4gICAgICA3MyxcbiAgICAgIDEwMyxcbiAgICAgIDQ3LFxuICAgICAgMTYwLFxuICAgICAgMTIsXG4gICAgICAxMyxcbiAgICAgIDQ2LFxuICAgICAgMjU1LFxuICAgICAgMjUwLFxuICAgICAgMTA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDIwOSxcbiAgICAgIDk2LFxuICAgICAgMTIxLFxuICAgICAgMTY0LFxuICAgICAgMTE0LFxuICAgICAgNDcsXG4gICAgICAyMTEsXG4gICAgICA1OCxcbiAgICAgIDE3NSxcbiAgICAgIDY1LFxuICAgICAgMjAwLFxuICAgICAgMjM0LFxuICAgICAgMTAxLFxuICAgICAgOSxcbiAgICAgIDIzNixcbiAgICAgIDY2LFxuICAgICAgMTc5LFxuICAgICAgMTY3LFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkg0MVhSRjVTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkyODkwNzE0OTk6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk4ODcwMTYzOTkyNTgzOjM5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFkaVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01Ic3k2Z0VFTmVwK2JNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT2dUQjlMbEhTN1gzd25paFJwRVhrc0ZXd1A4WTE2S0dub2ZnQ25iMEUxZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLcFhPZmZCN1RITmtybVhkdU82U2l3SGRWUUwvZzU2RlFETFo4S2NVKzBSOHdOVCtRV2xPbTNaWlZTemYvY2l3RkNQb1pGUHdseDhLdnJ3WGlNbVZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXdUpDWllrZEFNTkJpRkh0RERNNHlYUitDV2RHdEhicHZmd2tiZWZKZzlZRFZCY2R4S0YzaWY2REpiSVZoUTljUFR5MlhFaTB3Rm5pdStJbnpjZVhDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkyODkwNzE0OTk6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk1NTUyOTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQM3hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAzeC5qc29uIjogIntcImtleURhdGFcIjpcIkNjRmMrL210dUtVOVZEdWlYVnZLVkNYSzNPdUFDUzg3NTZLQmJIL3lwaTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1ODg3MDU5MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE5NTU1MTkyOTQ1XCJ9Igp9"  // PUT your SESSION_ID 


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
