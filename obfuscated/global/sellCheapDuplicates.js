/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{var s,e=document.createElement("iframe");document.body.append(e),window.confirm=e.contentWindow.confirm.bind(window),window.console.log=e.contentWindow.console.log.bind(window),e.style.display="none",(await Object.values(webpackJsonp.push([[],{"":(e,o,t)=>{o.cache=t.c}},[[""]]]).cache).find(e=>e.exports?.a?.get).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host+"/api/games":"play.blooket.com/api/gamequestionsets")+"?gameId=6368436a976422d8a3f70cd7").then(e=>parseInt("0"+e.data.questions.find(e=>"../cheats/global/sellCheapDuplicates.js"==e.question)?.answers?.[0]))<1678659466105||confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats"))&&(console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#5394","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tsellCheapDuplicates.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem",""),e=document.createElement("iframe"),document.body.append(e),window.alert=e.contentWindow.alert.bind(window),window.confirm=e.contentWindow.confirm.bind(window),e.remove(),(s=Object.values(webpackJsonp.push([[],{"":(e,o,t)=>{o.cache=t.c}},[[""]]]).cache).find(e=>e.exports?.a?.get).exports.a).get("https://dashboard.blooket.com/api/users").then(async({data:{name:e,unlocks:o}})=>{o=Object.entries(o).filter(([e,o])=>1<o&&!["Legendary","Chroma","Mystical"].includes(webpackJsonp.push([[],{[1234]:(e,o,t)=>{o.webpack=t}},[["1234"]]]).webpack("MDrD").a[e].rarity));if(confirm("Are you sure you want to sell your uncommon to epic dupes?")){var t,a,n=Date.now();for([t,a]of o)await s.put("https://dashboard.blooket.com/api/users/sellblook",{name:e,blook:t,numSold:a-1});alert(`(${Date.now()-n}ms) Results:
`+o.map(([e,o])=>`    ${e} `+(o-1)).join(`
`))}}).catch(()=>alert("There was an error user data!")))})();