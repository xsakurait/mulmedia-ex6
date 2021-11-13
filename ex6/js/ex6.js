var mssgObj = document.getElementById('mssg');
var evenObj = document.getElementById('evenodd');
var bttnObj = document.getElementById('bttn');
var resetObj = document.getElementById('reset');

var num = 0;
var sum = 0;
var numBegin = "偶数";
var sumBegin = "偶数";

function bttn(){
    num = num + 1;
    sum = sum + num;
    if(num % 2 == 0){
        numBegin = "偶数";
    }
    else{
        sumBegin = "奇数";
    }

    if(sum % 2 == 0){
        sumBegin = "偶数";
    }
    else{
        sumBegin = "奇数";
    }

    perNum(sum);

    mssgObj.innerHTML = "整数：　" +  String(num) + "　合計：　" +
String(sum);
    evenObj.innerHTML = "整数：　" +  String(numBegin) + "　合計：　" +
String(sumBegin);
}

function perNum(sum){
    var persum = 0;
    for(i=1; i<sum; i++){
      if(sum % i == 0){
        persum += i;
      }
    }
  
    if(sum == persum){
        window.alert('合計値' + String(sum) + 'は完全数');
    }
}

function reset(){
    num = 0;
    sum = 0;
    numBegin = "偶数";
    sumBegin = "偶数";
    mssgObj.innerHTML = "整数：　" +  String(num) + "　合計：　" +
    String(sum);
    evenObj.innerHTML = "整数：　" +  String(numBegin) + "　合計：　" +
    String(sumBegin);
       
}

bttnObj.addEventListener('click', 
    function(){ bttn();
    }
);
resetObj.addEventListener('click', function(){ 
    reset();
    }
);
