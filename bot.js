
const Discord = require('discord.js');
const client = new Discord.Client();
const {
	Client
} = require('pg');

const herokupg = new Client({
		connectionString: 'postgres://txyddqffhajizp:99e64ff9f4120830980a80f77fda110906db27afa2b07c3832ab65e0851f7b08@ec2-23-23-80-20.compute-1.amazonaws.com:5432/d52kahtp6t26ms',
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
