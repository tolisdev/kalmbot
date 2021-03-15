module.exports = ({
name: "filter",
aliases: ['filters'],
code: `$if[$message[1]==pitch]
 $sendMessage[{color:GREEN}{author:$userTag[$authorID]:$authorAvatar}{description:Song pitch set to **$message[2]**!}{footer:Requested by $userTag[$authorID]:$authorAvatar};no]

 $songFilter[pitch:$message[2]]

 $onlyIf[$message[2]<=1.9;The maximum pitch you can set is \`1.9\`!]
 $onlyIf[$message[2]>=0;The minimum pitch you can set is \`0\`!]
 $onlyIf[$isNumber[$message[2]]==true;Correct Usage: \`$getServerVar[prefix]filter pitch (0 to 1.9)\`]
 $argsCheck[2;Correct Usage: \`$getServerVar[prefix]filter pitch (Value)\`]
 $elseIf[$message[1]==speed]
 $sendMessage[{color:GREEN}{author:$userTag[$authorID]:$authorAvatar}{description:Song speed set to **$message[2]**!}{footer:Requested by $userTag[$authorID]:$authorAvatar};no]

 $songFilter[speed:$message[2]]

 $onlyIf[$message[2]<=1.9;The maximum speed you can set is \`1.9\`!]
 $onlyIf[$message[2]>=0;The minimum speed you can set is \`0\`!]
 $onlyIf[$isNumber[$message[2]]==true;Correct Usage: \`$getServerVar[prefix]filter speed (0 to 1.9)\`]
 $argsCheck[2;Correct Usage: \`$getServerVar[prefix]filter speed (Value)\`]
 $endelseIf
$elseIf[$message[1]==reset]
$songFilter[pitch:0;bass:0;echo:0;speed:0;vibrato:0;pulsator:0;contrast:0;gate:0;flanger:0;phaser:0;surround:0;earwax:0]
$endelseIf
 $elseIf[$message[1]==bass]
 $sendMessage[{color:GREEN}{author:$userTag[$authorID]:$authorAvatar}{description:Song bass set to **$message[2]**!}{footer:Requested by $userTag[$authorID]:$authorAvatar};no]

 $songFilter[bass:$message[2]]

 $onlyIf[$message[2]<=20;The maximum bass you can set is \`20\`!]
 $onlyIf[$message[2]>=-20;The minimum bass you can set is \`-20\`!]
 $onlyIf[$isNumber[$message[2]]==true;Correct Usage: \`$getServerVar[prefix]filter bass (-20 to 20)\`]
 $argsCheck[2;Correct Usage: \`$getServerVar[prefix]filter bass (Value)\`]
 $endelseIf
$elseIf[$message[1]==pulsator]
 $sendMessage[{color:GREEN}{author:$userTag[$authorID]:$authorAvatar}{description:Song pulsator set to **$message[2]**!}{footer:Requested by $userTag[$authorID]:$authorAvatar};no]

 $songFilter[pulsator:$message[2]]

 $onlyIf[$message[2]<=99.9;The maximum pulsator you can set is \`99.9\`!]
 $onlyIf[$message[2]>=0;The minimum pulsator you can set is \`0\`!]
 $onlyIf[$isNumber[$message[2]]==true;Correct Usage: \`$getServerVar[prefix]filter pulsator (0 to 99.9)\`]
 $argsCheck[2;Correct Usage: \`$getServerVar[prefix]filter pulsator (Value)\`]
 $endelseIf
 $elseIf[$message[1]==contrast]
 $sendMessage[{color:GREEN}{author:$userTag[$authorID]:$authorAvatar}{description:Song contrast set to **$message[2]**!}{footer:Requested by $userTag[$authorID]:$authorAvatar};no]

 $songFilter[contrast:$message[2]]

 $onlyIf[$message[2]<=99.9;The maximum contrast you can set is \`99.9\`!]
 $onlyIf[$message[2]>=0;The minimum contrast you can set is \`0\`!]
 $onlyIf[$isNumber[$message[2]]==true;Correct Usage: \`$getServerVar[prefix]filter contrast (0 to 99.9)\`]
 $argsCheck[2;Correct Usage: \`$getServerVar[prefix]filter contrast (Value)\`]
 $endelseIf
 $elseIf[$message[1]==echo]
 $sendMessage[{color:GREEN}{author:$userTag[$authorID]:$authorAvatar}{description:Song echo set **$message[2]**!}{footer:Requested by $userTag[$authorID]:$authorAvatar};no]

 $songFilter[echo:$message[2]]

 $onlyIf[$checkContains[$message[2];on;off]==true;Correct Usage: \`$getServerVar[prefix]filter echo (On/Off)\`]
 $argsCheck[2;Correct Usage: \`$getServerVar[prefix]filter echo (On/Off)\`]
 $endelseIf
$elseIf[$message[1]==gate]
 $sendMessage[{color:GREEN}{author:$userTag[$authorID]:$authorAvatar}{description:Song gate set **$message[2]**!}{footer:Requested by $userTag[$authorID]:$authorAvatar};no]

 $songFilter[gate:$message[2]]

 $onlyIf[$checkContains[$message[2];on;off]==true;Correct Usage: \`$getServerVar[prefix]filter gate (On/Off)\`]
 $argsCheck[2;Correct Usage: \`$getServerVar[prefix]filter gate (On/Off)\`]
 $endelseIf
 $elseIf[$message[1]==flanger]
 $sendMessage[{color:GREEN}{author:$userTag[$authorID]:$authorAvatar}{description:Song gate set **$message[2]**!}{footer:Requested by $userTag[$authorID]:$authorAvatar};no]

 $songFilter[flanger:$message[2]]

 $onlyIf[$checkContains[$message[2];on;off]==true;Correct Usage: \`$getServerVar[prefix]filter flanger (On/Off)\`]
 $argsCheck[2;Correct Usage: \`$getServerVar[prefix]filter flanger (On/Off)\`]
 $endelseIf
 $elseIf[$message[1]==phaser]
 $sendMessage[{color:GREEN}{author:$userTag[$authorID]:$authorAvatar}{description:Song phaser set **$message[2]**!}{footer:Requested by $userTag[$authorID]:$authorAvatar};no]

 $songFilter[phaser:$message[2]]

 $onlyIf[$checkContains[$message[2];on;off]==true;Correct Usage: \`$getServerVar[prefix]filter phaser (On/Off)\`]
 $argsCheck[2;Correct Usage: \`$getServerVar[prefix]filter phaser (On/Off)\`]
 $endelseIf
 $elseIf[$message[1]==surround]
 $sendMessage[{color:GREEN}{author:$userTag[$authorID]:$authorAvatar}{description:Song surround (8D) set **$message[2]**!}{footer:Requested by $userTag[$authorID]:$authorAvatar};no]

 $songFilter[surround:$message[2]]

 $onlyIf[$checkContains[$message[2];on;off]==true;Correct Usage: \`$getServerVar[prefix]filter surround (On/Off)\`]
 $argsCheck[2;Correct Usage: \`$getServerVar[prefix]filter surround (On/Off)\`]
 $endelseIf
$elseIf[$message[1]==earwax]
 $sendMessage[{color:GREEN}{author:$userTag[$authorID]:$authorAvatar}{description:Song earwax set **$message[2]**!}{footer:Requested by $userTag[$authorID]:$authorAvatar};no]

 $songFilter[earwax:$message[2]]

 $onlyIf[$checkContains[$message[2];on;off]==true;Correct Usage: \`$getServerVar[prefix]filter earwax (On/Off)\`]
 $argsCheck[2;Correct Usage: \`$getServerVar[prefix]filter earwax (On/Off)\`]
 $endelseIf
 $endif

 $cooldown[3s;You're on cooldown! Please wait %time%.]

 $onlyIf[$checkContains[$message[1];reset;pitch;bass;echo;speed;pulsator;contrast;gate;flanger;phaser;surround;earwax]==true;That is not a valid type!]
 $onlyIf[$queueLength>0;You don't have anything in the queue!]
 $argsCheck[>1;{title: Available filters} {description: k.filter  [pitch, bass, echo, speed, vibrato, pulsator, contrast, gate, flanger, phaser, surround, earwax,reset\\]}]
 $suppressErrors[{color:FF0000}{title:Something went wrong...}{description:If you see this, something probably went wrong.}]
 `
})