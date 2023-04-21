"use strict";

var users = [];

if (location.pathname == "/index.html") {
  var loader = function loader() {
    setTimeout(function () {
      load.style.display = 'none';
    }, 3000);
  };

  var getName = function getName(value) {
    var str = "";
    var userName = nickName.value;
    str = userName;
    console.log(str);
    users.push(str);
    console.log(users);
  };

  //loader
  var load = document.querySelector('.loader');
  loader();
  var nickName = document.querySelector("#nickName");
  var addUser = document.querySelector("#addUser");
  addUser.addEventListener("click", getName);
} //swiper


if (location.pathname == "/courseDetail.html") {
  var swiper = new Swiper(".courseSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    // slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}

if (location.pathname == "/record.html") {
  var chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [['已完成', 11], ['未完成', 9]],
      colors: {
        已完成: '#DD4C57',
        未完成: '#EB9C37'
      },
      type: 'donut',
      onclick: function onclick(d, i) {
        console.log("onclick", d, i);
      },
      onmouseover: function onmouseover(d, i) {
        console.log("onmouseover", d, i);
      },
      onmouseout: function onmouseout(d, i) {
        console.log("onmouseout", d, i);
      }
    },
    donut: {
      title: "積分數：11/20"
    }
  });
  setTimeout(function () {
    chart.load({
      columns: [["已完成", 11], ["未完成", 9]]
    });
  }, 2500);
  var chart2 = c3.generate({
    bindto: "#chart2",
    data: {
      columns: [['已完成', 91], ['剩餘關卡', 9]],
      colors: {
        已完成: "#03A9F4",
        剩餘關卡: "#76FF03"
      },
      type: 'donut',
      onclick: function onclick(d, i) {
        console.log("onclick", d, i);
      },
      onmouseover: function onmouseover(d, i) {
        console.log("onmouseover", d, i);
      },
      onmouseout: function onmouseout(d, i) {
        console.log("onmouseout", d, i);
      }
    },
    donut: {
      title: "完成比例：91%"
    }
  });
  setTimeout(function () {
    chart2.load({
      columns: [["已完成", 91], ["剩餘關卡", 9]]
    });
  }, 1500);
  var chart3 = c3.generate({
    bindto: "#chart3",
    data: {
      x: 'x',
      columns: [['x', '2022-09-01', '2022-09-02', '2022-09-03', '2022-09-04', '2022-09-05', '2022-09-06', '2022-09-07'], ['已完成', 3, 5, 6, 7, 9, 11], ['剩餘關卡', 30, 27, 24, 22, 19, 19]]
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d'
        }
      }
    }
  });
  setTimeout(function () {
    chart3.load({
      columns: [["獲得積分數", 12, 13, 15, 17, 19, 21]]
    });
  }, 1500);
}

