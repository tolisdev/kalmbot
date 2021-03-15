module.exports = ({
 name: "music",
 code: `$reactionCollector[$splitText[1];$authorID;1h;⏭️,🔄,⏸️,▶️,◀️;awaitMusic1,awaitMusic2,awaitMusic3,awaitMusic4,awaitMusic5;yes]
 $textSplit[$sendMessage[{color:$getVar[color]}
 {title:Music Config}{description:⏭️ - Skip
 🔄 - Loop
 ⏸️ - Pause
 ▶️ - Resumе
 ◀️ - Back};yes]
 $onlyIf[$voiceID[$authorID]!=;Sorry, but you are not connected to the voice channel.]]`
});