const axios = require('axios');

module.exports.config = {
    name: "yuno",
    version: "1.0.0",
    hasPermission: 0,
    credits: "api by jerome",//api by jerome
    description: "Gpt architecture",
    usePrefix: false,
    commandCategory: "GPT4",
    cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
    try {
        const { messageID, messageReply } = event;
        let prompt = args.join(' ');

        if (messageReply) {
            const repliedMessage = messageReply.body;
            prompt = `${repliedMessage} ${prompt}`;
        }

        if (!prompt) {
            return api.sendMessage('yes love? ano itatanong mo?', event.threadID, messageID);
        }
        api.sendMessage('wait hanapan kita sagot', event.threadID);

        // Delay
        await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay time as needed

        const gpt4_api = `https://gpt4withcustommodel.onrender.com/gpt?query=${encodeURIComponent(prompt)}&model=gpt-4-32k-0314`;

        const response = await axios.get(gpt4_api);

        if (response.data && response.data.response) {
            const generatedText = response.data.response;

            // Ai Answer Here
            api.sendMessage(`ito na sagot love\n━━━━━━━━━━━━━━━━\n\n𝗔𝗻𝘀𝘄𝗲𝗿: ${generatedText}\n\n━━━━━━━━━━━━━━━━`, event.threadID, messageID);
        } else {
            console.error('API response did not contain expected data:', response.data);
            api.sendMessage(`❌ halaaa di ko mahanap sagot bhe, daming error. Response data: ${JSON.stringify(response.data)}`, event.threadID, messageID);
        }
    } catch (error) {
        console.error('Error:', error);
        api.sendMessage(`❌ di ko mahanaaappp😭. Error details: ${error.message}`, event.threadID, event.messageID);
    }
};