console.log('all end');
// var chart = c3.generate({
//     bindto: "#chart",
//     data: {
//         columns: [
//             ['已完成', 11],
//             ['未完成', 9],
//         ],
//         colors: {
//           已完成: '#DD4C57',
//           未完成: '#EB9C37',
//         },
//         type : 'donut',
//         onclick: function (d, i) { console.log("onclick", d, i); },
//         onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//         onmouseout: function (d, i) { console.log("onmouseout", d, i); }
//     },
//     donut: {
//         title: "積分數：11/20"
//     }
//   });
//   setTimeout(function () {
//     chart.load({
//         columns: [
//             ["已完成", 11],
//             ["未完成", 9],
//         ]
//     });
//   }, 2500);
//   var chart2 = c3.generate({
//     bindto: "#chart2",
//     data: {
//         columns: [
//             ['已完成', 91],
//             ['剩餘關卡', 9],
//         ],
//         colors: {
//           已完成: "#03A9F4",
//           剩餘關卡: "#76FF03",
//         },
//         type : 'donut',
//         onclick: function (d, i) { console.log("onclick", d, i); },
//         onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//         onmouseout: function (d, i) { console.log("onmouseout", d, i); }
//     },
//     donut: {
//         title: "完成比例：91%"
//     }
//   });
//   setTimeout(function () {
//     chart2.load({
//         columns: [
//             ["已完成", 91],
//             ["剩餘關卡", 9],
//         ]
//     });
//   }, 1500);
//   var chart3 = c3.generate({
//     bindto: "#chart3",
//     data: {
//       x: 'x',
//       columns: [
//           ['x', '2022-09-01', '2022-09-02', '2022-09-03', '2022-09-04', '2022-09-05', '2022-09-06', '2022-09-07'],
//           ['已完成', 3, 5, 6, 7, 9, 11 ],
//           ['剩餘關卡', 30, 27, 24, 22, 19, 19]
//       ]
//   },
//   axis: {
//       x: {
//           type: 'timeseries',
//           tick: {
//               format: '%Y-%m-%d'
//           }
//       }
//   }
//   });
//   setTimeout(function () {
//     chart3.load({
//         columns: [
//             ["獲得積分數", 12,13,15,17,19,21],
//         ]
//     });
//   }, 1500);
"use strict";
"use strict";

var load = document.querySelector('.loader');

function loader() {
  setTimeout(function () {
    load.style.display = 'none';
  }, 3000);
}

loader();
"use strict";

console.log("mirror start");

if (location.pathname == "/courseDetail.html") {
  current_lesson = 0;
} else if (location.pathname == "/courseDetail-mid.html") {
  current_lesson = 6;
} else {
  current_lesson = 9;
}

