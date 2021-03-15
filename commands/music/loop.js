module.exports = ({
 name: "loop",
 code: `$reactionCollector[$splitText[1];$authorID;1h;1️⃣,🔁;awaitLoop1,awaitLoop2;yes]
 $textSplit[$sendMessage[{color:$getVar[color]}
 {title:Music Config} {description:1️⃣ - Loops The Current Song
 🔄 - Loops the whole queue;yes}]
 $onlyIf[$voiceID[$authorID]!=;Sorry, but you are not connected to the voice channel.]]`
});