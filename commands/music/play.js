module.exports = ({
name: "play",
aliases: ['p'],
code: `$playSong[$message;5s;yes;no;Couldn't play song!]
$argsCheck[>1;Try giving me a song to play!]
$suppressErrors[An Error Occured! Try: 1. Joining a VC 2. Giving me perms 3. Contacting my owners!]
$onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:FF0000}]
$onlyBotPerms[connect;speak;No permissions!]`
})