
const Discord = require('discord.js');
var request = require('request').defaults({
		encoding: null
	});
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
	
	if (message.content.startsWith("API go!")){
	request.get(http://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=PRCP&locationid=ZIP:33309&startdate=2018-05-01&enddate=2018-05-23, {Token: 'EVsHKopYoOqeGEVaQXQszifvBJEAfbSg'}, function(err, res, body){
		    console.log(JSON.parse(body.toString()));
		    });
	}
		
	}
		
	});

	client.login(process.env.BOT_TOKEN);
