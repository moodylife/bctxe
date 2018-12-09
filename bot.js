client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' -bc ','.Txee'Network' ];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/n3k4a`);
    }, ms);

})
client.on('message', message => {
var prefix = "-";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
                      if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.sendMessage('radio_button Hey! || You Don't Have Perms . ')
    if (!args[1]) {
message.channel.send(** - أستعمل : -bc [الرسالة] \n يمكنك أرسال صوره مع البرودكاست 😄**);
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', ${message.guild.name})
            .addField('» المرسل : ', <@${message.author.id}>)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            m.send(${m},{embed: bc})
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
}
})
}
}
});
