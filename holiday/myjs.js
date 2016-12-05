var imageArray = [
    "http://heathersanimations.com/xmas20/h714.gif",
    "KidsSantaPresents.gif",
    "SIBLINGS.gif",
    "StepTree.gif",
    "E.gif",
    "FallStairs.gif",
    "HitSanta.gif",
    "fightingSanta.gif",
    "uglyBean.gif",
    "roofSnow.gif",
    "runningSanta.gif",
    "stageSanta.gif",
    "kidsSing.gif",
	"http://cdn.history.com/sites/2/2015/04/hith-father-christmas-lights-iStock_000029514386Large.jpg",
	"http://www.dogguide.net/blog/wp-content/uploads/2009/12/4178563206_92742e5c12.jpg",
    "filthyAnimal.gif",
];
var currentIndex = 0;

function renderImage(){
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

function forwardImage(){
	currentIndex++;
	renderImage();
}

function backImage(){
	currentIndex--;
	renderImage();
}

$('#forwardBtn').on('click', forwardImage);
$('#backBtn').on('click', backImage);

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + "!";
$('h1').html(outputString);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

var data = google.visualization.arrayToDataTable([
  ['Family', 'How Much I Love Them But They Are Still Really Annoying'],
  ['Brother',     5],
  ['Sister',      1],
  ['Mom',  9],
  ['Dad', 9],
  ['Other',    0.1]
]);
//calculate 50% of page width
var chartWidth = $('body').width()*0.5;

var options = {
  title: 'FAMILY',
  backgroundColor: '#A4ABBF',
  width: chartWidth,
  colors: ['#40627C']
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
}