var lessons = [{
  title: "lesson 1",
  description: "線段",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \nvar ctx = canvas.getContext('2d');\n      \nctx.fillStyle = '#333';\n      \nctx.fillRect(0, 0, canvas.width, canvas.height);\n      // \nctx.clearRect(0,0,canvas.width,canvas.height);\n      //\nctx.moveTo(10,10);\n      //\nctx.lineTo(150,50);\n      //\nctx.stroke();\n      ",
  instruction: "// \u756B\u7DDA\u6BB5\uFF0C\u5F9E\u539F\u9EDE\u5230(50,50)\n      ",
  signature: {
    imageDiff: 100,
    totalPixels: 4708
  }
}, {
  title: "lesson 2",
  description: "矩形",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \nvar ctx = canvas.getContext('2d');\n      \nctx.clearRect(0,0,canvas.width,canvas.height);\n      \nctx.fillRect(10, 10, 50, 50);\n      ",
  instruction: "//  \u756B\u77E9\u5F62\uFF0C\u539F\u9EDE (10,10) \u9577\u3001\u5BEC 50 \n      ",
  signature: {
    imageDiff: 0,
    totalPixels: 4708
  }
}, {
  title: "lesson 3",
  description: "三角形",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \nvar ctx = canvas.getContext('2d');\n      \nctx.clearRect(0,0,canvas.width,canvas.height);\n      \nctx.beginPath();\n      \nctx.moveTo(100,50);\n      \nctx.lineTo(60,90);\n      \nctx.lineTo(140,90);\n      \nctx.closePath();\n      \nctx.stroke();\n      ",
  instruction: "//  \u756B\u4E09\u89D2\u5F62\uFF0C\u4E09\u9EDE\u5206\u5225\u70BA(100,50)\u3001(60,90)\u3001(140,90)\n      ",
  signature: {
    imageDiff: 0,
    totalPixels: 4708
  }
}, {
  title: "lesson 4",
  description: "圓形",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n ctx.beginPath();\n      \n ctx.arc(100, 75, 50, 0, 2 * Math.PI);\n      \n ctx.stroke();\n      ",
  instruction: "//   \u5283\u4E00\u500B\u7121\u586B\u6EFF\u5713\uFF0C\u4E2D\u5FC3\u9EDE(100,75)\u534A\u5F9150\n      ",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  }
}, {
  title: "lesson 5",
  description: "弧形",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n ctx.beginPath();\n      \n ctx.arc(100, 60, 50, Math.PI/2*3, Math.PI/2);\n      \n ctx.stroke();\n      ",
  instruction: "//   \u756B\u8D77\u59CB\u89D2270\u5EA6\u3001\u7D50\u675F\u89D290\u5EA6\u5F27\u578B\uFF0C\u4E2D\u5FC3\u9EDE(100,60)\u534A\u5F9150\n      ",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  }
}, {
  title: "lesson 6",
  description: "用函數畫圖",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n function drawCircle(x,y,r){\n      \n ctx.beginPath();\n      \n ctx.arc(x,y,r,0,2*Math.PI);\n      \n ctx.stroke();\n      \n}\n      \n drawCircle(100,100,50);\n      ",
  instruction: "//   \u65B0\u589E\u756B\u5713\u51FD\u6578\u4E26\u57F7\u884C\uFF0C\u4E2D\u5FC3\u9EDE(100,100)\u534A\u5F9150\n      ",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  }
}, {
  title: "lesson 7",
  description: "使用函數重複執行",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n function drawCircle(x,y,r){\n      \n ctx.beginPath();\n      \n ctx.arc(x,y,r,0,2*Math.PI);\n      \n ctx.stroke();\n      \n}\n      \n drawCircle(100,100,50);\n      \n drawCircle(50,100,50);\n      \n drawCircle(150,100,50);\n      ",
  instruction: "//   \u65B0\u589E\u756B\u5713\u51FD\u6578\u4E26\u57F7\u884C\n//\u4E2D\u5FC3\u9EDE\u5206\u5225\u70BA(100,100)\u3001(50,100)\u3001(150,100)\u534A\u5F9150\n      ",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  }
}, {
  title: "lesson 8",
  description: "多次執行",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n function drawCircle(x,y,r){\n      \n ctx.beginPath();\n      \n ctx.arc(x,y,r,0,2*Math.PI);\n      \n ctx.stroke();\n      if (r > 2) { // condition for drawing similarity\n        drawCircle(x + r, y, r / 2);\n        drawCircle(x - r, y, r / 2);\n        }\n      \n}\n      \n drawCircle(100,100,50);\n      ",
  instruction: "//\u52A0\u5165\u689D\u4EF6\u5F0F\u8B93\u51FD\u6578\u57F7\u884C\u591A\u6B21\uFF0C\u5C0D\u7A31\u5716\u65B9\u5F0F\u5982\u4E0B:\n    // if (r > 2) { \n//drawCircle(x + r, y, r / 2);\n//drawCircle(x - r, y, r / 2);\n//}",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  }
}, {
  title: "lesson 9",
  description: "遞迴樹",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n canvas.width = window.innerWidth; // \u756B\u5E03\u5BEC = \u8996\u7A97\u5167\u7684\u5BEC\n      \n canvas.height = window.innerHeight; // \u756B\u5E03\u9AD8 = \u8996\u7A97\u5167\u7684\u9AD8\n      \n ctx.fillStyle = '#fff5a5';\n      \n ctx.fillRect(0, 0, canvas.width, canvas.height);\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n function draw(startX, startY, len, angle) {\n      \n  ctx.beginPath();\n      \n  ctx.save();\n        \n        //\u4E2D\u9593\u6A39\u5E79\n      \n  ctx.translate(startX, startY);\n      \n  ctx.rotate(angle * Math.PI/180);\n      \n  ctx.moveTo(0, 0);\n      \n  ctx.lineTo(0, -len);\n      \n  ctx.stroke();\n\n      \n  if(len < 10) {\n        \n      ctx.restore();\n        \n   return;\n        \n  }\n        \n  draw(0, -len, len*0.8, -15);//\u5DE6\u908A\u5206\u4E4B\n        \ndraw(0, -len, len*0.8, +15);//\u53F3\u908A\u5206\u652F\n        \nctx.restore();//\u6062\u5FA9\u9810\u8A2D\u503C\uFF0C\u5206\u652F\u624D\u6703\u5F9E\u4E2D\u9593\u6A39\u5E79\u9802\u9EDE\u958B\u59CB\u751F\u9577\n        \n}\n        \ndraw(300, 250, 50, 0)   \n      ",
  instruction: "//\u7E6A\u88FD\u905E\u8FF4\u6A39\u521D\u59CB\u9EDE(300,250)\u3001\u521D\u59CB\u6A39\u679D\u9577\u5EA650\n//\u89D2\u5EA60\u5EA6\u958B\u59CB\u751F\u9577\uFF0C\u905E\u8FF4\u689D\u4EF6\u9650\u5236\u65BC\u9577\u5EA6\u5C0F\u65BC10\u505C\u6B62\n",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  }
}]; //編輯器樣式

