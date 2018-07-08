
const Discord = require('discord.js');
const client = new Discord.Client();
const {
	Client
} = require('pg');

const herokupg = new Client({
		connectionString: 'postgres://wwtmrxkpricrhc:1923cd7cdb15dc8639a0dba5e6d121d89db624a678e997725b4607064b1c0aa4@ec2-54-204-23-228.compute-1.amazonaws.com:5432/dfsnm7f68c0uc',
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
