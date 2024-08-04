
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09rVEcvZk1KRjYwM0ZmWGw3OEF4djlWQ1VnRXBJUmhkR09rek51bm1rcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakFiOFZHZm56VTlTVWZQYlpqaDZRUHQ0Y0M0cHZ3N1V0ZTQzT0N5azhERT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRTA1ckxnSTdFaWUya1BKejNGaUVWVkxmdkp1WnBKNGRuV3dmODBrckVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RjJEdSsva2JNMXBHS2NENHhEVytpc2licW9taVprdExTSlhnS1hjNDFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdKZDJnTDNYNkxNaU5TeUZ6UmJGcFlyNWloZCsrRWljbnBRTWRva29YbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldPRWptUGhjdVlDQWE0M3NKR0VGRXB2VWdHSkxlWXFCcTBpZXVJN0swZ009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dQblVveVRnUGhBNDhKNVFuMEJVNGorWEczZEU3NFpKWWUrZ2R5ajdFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzhtWThZdi9ZSFVLY1VzVS9aNzYyVUU5T2pYUEpjdUZVbitDbG1scjNYbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind3WnVrbGhQNERySzVmQnZiZXkyVHZqN1hKdHNCRUFKZndsbTc5MFlrU0V2WFdnZ3lxNVkxZEdPZFdIa1B6bDhreWVnVHJpVm1IdGlKSWkzRDNSWGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiJ0YVVtOGgxclhFWFVDWW1HemhKN0VQd05mR2MwZThXZkdwMXE4WkNOYTZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY4MzM4OTgwNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0NjQ0RjZFNTI2QzFEQTM0RERBNTFGOUQ0MDkxRDU1NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzQ5MDcwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2ODMzODk4MDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTJFRjQwNDRDRkU0QjVENTAwREU4OUExQzQ2OTY3NTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjc0OTA3MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM3NjgzMzg5ODA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNEQTNDQTg4OTQ4QjQ0QkYwQTYzOTZCMTA1NUY4Qzk1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI3NDkwNzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY4MzM4OTgwNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MjM5RDZCQTQwQkVBQUQzOTNBNkY2ODExRDlENTBCMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzQ5MDcyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJbVYzMWM0N1RYMmFFc3I5WE1XdTRRIiwicGhvbmVJZCI6ImZlM2JmNGYyLTkxODAtNGE2MS1iZTYyLWNkMWYzNDZjNWUxOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJanJCbUlZN0dlSkhadlptVVlvc3h2SVNzV1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienRHUFE3ZVI5MGJPMkVRZ2pnUTZvYnB5MXJFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkE4NEVLSkVBIiwibWUiOnsiaWQiOiIyMzc2ODMzODk4MDU6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhlJHhkYzhka3hl7Thlodf4ZGM4ZSR4Ze04ZaHIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJN2pyc3NHRVArZ3ZMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvVU85U3JXYVN3bHBUbnF4emZrWTVvdHlWRXVadTNQWDdyOGQ5azNxbkUwPSIsImFjY291bnRTaWduYXR1cmUiOiI1WXJQOVdEc3JGTE00ZHYyY25UOTlneS9SdUwwM3dFbDRGUXlaaDcxSy9JSjkrOHQwOEI3NHpFNTM5dzBicUpFTlNROVoxeEhiOWgzZVQvNm9XZVBDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiei9qd0RoeWpxbGFtbXZpYUlTUWlqeUVFY0pIRWVzMnJBWTZmYlBWRFdGNWdJR2lpWEJYdnRVN3ozWm5vcVQ3Y2RrZHlEU3hQbDdiMk1EUTcrRXBoanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2ODMzODk4MDU6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhRkR2VXExbWtzSmFVNTZzYzM1R09hTGNsUkxtYnR6MSs2L0hmWk42cHhOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzQ5MDY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUU0dyJ9yJkZXRhaWxzIjoiQ0lxRTZxUUhFUG4rdTdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5FbnF0TzNqZ2E4Ynl2Y2ptaS93VkZaY0srMTN6TkpDVzlVeVZtd3pzMXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitNbCs0THozeXgrbDVwSXFDdk1iekVZMnZ1TEpzK0doeDZzM0xwR01xT09xTDBqNWNxMzFUQmhhbkFrWTN1cnJSU1FnV2NnSXlWOWtuMlhYeCtUUEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJubmp1WXExV0MrcUx4VlZ5U1pmRklmWGJyRW42MDJOeDdZc3VKVnkzbHY1SWd1K0E0UEk1dGhhb2xwcmloUStsaTZXWjF3emtnWW9qWkhQaHBXSjZodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY3MjIzMzU5Nzo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRSSjZyVHQ0NEd2RzhyM0k1b3Y4RlJXWEN2dGQ4elNRbHZWTWxac003TmIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI3NDQ3MTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWIxIn0=" //Make sure session id starts with Byte;;;



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