var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: "true" //   // lineWrapping: true,
  //   // styleActiveLine: true,
  //   // matchBrackets: true,
  //   // autoCloseBrackets: true,
  //   // autoCloseTags: true,
  //   // theme:'dracula',
  //   // mode: "htmlmixed",

}); //執行按鈕

var run = document.querySelector("#run");
var code = editor.getValue();
var canvasPrepare = "var canvas = document.getElementById('fractal');\n\n canvas.setAttribute('width',innerWidth);\n\n canvas.setAttribute('height',innerHeight);\n\n var ctx =  canvas.getContext('2d');"; //執行按鈕點擊觸發

run.addEventListener("onload", function () {
  // resizeCanvas();
  var htmlCode = "<canvas id='fractal'></canvas>";
  var jsCode = "<scri" + "pt>" + canvasPrepare + editor.getValue() + "</scri" + "pt>";
  var doc = document.querySelector("#iview").contentWindow.document;
  doc.open();
  doc.write(htmlCode + jsCode);
  previewWindow.close();
}); //改變canvas大小,撐滿空間

function resizeCanvas() {
  var width = document.querySelector(".view").clientWidth;
  var height = document.querySelector(".view").clientHeight;
  document.querySelector("#iview").setAttribute("height", "".concat(height));
  document.querySelector("#iview").setAttribute("width", "".concat(width)); // document.querySelector("#iview").setAttribute("overflow", "hidden");
}

var images; // images for comparison

var doc; // user source code

var width; // width of editor

var height; // height of editor

var canvasCode; // declaring canvas

var current_lesson;
var instruction;
var code2Learn; // the code lesson

var destinationCode; // used to compare user source code

var sourceCode; // user source code
// var code;

var preview; // flag for preview

var verification = "\n \n    image2 = ctx.getImageData(0,0,canvas.width,canvas.height);\n    totalPixels = 0;\n    imageDiff = 0;\n    for (let i=0; i<image1.data.length;i++){\n        if(image1.data[i]!=0) totalPixels++; \n        if(image1.data[i]!=image2.data[i]) imageDiff ++;\n    }\n    console.log(\"totalPixels\", totalPixels);\n    console.log(\"imageDiff\", imageDiff);\n    localStorage.setItem(\"totalPixels\", totalPixels);                                         \n    localStorage.setItem(\"imageDiff\", imageDiff);\n";
var clearScreen = "ctx.clearRect(0,0,canvas.width,canvas.height);";
var showSample = "ctx.clearRect(0,0,canvas.width,canvas.height);\n  ctx.putImageData(image1,0,0);";
init();

