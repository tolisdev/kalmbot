const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "NzcwNjY3Mjk5Njk0NTc1NjQ3.X5g52g.aw7OUFiHgGeQE9XyU0ez5Cj-fYk", 
prefix: ">" 
})

bot.variables({
    prefix: ">"
  })
 
bot.onMessage()

const fs = require('fs')

const fork = fs.readdirSync('./commands/')
for(const folder of fork){
 const fork = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))
 for(const code of fork){
 const command = require(`./commands/${folder}/${code}`)

 let cmd = {
 name: command.name,
 nonPrefixed: command.nonPrefixed,
 channel: command.channel,
 type: command.type,
 aliases: command.aliases, 
 desc: command.desc,
 cat: command.cat,
 sub: command.sub,
 usage: command.usage,
 example: command.example,
 code: command.code
 };

 if(!cmd.type){
 bot.command(cmd)
 cmd.type = "dbd" 
 }
 else{
 if (cmd.type == 'dbd') {
 bot.command(cmd);
 } 
 else if (cmd.type == 'awaited') {
 bot.awaitedCommand(cmd);
 } 
 else if (cmd.type == 'update') {
 bot.updateCommand(cmd);
 }
 else if (cmd.type == 'delete') {
 bot.deletedCommand(cmd);
 }
 else if (cmd.type == 'join') {
 bot.joinCommand(cmd);
 }
 else if (cmd.type == 'leave') {
 bot.leaveCommand(cmd);
 }
 else if (cmd.type == 'guildJoin') {
 bot.botJoinCommand(cmd);
 }
 else if (cmd.type == 'guildLeave') {
 bot.botLeaveCommand(cmd)
 }
 else if (cmd.type == 'banAdd') {
 bot.banAddCommand(cmd)
 }
 else if (cmd.type == 'banRemove') {
 bot.banRemoveCommand(cmd)
 }
  else if (cmd.type == 'chanCreate') {
 bot.channelCreateCommand(cmd)
 }
 else if (cmd.type == 'chanDelete') {
 bot.channelDeleteCommand(cmd)
 }
 else if (cmd.type == 'chanUpdate') {
 bot.channelUpdateCommand(cmd)
 }
 else if (cmd.type == 'invCreate') {
 bot.inviteCreateCommand(cmd)
 }
 else if (cmd.type == 'invDelete') {
 bot.inviteDeleteCommand(cmd)
 }
 else if (cmd.type == 'presence') {
 bot.presenceUpdateCommand(cmd)
 }
 else if (cmd.type == 'reactionAdd') {
 bot.reactionAddCommand(cmd)
 }
 else if (cmd.type == 'reactionRemove') {
 bot.reactionRemoveCommand(cmd)
 }
 else if (cmd.type == 'roleCreate') {
 bot.roleCreateCommand(cmd)
 }
 else if (cmd.type == 'roleDelete') {
 bot.roleDeleteCommand(cmd)
 }
 else if (cmd.type == 'roleUpdate') {
 bot.roleUpdateCommand(cmd)
 }
 else if (cmd.type == 'typing') {
 bot.typingStartCommand(cmd)
 }
 else if (cmd.type == 'userUpdate') {
 bot.userUpdateCommand(cmd)
 }
 else if (cmd.type == 'ready') {
 bot.readyCommand(cmd);
 }
 else if (cmd.type == 'musicStart') {
 bot.musicStartCommand(cmd);
 }
 else if (cmd.type == 'musicEnd') {
 bot.musicEndCommand(cmd);
 }
 else if (cmd.type == 'interaction') {
 bot.interactionCommand(cmd);
 }
 else if (cmd.type == 'timeout') {
 bot.timeoutCommand(cmd);
 }
 }
 }
}