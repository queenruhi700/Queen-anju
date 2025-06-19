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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpWeDFudXB5QzNNS3loVnR6dmpMdmNYTXZlQ3I3NG5tVjBsRzNsamJWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3NiTXhYOUVuNGd6V0tMUXJXcXF2dTIrbWZ6Q3lRWFpBOHdibjQ4OE54VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TG0zRlpIZlNHZEFHTHY1enptVko4cmYyR1l3U0ROR3RkSHdyVUh3YUZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlYWh5Rk9xOW1JR09nVmxEUDJQa0huNForSGZTVi9McmtnM1VPSzliWVdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtBaExKZ0hTencvcG9aaUY0TVhhQkhxOVZCK3VrbDJmTU9EVjNLZURjVzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNieTJjd2J5VnIxU0NzZnc2OTVsT3pwTnpWVm5oaDRpZC8yZStzUUU5MTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9OZm9iSlhPUFBiL3ppclVqRXZnZVlZWmhtK2d2dmQrVi9DczdScDNXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZSthRXBhejF6aTdzd2VEUWJLWlFIVGhCcTRZbVdWMmtYSld3U0VYLzRVbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik45SVhyTTZJWG5pSXQxSldNd0grL0x2N3JyS094K2V0RGxYZTl6em4vemhGTk9HVFpaU2FjbVdUMVhWS3pHcW9neDdiVkhxU1ZLYURINTJGVTl0V2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6InU3Mng0eHorUVFSSktKNkVJeUZ5MDl0SWZSYmZaby9FbDJUL3FsSXNVRWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImE1Q2hxei01UzFhd3pVWDZEZFRuLXciLCJwaG9uZUlkIjoiNWU4NTVlNmQtNmJiYS00OTc1LTlhYWMtNjZlMjlhMzYxZGU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFjUUljSGF5K3ZhT0xLNERsdEZMSjFFMkw2UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqU1dEWFQrNERiZTRNYnZvSHh4YjFWUGYxb009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM05OMktNUTIiLCJtZSI6eyJpZCI6Ijk0NzQxNzE0MDYwOjYzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzU4MjM5MDYzMjA1MzI6NjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQKzg3dThGRVBtRnpzSUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVcHpqZXMyaklNNzUrSm1TUmwxaitjNHR0dHhWbG9WREpiNDFhUFQvNlZRPSIsImFjY291bnRTaWduYXR1cmUiOiJTOXpCa2ZwNkJ4RzRYQm5hNGNpbTNiajlZeHpGdVpxdno3Z1MxN0MvODhCSmwwVHpsL3o4NWYrSXMwTEdnM0lDMmZOaGsrMVplTmx5a3FPS3loeUZBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMTdNNW5zMi9BSU13bm1Ud1d0NDZhd3ZRV05MaS9oQWI1cmphYzNWZVZFUytEOVJBU1Q4VlN0UDV0eGd4eFlQczdCYXNScm8yRlRkTzNDSVpYa0hyaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MTcxNDA2MDo2M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWS2M0M3JOb3lETytmaVpra1pkWS9uT0xiYmNWWmFGUXlXK05XajAvK2xVIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQXNJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTAzMDM0OTUsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRVprIn0=",
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
