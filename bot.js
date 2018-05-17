
const Discord = require('discord.js');
const client = new Discord.Client();
const {
	Client
} = require('pg');

const herokupg = new Client({
		connectionString: 'postgres://zagxxzmhzwvqlf:a107491b969c9fd1f44b023e4f95d7bcb5875d14129af0d1539b86d4931762b3@ec2-54-235-132-202.compute-1.amazonaws.com:5432/d59vopnhopjluj',
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
