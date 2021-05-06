let isPC=true;
let tabBox = document.querySelector('.tabBox');
let tab_box = document.querySelector('.tab-box');
let tabItem1 = document.querySelector('.tabItem1');
let tabItem2 = document.querySelector('.tabItem2');
let tabItem3 = document.querySelector('.tabItem3');
let H = tabBox.offsetHeight;
let W = tabBox.offsetWidth;
if(W<=980){
	isPC=false
}
tab_box.style.height=H+'px';
tabItem1.style.width=W+'px';
tabItem2.style.width=W+'px';
tabItem3.style.width=W+'px';
console.log(H,tab_box.style.height)

let rotate = document.querySelector('.rotate');
let stop = document.querySelector('.stop');
let tabDot1 = document.querySelector('.tabItem2 .tab-paly1 .tab-dot');
let tabDot2 = document.querySelector('.tabItem2 .tab-paly2 .tab-dot');
let wrapper1 = document.querySelector('.tab-paly1 .wrapper1');
let wrapper2 = document.querySelector('.tab-paly1 .wrapper2');
let wrapper3 = document.querySelector('.tab-paly1 .wrapper3');
let wrapper4 = document.querySelector('.tab-paly2 .wrapper1');
let wrapper5 = document.querySelector('.tab-paly2 .wrapper2');
let wrapper6 = document.querySelector('.tab-paly2 .wrapper3');
let goHome = document.querySelector('.goHome')
let goStart = document.querySelector('.goStart')
let boxs1 = wrapper1.children;
let boxs2 = wrapper2.children;
let boxs3 = wrapper3.children;
let boxs4 = wrapper4.children;
let boxs5 = wrapper5.children;
let boxs6 = wrapper6.children;
let isDicing1 = false,isDicing2=false,dices1=0,dices2=0;;
let scope1 = 0,scope2=0;
let scopeText={
	3:{
		title:"GOOD LUCK",
		desc:"Congratulation! Enjoy a massage from your mate.",
		color:"#FFC600"
	},
	4:{
		title:"GOOD LUCK",
		desc:"Cool! You can ask your partner to make you a breakfast.",
		color:"#FFC600"
	},
	5:{
		title:"GOOD LUCK",
		desc:"Cool! You get free time to play music for two hours.",
		color:"#FFC600"
	},
	6:{
		title:"GOOD LUCK",
		desc:"Good luck! Reward you for two hours of watching the TV.",
		color:"#FFC600"
	},
	7:{
		title:"TOUGH LUCK",
		desc:"good luck! Please organize all clothes and sort them !",
		color:"#24FF00"
	},
	8:{
		title:"TOUGH LUCK",
		desc:"Good luck! Get up and get all packages from the courier.",
		color:"#24FF00"
	},
	9:{
		title:"BAD LUCK",
		desc:"Oops! Throw away all the garbage in the room.",
		color:"#4FA5F8"
	},
	10:{
		title:"BAD LUCK",
		desc:"Oops! Go clean the floor with no dust, thanks!!!",
		color:"#4FA5F8"
	},
	11:{
		title:"BAD LUCK",
		desc:"Sorry! You gotta wash all the bowls and dishes.",
		color:"#4FA5F8"
	},
	12:{
		title:"BAD LUCK",
		desc:"Sorry! You gotta wash off all clothes and dry all of them.",
		color:"#4FA5F8"
	},
	13:{
		title:"TOUGH LUCK",
		desc:"Good luck! Walk the dog around-",
		color:"#24FF00"
	},
	14:{
		title:"TOUGH LUCK",
		desc:"Reward you for making a delicious meal or dinner.",
		color:"#24FF00"
	},
	15:{
		title:"GOOD LUCK",
		desc:"Good luck! Pick a movie and ask your mate to watch together.",
		color:"#FFC600"
	},
	16:{
		title:"GOOD LUCK",
		desc:"Nice! You will get an hour more bedtime than your partner.",
		color:"#FFC600"
	},
	17:{
		title:"GOOD LUCK",
		desc:"Well done,You can ask your partner to make you a cup of coffee.",
		color:"#FFC600"
	},
	18:{
		title:"GOOD LUCK",
		desc:"Congratulation! Assign your mate for anything today.",
		color:"#FFC600"
	}
}
let scopeS1=document.querySelector(".tab-paly1 .scope-s");
let scopeTitle1 = document.querySelector(".tab-paly1 .title");
let scopeDesc1 = document.querySelector(".tab-paly1 .scope-desc");
let scopeS2=document.querySelector(".tab-paly2 .scope-s");
let scopeTitle2 = document.querySelector(".tab-paly2 .title");
let scopeDesc2 = document.querySelector(".tab-paly2 .scope-desc");


