module.exports = ({
name: "longqueue",
aliases: ['lq'],
code: `$title[Queue]
$description[$queue[$message[1];10;{number} - {title} by <@{userID}>]]
$color[#FF5733]
$footer[Kalm Development]
$argsCheck[1;You have to use the following format: longqueue (page number)!]`
})