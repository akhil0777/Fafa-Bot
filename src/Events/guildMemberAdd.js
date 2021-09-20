/** @format */

const Event = require("../Structures/Event.js");

const Discord = require("discord.js");

module.exports = new Event("guildMemberAdd", (client, member) => {
	const channel = member.guild.channels.cache.find(
		c => c.name == "joins-and-leaves"
	);

	if (!channel) return;

	const embed = new Discord.MessageEmbed();

	embed
		.setTitle("WELCOMES YOU")
		.setColor("GREEN")
		.setDescription("https://discord.gg/Bf8U2ayUZC")
		.setAuthor(member.user.tag)
		.setThumbnail(member.user.avatarURL({ dynamic: true }))
		.addFields(
			{
				name: "Account Created",
				value: member.user.createdAt.toUTCString(),
				inline: true
			},
			{
				name: "User Joined",
				value: member.joinedAt.toUTCString(),
				inline: true
			}
		)
		.addField('Inline field title', 'Some value here', true)
	    .setImage('https://imgur.com/CwC4orG')
	    .setTimestamp()
	    .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

	channel.send({ embeds: [embed] });
});
