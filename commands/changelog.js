module.exports = {
    name: 'changelog',
    description: "Embeds!",
    execute(message, args, Discord) {
        const changelogEmbed = new Discord.MessageEmbed()
        .setColor('#7A378B')
        .setTitle('FAQ')
        .setURL('https://www.curseforge.com/members/pixeldreamstudios/projects')
        .addFields(
            {name: ':regional_indicator_q:', value: 'added 1'},
            {name: ':regional_indicator_q:2', value: 'added2'},
            {name: ':regional_indicator_q:3', value: 'added3\n added 33 \n added 333' }
        )
        .setImage('https://i.imgur.com/nWUDBOl.png')

        message.channel.send({embeds: [changelogEmbed]});
    }

}