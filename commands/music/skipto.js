module.exports = ({
name: "skipto",
aliases: ['st'],
code: `$skipTo[$math[$message[1]-1]]
$title[Skipped Song!]
$description[You succesfully skipped a song!]
$color[#FF5733]
$footer[Kalm Development]
$argsCheck[1;You have to use the following format: skipto (number)!]`
})