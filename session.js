//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1uQ1hNN1NSZDBDMWVHOG1MN0ZBSEJNNnJwTlQ0SjUzR25yTFVPUGdHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXBVUm9vRVY4eUMvUmd0c010Ky9wNmlzMUpVMHpBS05xWWdaOWxlUXlqRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRS9mZXo2QkVWVzlhMlZXN0JFQlJ6dS9WMUVhenFvcDZHOHB0UU9Va0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxMm9HbEx3OEN0eFZDL0UwYjVrVzdWdDRSaHRweDJMY09GNnd0aEdUM24wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCcDhPUTVoVlhoVm5hOHN6SGpFMFpXK2tCK3pRMXVFQ2h0N0ZHYnRRbE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtHMVhlK21IWm9jOWRnanpYQ2oyc0NHK2htY3N4R083aXhqWVBOS1FnbkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0paTS9XMXBNVE1ldlZNZGphZWlVbVd4TDE1ZzRKdTZEUG16bURMZTMyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejdCSnphUE9OSlJtSjJ5bTRUcGpMN0J2MllmUkNIQ2taWURhanF4US96dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRMZkVIUlVKQW16UW9NL3NvemtWVmU1MmFNakVnT0poSHAxSGdjWGJZeURXVnViOTVWNEdaNzdKMFB5czhXdVBhTDhDT08vU3lBSmJ3Um1kVVk0N0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJWenhmZ2dWaUZZOUx0QW93aVE4MldQeEg3d29xcUpUR1A1Z1VjckU5Nkg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXWVUyMm45X1FaNjllOXlHMHJJb0xBIiwicGhvbmVJZCI6ImQ3N2JhZWMxLTJhMGUtNGQ1ZS1iNjZhLWY3OGQzMWFiYTRlNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXY0MvK1pEU2p1ekFsUVlTWUVrRmJrSElDcFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmRtSEZwRG1yVysvdkE5Rzl5Y1JVT3pLVE1rPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRNUDhIUFM4IiwibWUiOnsiaWQiOiI5NDc0MTcxNDA2MDo2NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijc1ODIzOTA2MzIwNTMyOjY1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUCs4N3U4RkVJYXEwTUlHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVXB6amVzMmpJTTc1K0ptU1JsMWorYzR0dHR4VmxvVkRKYjQxYVBULzZWUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUDJMZ3lVNGZ0WVVCcUlxR1ZFK0RQcFNnK1pwZmhLY0MzdXZVbXR6cjlNUktWNU15Vkdnam96Z0ZzU296L1JJeWVWcksxa1VMelE4aXlSRFpnUlF0RFE9PSIsImRldmljZVNpZ25hdHVyZSI6InlLb0Q5cWZGdkR6NURHeUtNZkw2cmJlQ0ZxN3owZHRzSmxHS25wVmZYbU1xb3Z5K080UDNSRlhDU0FTL1l0Q0lBdDFNSmJCc0JidG9JM2g4SDdPbkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDE3MTQwNjA6NjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVktjNDNyTm95RE8rZmlaa2taZFkvbk9MYmJjVlphRlF5VytOV2owLytsVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMzQwODgzLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVadSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
