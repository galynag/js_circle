  var evenNumbers='';
for (var i=0; i<101; i=i+2) {
  evenNumbers +=' '+i;
}
document.getElementById('out').innerHTML=evenNumbers;

var numbers='';
for (var i=200; i>=0; i=i-1) {
  numbers +=' '+i;
}
document.getElementById('out2').innerHTML=numbers;

var sum=0;
var sss='0';
for (var i=1; i<=100; i++) {
  sss+='+'+i;
  sum=sum+i;
}
document.getElementById('out3').innerHTML=sss+'<br>='+sum;

function f1() {
  var n = document.getElementById('number').value;
  var stepen=document.getElementById('stepen').value;
  var number=1;
	for (var i=1; i<=stepen; i++) {
    number=number*n;
  }
	document.getElementById('out1').innerHTML=n+' в степени '+stepen+' = <b>'+number+'<b>';
}

var tmNumber=7;
var tm='';
for (var i=1; i<=9; i++) {
  tm += i+'*'+tmNumber+'='+i*tmNumber+'<br>';
  console.log(tm);

}
document.getElementById('out4').innerHTML=tm;

var multiply=1;
var nnn='';
for (var i=1; i<=50; i++) {
  nnn+='*'+i;
  multiply=multiply*i;
  console.log(multiply);
}
document.getElementById('out5').innerHTML=nnn+'<br>='+multiply;

var symbols='';
for (var i=1000; i<2000; i++) {
  symbols +='&#'+i+';'+' ';
}
document.getElementById('out6').innerHTML=symbols;

var runing=5;
var procent=1;
var day=0;
var runGarry='';
var maxRuning=1;
while (maxRuning <= 45.4) {
  maxRuning=procent*runing;
  procent=procent+0.1;
  day++;
  runGarry+=day+'день'+' '+maxRuning+'km;  ';
}
document.getElementById('out7').innerHTML='<b>Ответ: на '+day+'день</b><br><br>'+runGarry;
