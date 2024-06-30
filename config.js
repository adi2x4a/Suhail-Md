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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_11_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUzLFxuICAgICAgICA3MixcbiAgICAgICAgMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDM2LFxuICAgICAgICA3NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMixcbiAgICAgICAgNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MixcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDg2LFxuICAgICAgICA3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICA1NixcbiAgICAgICAgMjIzLFxuICAgICAgICA3NixcbiAgICAgICAgMjUzLFxuICAgICAgICAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDksXG4gICAgICAgIDk2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjExLFxuICAgICAgICAxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU3LFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4LFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDExLFxuICAgICAgICA5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDg2LFxuICAgICAgICA2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKekd5eUVlb0dUYTQzZm9XbEJxUkovTnVaMlJLcnlGbmp1QzNncXVFRlRrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTI4OTA3MTQ5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUYyNDM4RTVCNEQwRUE4QUMzRkVFQTZBQzdBNTZCMjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzEzNTA5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5Mjg5MDcxNDk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQkVFQzc5OUNBNjgyMjc3MkJEMkU3Nzg5MTgyNDk4Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk3MTM1MTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaHc1WXBCZkdUbk9tLU54LTVTdUhEZ1wiLFxuICBcInBob25lSWRcIjogXCJiZmI4YWI1OS0zMzFmLTRkODYtOWJmZC1mZTlmY2Q3ZmVmZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTgzLFxuICAgICAgMTM3LFxuICAgICAgMTIxLFxuICAgICAgODYsXG4gICAgICAyNDAsXG4gICAgICAxNTgsXG4gICAgICAyNDQsXG4gICAgICAxODAsXG4gICAgICAyMjAsXG4gICAgICA4MyxcbiAgICAgIDE5NyxcbiAgICAgIDIxNyxcbiAgICAgIDIyOSxcbiAgICAgIDQ0LFxuICAgICAgMTU5LFxuICAgICAgNTEsXG4gICAgICAxNSxcbiAgICAgIDEwOSxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxODMsXG4gICAgICAxMjcsXG4gICAgICAxODUsXG4gICAgICA2MixcbiAgICAgIDIyOSxcbiAgICAgIDE5NyxcbiAgICAgIDIxMixcbiAgICAgIDIwMCxcbiAgICAgIDI1MixcbiAgICAgIDcyLFxuICAgICAgMixcbiAgICAgIDkxLFxuICAgICAgMjIsXG4gICAgICAxMDIsXG4gICAgICAxNDIsXG4gICAgICAyOSxcbiAgICAgIDUsXG4gICAgICA5NCxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01Qc3k2Z0VFTjc5Z3JRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT2dUQjlMbEhTN1gzd25paFJwRVhrc0ZXd1A4WTE2S0dub2ZnQ25iMEUxZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKdWh4aTZRNmhJK20vcWdhdDFUdTdIMUQ5NndWOSt2aFhCUzlMY1d6MzJFekV2azZTOUVCNDMvam9EbE50RUtaY3hIdXIvR3RyOHRHYmJJNWZyTjFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIZmlFb3MzcXR0SG1uZkxHN3ZIa3VYT3RubTJJTmtYaDZWL3RWWFdtOEdHZ0tYdXRCbVJCUGtxa2ZDYW01YmViN1FHYVlnQjFFN2tCVzg1cEVoTGlnUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTI4OTA3MTQ5OTo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTg4NzAxNjM5OTI1ODM6NDVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWRpXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkyODkwNzE0OTk6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3MTM1MDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGMkJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUYyQi5qc29uIjogIntcImtleURhdGFcIjpcIkUxTEVIcHhkVDk0ZzB2dEoxWThYZHlESFlJWE9nTXJFWEJwUVZSWmE2Mmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1ODg3MDU5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NzEyMDU0MTU4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjJDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaVpYWWZyU0xUeExvaFM2Nk55bzNSRnM3VmRFbEN3WGs4MUZ1NWZkT0x3TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU4ODcwNTk1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUYyRC5qc29uIjogIntcImtleURhdGFcIjpcIitWTGtQTlhUSnIyRVY2d3hyN1NJQWJCTEpadEJJVmZET2pnZ3lyNk05bmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1ODg3MDU5NSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE5NzEzNDg0Mjg1XCJ9Igp9"  // PUT your SESSION_ID 


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
