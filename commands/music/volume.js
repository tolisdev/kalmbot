module.exports = ({
name: "volume",
aliases: ['vol'],
code: `$if[$argsCount==1]
$title[Changed Volume!]
$description[You succesfully changed the volume to $message[1]!]
$volume[$message[1]]
$color[#FF5733]
$footer[Kalm Development]
$elseIf[$argsCount==0]
$title[Volume]
$description[Volume is set to $volume!]
$color[#FF5733]
$footer[Kalm Development]
$endelseIf
$endif
$onlyIf[$message[1]<=150;The maximum volume you can set is \`150\`!]
$onlyIf[$message[1]>=1;The minimum volume you can set is \`1\`!]`
})