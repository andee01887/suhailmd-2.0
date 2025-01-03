const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_59_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjExLFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM2LFxuICAgICAgICA2MixcbiAgICAgICAgMTE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYwLFxuICAgICAgICA2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYyLFxuICAgICAgICA4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NixcbiAgICAgICAgOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDY5LFxuICAgICAgICA0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieFJDM1cydkFFd0x3N0dhTGVaNllSR25WVnV4a0RQVkpqRFJZMmhYSFd6cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQURMYmI2eFNRY08yUHJzMGNwb2dUUVwiLFxuICBcInBob25lSWRcIjogXCI4NzRiZjU0Yy03YTk3LTQwNzYtODA5OC05NTg3N2NkMGQzNjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgNDksXG4gICAgICAyMjEsXG4gICAgICA5OSxcbiAgICAgIDE1OCxcbiAgICAgIDE4LFxuICAgICAgMTU1LFxuICAgICAgODUsXG4gICAgICAyMzcsXG4gICAgICAxMTAsXG4gICAgICAxNTMsXG4gICAgICA2OCxcbiAgICAgIDE3LFxuICAgICAgMTE5LFxuICAgICAgMjUxLFxuICAgICAgMjQ5LFxuICAgICAgNzQsXG4gICAgICA3NCxcbiAgICAgIDI0NixcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDE0MCxcbiAgICAgIDQ2LFxuICAgICAgMTExLFxuICAgICAgMTg2LFxuICAgICAgMTQwLFxuICAgICAgMTQ3LFxuICAgICAgMTQ1LFxuICAgICAgMjMsXG4gICAgICAxODMsXG4gICAgICA5OSxcbiAgICAgIDIxOSxcbiAgICAgIDI4LFxuICAgICAgODksXG4gICAgICAxNCxcbiAgICAgIDIxOCxcbiAgICAgIDIzMyxcbiAgICAgIDc5LFxuICAgICAgNTMsXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1NUhWUFZLQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA3MDkzODIxNTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzExODAzOTMxMzIxMTA6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcm8zTzRFRU0zMjM3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRjd1pwZFVyRUZJcit2S0tnL1JzVmpTeDloc2puSW9wS3YxN3piUk1MeW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNG9ON0NCdHdrN3c1VTlaRTkxd1dCekoxSFNnSVRYWTZaNTRGMVVvVUJ5QWh2d0JUYkRydWZ0VHlaWVdJa0ZLMVN1NnRWMzVhakM5YXB4bzJ6bWdyREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV2xJTVRhVXErZDRGcHFKNlVHUnZEWUxoR0RmVXJTL3YreW9rSTVqUU1RNEZBQkJpb0o1L1p3UmVTUlNoTU9sR25KUlJ1b3hFYlFURkFvSFBLS0c5alE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA3MDkzODIxNTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTkxNjM2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9iK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2IrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRWE2bWVjMm56TnN6elFCNVdFMzlxc0F6ZzNuR3hqdUFrT2xhcy94NDYwRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzA1OTQ5Mjg5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
