module.exports = {
    name: 'faq',
    description: "Embeds!",
    execute(message, args, Discord) {
        const faqEmbed = new Discord.MessageEmbed()
        .setColor('#7A378B')
        .setTitle('FAQ')
        .setURL('https://www.curseforge.com/members/pixeldreamstudios/projects')
        .addFields(
            {name: ':question: Other Pixel Dream Studios Projects?', value: '⇨https://www.curseforge.com/members/pixeldreamstudios/projects'},
            {name: ':question: How to add optifine?', value: '⇨ https://www.youtube.com/watch?v=XNjwAoflSGQ'},
            {name: ':question: Is the modpack laggy?', value: '⇨ Try using optifine for better performance \n ⇨ Try removing fresh animations and bushy leaves texture packs \n ⇨ Last resort try out Lite Edition\n ⇨ (link)'},
            {name: ':question: Are there server packs?', value: '⇨ Fantasy Craft Server Pack: \n ⇨ https://www.curseforge.com/minecraft/modpacks/fantasy-craft-forge/files \n ⇨ Fantasy Craft Lite Edition Server Pack: \n ⇨ Coming soon!' },
            {name: ':question: Want to report a bug?', value: '⇨ Make sure to report it to the appropriate channel!' },
            {name: ':question: Have any other question?', value: '⇨ Feel free to create a ticket!' },
            {name: ':question: How to host a server on your PC?', value: '⇨ https://www.youtube.com/watch?v=bIjisWyxU-8'},
            {name: ':question: Want to host a professional server and simultaneously help us?', value: '⇨ Use this link for 25% off \n ⇨ https://www.bisecthosting.com/PixelDream'}
        )
        .setImage('https://i.imgur.com/nWUDBOl.png')

        message.channel.send({embeds: [faqEmbed]});
    }

}