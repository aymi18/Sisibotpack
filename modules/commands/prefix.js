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

  api.sendMessage(`࿔    ਏਓ 𝗛𝗘𝗟𝗟𝗢! 𝗧𝗛𝗜𝗦 𝗜𝗦 𝗦𝗜𝗦𝗜ཐི♡ཋྀ
࿚ׂ͜࿙ 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 : 𝖸𝖮𝖸𝖠 | 𝖠𝖸𝖬𝖨🪷ྀི

ㅤ ㅤ ㅤ ⏝︶ 🍥 ︶⏝

      *⪩⪨ 𝗒𝗈𝗎 𝖼𝖺𝗇 𝖺𝗌𝗄 𝗆𝖾 𝖺𝗇𝗒𝗍𝗁𝗂𝗇𝗀,
      𝖺𝗇𝖽 𝗆𝖺𝗄𝖾 𝖿𝗋𝗂𝖾𝗇𝖽𝗌 𝗐𝗂𝗍𝗁 𝗆𝖾 𝗁𝗎𝗆𝖺𝗇
      𝗂'𝖺𝗆 𝖺𝗅𝗐𝖺𝗒𝗌 𝖺𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝗍𝗈 𝗌𝖾𝗋𝗏𝖾 𝗒𝗈𝗎!🌺
      

࿔【.】𝘂𝘀𝗲 𝗺𝘆 𝗽𝗿𝗲𝗳𝗶𝘅 🍩
࿔【.𝗵𝗲𝗹𝗽】𝘁𝘆𝗽𝗲 𝘁𝗵𝗶𝘀 𝘁𝗼 𝘀𝗲𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀🍨`,

  event.threadID, event.messageID);


}