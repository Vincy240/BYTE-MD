
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNOS3F5VDNxWXVlcyszS2JRb1VOTXJDY1ZpdGx2UkYwK2cwUTFyZTJWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjc3Q3VBSE82N3FMSGRXNGtOdndEZDQzQ3BjZEc0NXV1bG9WOEFXRzFpTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTVB3OFNRRUVmTlJEODZJNXhFSWlwNG1LWGxjcm1TeHJYblBZRWJiL0VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVWt4TURWUnRuQ1pKeFBUcUpYM1g4NW85ekhEQjBGR1FGQjEwL21Bc1dRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PdlpBQVo4QTFQQ0NnN1h2Wi9EcmxIcXY0UVpaNzQvOTcvOVRQWE1UV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1UNmlRT3dVTGxsU3VVY2tpVTVtT0NYckVYS1BFMWJyMHdsUVBxUHZ3eE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT05mR3luT0dxQmo4NmpwYjlrRTRBL2piUFQwYmQ5TmVDK2UycTlDUGlGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTRBczlBTVc3S09LTFJlSlZiR0FPdkpMbnpVZjlkU0tuY1ZKeVdVTzIxbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5ETWhRKzcyZHRHZ0QrY0kva2lTK1RpNVhQUVBCZUdPSGNLMXh5MUdKMTh6UEhVMFp0eXZjSndiYm5VVE9iU1JYdGV4WldvdlNITENoZ01pUFpUcmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6Ii84aEp0aG9rNzFqMURmNXBXUVNSWVZpYWxqNUNJeGlUZDhOWk50ZUtPcjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjdHeEdub2xHVDJpM1JzNElYVnp6MXciLCJwaG9uZUlkIjoiNzhmZDI0OTYtNDQxNC00Mzk2LWFjZmMtYWQyNTU2OTFiZTA0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRSczIwaERNU0NYV25qV1Z1TUlNd0NXYzlVST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0YUptTmZVbEtINmdNeDJQMm9HaCtMZ1VoUXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFNONTNURjQiLCJtZSI6eyJpZCI6IjIzNzY3MjIzMzU5Nzo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJXwnZCi8J2Qp/CdkILwnZCo8J2Qq/CdkKkgW/CdkIPwnZCi8J2QoPCdkKLwnZCt8J2QmvCdkKUg8J2QifCdkK7wnZCs8J2QrfCdkKLwnZCc8J2Qnl0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lxRTZxUUhFUG4rdTdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5FbnF0TzNqZ2E4Ynl2Y2ptaS93VkZaY0srMTN6TkpDVzlVeVZtd3pzMXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitNbCs0THozeXgrbDVwSXFDdk1iekVZMnZ1TEpzK0doeDZzM0xwR01xT09xTDBqNWNxMzFUQmhhbkFrWTN1cnJSU1FnV2NnSXlWOWtuMlhYeCtUUEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJubmp1WXExV0MrcUx4VlZ5U1pmRklmWGJyRW42MDJOeDdZc3VKVnkzbHY1SWd1K0E0UEk1dGhhb2xwcmloUStsaTZXWjF3emtnWW9qWkhQaHBXSjZodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY3MjIzMzU5Nzo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRSSjZyVHQ0NEd2RzhyM0k1b3Y4RlJXWEN2dGQ4elNRbHZWTWxac003TmIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI3NDQ3MTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWIxIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