function init() {
  images = "\n    \n var image1 = ctx.getImageData(0, 0, canvas.width,canvas.height);\n    \n var image2;  \n    \n var image3 = ctx.createImageData(canvas.width,canvas.height);\n    \n var totalPixels = 0;\n    \n var imageDiff = 0\n    ";
  doc = document.getElementById("iview").contentWindow.document;
  width = document.getElementById("iview").clientWidth;
  height = document.getElementById("iview").clientHeight;
  canvasCode = "<canvas id=\"fractal\"></canvas> \n";
  getSignatures();
  /* start to learn */

  current_lesson;
  code2Learn = lessons[current_lesson].code2Learn;
  instruction = lessons[current_lesson].instruction;
  destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  editor.setValue(instruction); // write original code  (code to learn )to produce image 1

  doc.open();
  doc.write(destinationCode); // open until user done editing
  // preview=true;   // flag to quick response user coding
  // correct = 0;    // the number of correct coding
}

function getSignatures() {
  for (var i = 0; i < lessons.length; i++) {
    code2Learn = lessons[i].code2Learn;
    destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + images + clearScreen + code2Learn + verification + "\n</scri" + "pt>";
    doc.open();
    doc.write(destinationCode);
    doc.close();
    lessons[i].signature.imageDiff = parseInt(localStorage.getItem("imageDiff"));
    lessons[i].signature.totalPixels = parseInt(localStorage.getItem("totalPixels"));
    console.log(destinationCode);
  }
}

function check() {
  doc.write("<scri" + "pt>" + clearScreen + editor.getValue() + verification + "\n</scri" + "pt>");
  var imageDiff = parseInt(localStorage.getItem("imageDiff"));
  var totalPixels = parseInt(localStorage.getItem("totalPixels"));
  var distanceSquare = (imageDiff - lessons[current_lesson].signature.imageDiff) * (imageDiff - lessons[current_lesson].signature.imageDiff) + (totalPixels - lessons[current_lesson].signature.totalPixels) * (totalPixels - lessons[current_lesson].signature.totalPixels); //alert(`imageDiff:${lessons[current_lesson].signature.imageDiff}`);
  //alert(`totalPixels:${lessons[current_lesson].signature.totalPixels}`);

  if (distanceSquare < 20) {
    alert("great success !!!");
    correct++;
    document.getElementById("progress").style.width = "".concat(correct / lessons.length * 100, "%");
    document.getElementById("progress").innerHTML = " <h6>".concat(correct, "/").concat(lessons.length, "</h6>");
  } else {
    alert("try again !!!");
  }
}

var delay;
editor.on("change", function () {
  clearTimeout(delay);
  if (preview) delay = setTimeout(updatePreview, 300);
});

function updatePreview() {
  code = editor.getValue().replace(/^\s*/, "");
  sourceCode = "<scri" + "pt>" + showSample + code + "\n</scri" + "pt>";
  doc.write(sourceCode);
} //          delay = setTimeout(updatePreview, 1000);


function reset() {
  if (location.pathname == "/courseDetail.html") {
    current_lesson = 0;
  } else if (location.pathname == "/courseDetail-mid.html") {
    current_lesson = 6;
  } else {
    current_lesson = 9;
  }

  code2Learn = lessons[current_lesson].code2Learn;
  destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  instruction = lessons[current_lesson].instruction;
  editor.setValue(instruction);
  doc.close(); // close last action

  doc.open();
  doc.write(destinationCode);
}

function next() {
  getSignatures();
  current_lesson = (current_lesson + 1) % lessons.length;
  code2Learn = lessons[current_lesson].code2Learn;
  destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  instruction = lessons[current_lesson].instruction;
  editor.setValue(instruction);
  doc.close(); // close last action

  doc.open();
  doc.write(destinationCode);
}

function prev() {
  current_lesson = (current_lesson - 1 + lessons.length) % lessons.length;
  code2Learn = lessons[current_lesson].code2Learn;
  destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  instruction = lessons[current_lesson].instruction;
  editor.setValue(instruction);
  doc.close(); // close last action

  doc.open();
  doc.write(destinationCode);
}

console.log("mirror end");
"use strict";

console.log('swiper start');
var swiper = new Swiper(".courseSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  // slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
console.log('swiper end');
//# sourceMappingURL=all.js.map