let start1=1,start2=2,start3=3,start4=3,start5=4,start6=5;
setTimeout(()=>{
	if(isPC){
		render();
		$(".tab-box").animate({marginLeft:'-'+W+'px'})
	}else{
		// $(".tab-box").animate({marginTop:'-'+H+'px'})
	}
},3000)
if(!isPC){
	render();
}
goHome.onclick=()=>{
	scopeS1.innerHTML=scope1;
	scopeTitle1.innerHTML=scopeText[scope1].title;
	scopeTitle1.style.color=scopeText[scope1].color;
	scopeDesc1.innerHTML=scopeText[scope1].desc;
	scopeS2.innerHTML=scope2;
	scopeTitle2.innerHTML=scopeText[scope2].title;
	scopeTitle2.style.color=scopeText[scope2].color;
	scopeDesc2.innerHTML=scopeText[scope2].desc;
	if(isPC){
		$(".tab-box").animate({marginLeft:'-'+2*W+'px'})
	}else{
		$(".tab-box").animate({marginTop:'-'+1*H+'px'})
	}
}
goStart.onclick=()=>{
	dices1=0;
	dices2=0;
	goHome.style.display="none";
	if(isPC){
		$(".tab-box").animate({marginLeft:'-'+W+'px'})
	}else{
		$(".tab-box").animate({marginTop:'0px'})
	}
}
// let wrapperBox1 = document.querySelector(".tab-paly1 .wrapperBox")
// let wrapperBox2 = document.querySelector(".tab-paly2 .wrapperBox")
wrapper1.onclick=()=>{
	boxDicing1()
}
wrapper2.onclick=()=>{
	boxDicing1()
}
wrapper3.onclick=()=>{
	boxDicing1()
}
tabDot1.onclick=()=>{
	boxDicing1();
}
function boxDicing1(){
	if(isDicing1){
		return;
	}
	startRender(1);
	scope1+=dicing(wrapper1,boxs1,isDicing1);
	scope1+=dicing(wrapper2,boxs2,isDicing1);
	scope1+=dicing(wrapper3,boxs3,isDicing1);
	setTimeout(()=>{
		dices1+=1;
		if(dices1>0 && dices2>0&& !isDicing1 && !isDicing2){
			goHome.style.display="flex";
		}
	},2200)
}
wrapper4.onclick=()=>{
	boxDicing2()
}
wrapper5.onclick=()=>{
	boxDicing2()
}
wrapper6.onclick=()=>{
	boxDicing2()
}
tabDot2.onclick=()=>{
	boxDicing2();
}
function boxDicing2(){
	if(isDicing2){
		return;
	}
	startRender(2);
	scope2+=dicing(wrapper4,boxs4,isDicing2);
	scope2+=dicing(wrapper5,boxs5,isDicing2);
	scope2+=dicing(wrapper6,boxs6,isDicing2);
	setTimeout(()=>{
		dices2+=1;
		if(dices1>0 && dices2>0&& !isDicing1 && !isDicing2){
			goHome.style.display="flex";
		}
	},2200)
}

function render(){
	wrapper1.classList.remove('rotateWrapper')
	wrapper2.classList.remove('rotateWrapper')
	wrapper3.classList.remove('rotateWrapper')
	wrapper4.classList.remove('rotateWrapper')
	wrapper5.classList.remove('rotateWrapper')
	wrapper6.classList.remove('rotateWrapper')
	
	// document.querySelector('.scope').innerHTML='Score：'+(start1+start2+start3)
	for (var i = 0; i < boxs1.length; i++) {
		if(i != start1-1){
			boxs1[i].style.visibility="hidden";
		}else{
			boxs1[i].style.visibility="visible";
			boxs1[i].classList.remove('boxT'+start1)
		}
	}
	for (var i = 0; i < boxs2.length; i++) {
		if(i != start2-1){
			boxs2[i].style.visibility="hidden";
		}else{
			boxs2[i].style.visibility="visible";
			boxs2[i].classList.remove('boxT'+start2)
		}
	}
	for (var i = 0; i < boxs3.length; i++) {
		if(i != start3-1){
			boxs3[i].style.visibility="hidden";
		}else{
			boxs3[i].style.visibility="visible";
			boxs3[i].classList.remove('boxT'+start3)
		}
	}
	for (var i = 0; i < boxs4.length; i++) {
		if(i != start4-1){
			boxs4[i].style.visibility="hidden";
		}else{
			boxs4[i].style.visibility="visible";
			boxs4[i].classList.remove('boxT'+start4)
		}
	}
	for (var i = 0; i < boxs5.length; i++) {
		if(i != start5-1){
			boxs5[i].style.visibility="hidden";
		}else{
			boxs5[i].style.visibility="visible";
			boxs5[i].classList.remove('boxT'+start5)
		}
	}
	for (var i = 0; i < boxs6.length; i++) {
		if(i != start6-1){
			boxs6[i].style.visibility="hidden";
		}else{
			boxs6[i].style.visibility="visible";
			boxs6[i].classList.remove('boxT'+start6)
		}
	}
}
function startRender(type){
	if(type == 1){
		scope1=0;
		for (let i = 0; i < boxs1.length; i++) {
			boxs1[i].style.visibility="visible";
			boxs1[i].classList.add('boxT'+(i-0+1))
		}
		for (let i = 0; i < boxs2.length; i++) {
			boxs2[i].style.visibility="visible";
			boxs2[i].classList.add('boxT'+(i-0+1))
		}
		for (let i = 0; i < boxs3.length; i++) {
			boxs3[i].style.visibility="visible";
			boxs3[i].classList.add('boxT'+(i-0+1))
		}
	}else if(type == 2){
		scope2=0;
		for (let i = 0; i < boxs4.length; i++) {
			boxs4[i].style.visibility="visible";
			boxs4[i].classList.add('boxT'+(i-0+1))
		}
		for (let i = 0; i < boxs5.length; i++) {
			boxs5[i].style.visibility="visible";
			boxs5[i].classList.add('boxT'+(i-0+1))
		}
		for (let i = 0; i < boxs6.length; i++) {
			boxs6[i].style.visibility="visible";
			boxs6[i].classList.add('boxT'+(i-0+1))
		}
	}
}

function dicing(wrapper,boxs,isDicing){
	isDicing = true;
	let diceDot = Math.floor(Math.random()*6+1);
	wrapper.classList.add('rotateWrapper')
	setTimeout(()=>{
		wrapper.classList.remove('rotateWrapper');
		for (var i = 0; i < boxs.length; i++) {
			if(i != diceDot-1){
				boxs[i].style.visibility="hidden";
			}else{
				boxs[i].style.visibility="visible";
				boxs[i].classList.remove('boxT'+diceDot)
			}
		}
		isDicing = false;
	},2000)
	return diceDot
}
