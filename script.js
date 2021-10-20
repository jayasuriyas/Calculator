function clickValue(val){
    document.getElementById("screenCalculator").value+=val;
}

function clearValue(){
    document.getElementById("screenCalculator").value="";
}

function clickEqual(){
    var text=document.getElementById("screenCalculator").value
    var result=eval(text)
    document.getElementById("screenCalculator").value=result
}