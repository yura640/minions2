var myArr=[{id:0,title:"Amazed",image:"Minion-Amazed-icon.png",count:0},{id:1,title:"Cake",image:"Minion-Cake-icon.png",count:0},{id:2,title:"Bananas",image:"Minion-Bananas-icon.png",count:0},{id:3,title:"Curious",image:"Minion-Curious-icon.png",count:0},{id:4,title:"Dancing",image:"Minion-Dancing-icon.png",count:0},{id:5,title:"Evil-3",image:"Minion-Evil-3-icon.png",count:0},{id:6,title:"Fruits",image:"Minion-Fruits-icon.png",count:0},{id:7,title:"Girl",image:"Minion-Girl-icon.png",count:0},{id:8,title:"Evil",image:"Minion-Evil-icon.png",count:0},{id:9,title:"Happy",image:"Minion-Happy-icon.png",count:0},{id:10,title:"Hello",image:"Minion-Hello-icon.png",count:0},{id:11,title:"Kungfu",image:"Minion-Kungfu-icon.png",count:0},{id:12,title:"Maid",image:"Minion-Maid-icon.png",count:0},{id:13,title:"Playing-Golf",image:"Minion-Playing-Golf-icon.png",count:0},{id:14,title:"Reading",image:"Minion-Reading-icon.png",count:0},{id:15,title:"Shout",image:"Minion-Shout-icon.png",count:0}];define("data",function(){}),define("app",["data","jquery"],function(i,n){for(var e=0;e<myArr.length;e++){var t,o=localStorage,a=o.getItem(myArr[e].id);t=null==a?0:a,$liElem=n("<li/>",{id:myArr[e].id,"class":"item"}),$imgElem=n("<img/>",{src:"./images/"+myArr[e].image}),$spanElem=n("<span/>",{"class":"counter",text:Number(t)}),$liElem.append($imgElem,$spanElem),n(".gallery").append($liElem)}}),require.config({paths:{jquery:"../lib/jquery/dist/jquery.min"}}),require(["jquery","app"],function(i,n){i(".gallery").click(function(){var i=event.target.parentNode,n=i.querySelector("span");n.innerText=Number(n.innerText)+1,localStorage.setItem(i.id,n.innerText)})}),define("main",function(){});