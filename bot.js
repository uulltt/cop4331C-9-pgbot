
const Discord = require('discord.js');
const client = new Discord.Client();
const {
	Client
} = require('pg');

const herokupg = new Client({
		connectionString: 'postgres://qyexdtumrzepev:34a0deb4187ea73ee9a6a6ee8e1b145c6140288c74432973049fa33d44907699@ec2-23-21-246-25.compute-1.amazonaws.com:5432/d3gtusutpn8b6n',
		ssl: true,
	});

client.on('ready', () => {
	console.log('I am ready!');
	herokupg.connect();
	client.user.setUsername("Querybot");
	client.user.setActivity('!pg your query goes here', {
		type: 'WATCHING'
	});
});


client.on('message', message => {
	
		if (message.content.substring(0, 4) === '!pg ') {
			herokupg.query(message.content.substring(4), (err, res) => {
				if (!err)
					console.log(res);
				else
					console.log(err);
			});
		}
		
	});

	client.login(process.env.BOT_TOKEN);
