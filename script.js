
var box1=document.getElementById("num1")
var box2=document.getElementById("num2")
var answer=document.getElementById("result")



function add(){

var box1value=Number(box1.value)
var box2value=Number(box2.value)
var total=(box1value+box2value)

answer.textContent=total
}

function sub(){

    var box1value=Number(box1.value)
    var box2value=Number(box2.value)
    var total=(box1value-box2value)
    
    answer.textContent=total
    }

function mul(){

        var box1value=Number(box1.value)
        var box2value=Number(box2.value)
        var total=(box1value*box2value)
        
        answer.textContent=total
        }

 function div(){

            var box1value=Number(box1.value)
            var box2value=Number(box2.value)
            var total=(box1value/box2value)
            
            answer.textContent=total
            }

function cl(){
    document.getElementById("num1").value='';
    document.getElementById("num2").value='';
    document.getElementById("result").textContent='0';
}