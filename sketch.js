var database;
var form
var geek;
var allGeeks;
var geekName="";
var bg;
var playerCount;


function preload()
{
bg=loadImage("bg.jpg");
}
function setup() {
  createCanvas(800,400);
  database=firebase.database();
  start();
  
}
async function start()
{
  geek = new Geek();
  var playerCountRef = await database.ref('PlayerCount').once('value');
  if(playerCountRef.exists()){
    playerCount = playerCountRef.val();
    geek.getCount();
  }
  form = new Form()
  form.display();
}
function draw() {

  background(bg);  
 
}