
/* globals require */
// console.log("Hello, Airtable");


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
// console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyj7RMo1jrIjBKGu" }).base(
  "appyU6UrGpIRaSrPs"
);

//get the "colors" table from the base, select ALL the records, and specify the functions that will receive the data
base("color").select({}).eachPage(gotPageOfcolors, gotAllcolors);

// an empty array to hold our color data
const colors = [];

// callback function that receives our data
function gotPageOfcolors(records, fetchNextPage) {
  console.log("gotPageOfcolors()");
  // add the records from this page to our colors array
  colors.push(...records);
  console.log(records)
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllcolors(err) {
  console.log("gotAllcolors()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading color");
    console.error(err);
    return;
  }

  // call function to show the colors
  showcolors();
}

/////////////////////////////////////////////////////////////////////////////////
var colordata = [];

let choosecolor = [];





function showcolors() {
  console.log("showcolors()");
  colors.forEach((color) => {
    colordata = [...colordata, color.fields];    
  });
  console.log(colordata)
}


setTimeout(() => {
  document.querySelectorAll('.ball').forEach((ele) => {
    ele.classList.remove("box")
  })
}, (3000));

document.querySelector('#page2 .btnleft').addEventListener('click', function () {
  document.querySelector('#page2').style.display = 'none';
  document.querySelector('#index').style.display = 'block';
  console.log(choosecolor)
  choosecolor = [];
  document.querySelector('#color-detail').innerHTML = '';
})

document.querySelector('#page3 .btnleft').addEventListener('click', function () {
  document.querySelector('#page3').style.display = 'none';
  document.querySelector('#page2').style.display = 'block';
})

function page3(uid, i) {
  document.querySelector('#page2').style.display = 'none';
  document.querySelector('#page3').style.display = 'block';
  var html = '<img class="png" src="./images/b' + i + '.png" alt="">'
  if (i == 9) {
    document.querySelector('#page3 .btnleft').innerHTML = '——'
  } else {
    document.querySelector('#page3 .btnleft').innerHTML = html
  }
  document.querySelector('#page3 .ballbox img').setAttribute('src', choosecolor[uid].color[0].url);
  console.log(choosecolor[uid])
  document.querySelector('.colors').innerHTML = choosecolor[uid].rgb;
  document.querySelector('#page3 .btnball').style.backgroundColor = choosecolor[uid].hex;
  document.querySelector('#page3 .name').innerHTML = choosecolor[uid].name;
  document.querySelector('#page3 .company').innerHTML = choosecolor[uid].company;
  document.querySelector('#page3 .hex').innerHTML = choosecolor[uid].hex;
}



function page2(color, uid) {
  document.querySelector('#index').style.display = 'none'
  document.querySelector('#page2').style.display = 'block'
  var html = '<img class="png" src="./images/b' + uid + '.png" alt="">'
  if (uid == 9) {
    document.querySelector('#page2 .btnleft').innerHTML = '——'
  } else {
    document.querySelector('#page2 .btnleft').innerHTML = html
  }
  
  colordata.forEach((ele) => {
    
    if (ele.color_series[0] == color) {
      choosecolor.push(ele)
    }
  })
  console.log(choosecolor)

  const colorDetail = document.getElementById("color-detail");
  for (var i = 0; i < choosecolor.length; i++) {
    var colorContainer = document.createElement("a");
    colorContainer.classList.add("centerbox");
    var width = getRandom(5, 15, fixed = 0) + 'vw';
    var opacity = getRandom(0.5, 1, fixed = 1);
    var left = getRandom(10, 90, fixed = 0) + 'vw';
    var tops = getRandom(10, 90, fixed = 0) + 'vh';
    colorContainer.style.width = width;
    colorContainer.style.height = width;
    colorContainer.style.opacity = opacity;
    colorContainer.style.left = left;
    colorContainer.style.top = tops;
    colorContainer.setAttribute("href", "javascript:;")
    colorContainer.setAttribute("onclick", "page3(" + i + ',' + uid + ")")
    
    colorContainer.style.backgroundColor = choosecolor[i].hex;

    colorDetail.append(colorContainer);

  }
  
  function getRandom(start, end, fixed = 0) {
    let differ = end - start
    let random = Math.random()
    return (start + differ * random).toFixed(fixed)
  }
}


