module.exports.config = {
  name: "prefix",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Marjhun Baylon",
  description: "prefix",
  usePrefix: "false",
  commandCategory: "system",
  usages: "[Name module]",
  cooldowns: 1,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 20
  }
};

module.exports.run = async function({ api, event }) {

  api.sendMessage(`╭─────────────────────╮
 |      ╭╮╱╭┳╮╭┳━╮╭━━╮
 |      ┃┃╱┃┃┃┃┃╭╮┫╭╮┃
 |      ┃╰━╯┃╰╯┃┃┃┃╰╯┃
 |      ╰━╮╭┻━━┻╯╰┻━━╯
 |      ╭━╯┃
 |      ╰━━╯
 | ○ ﹝ * ﹞ 𝘂𝘀𝗲 𝗺𝘆 𝗽𝗿𝗲𝗳𝗶𝘅 𝗹𝗼𝘃𝗲.
 | ○ ﹝ 𝗵𝗲𝗹𝗽 ﹞ 𝘁𝘆𝗽𝗲 𝘁𝗵𝗶𝘀 𝘁𝗼 𝘀𝗲𝗲 𝗰𝗺𝗱𝘀
 | ○  𝟮𝟰/𝟳 𝗼𝗻𝗹𝗶𝗻𝗲 
 | ○ 𝗨𝗦𝗘 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗔𝗟𝗪𝗔𝗬𝗦 𝗙𝗢𝗥 
 |    𝗣𝗥𝗘𝗩𝗘𝗡𝗧𝗜𝗡𝗚 𝗢𝗙𝗙𝗟𝗜𝗡𝗘
 |     
 |
 |     𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧’𝗦 
 |     𝗔𝗗𝗠𝗜𝗡 𝗜𝗙 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗖𝗠𝗗 
 |     𝗗𝗜𝗘𝗦 :https://www.facebook.com/profile.php?id=100095262681590

╰─────────────────────╯ `,

  event.threadID, event.messageID);


}