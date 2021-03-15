module.exports = ({
name: "nowplaying",
aliases: ['np'],
code: `$title[Now playing!]
$description[$songInfo[url]]
$thumbnail[$songInfo[thumbnail]]
$addField[Created By;$songInfo[publisher];yes]
$addField[Added by;<@$songInfo[userID]>;yes]
$addField[Duration;$songInfo[duration];yes]
$addField[Title;$songInfo[title];yes]
$color[#FF5733]
$footer[Kalm Development]`
})