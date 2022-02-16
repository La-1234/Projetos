var marks = [30,40,45,35];

function marks_avarage() {

var sum = 0;

for (var i = 0; i<marks.length;i = i+1) {
sum = sum + marks[i];
}
var media = sum/marks.length;
console.log(media);
}
function setup() {
  createCanvas(400, 400);
marks_avarage();
}

function draw() {
  background(150);
}