

function BMI(  ){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.getElementById("result").innerText="result";
}


// Part 1 

function calcBMI(weight,height){
    //  result = prompt("result");
    result= weight / (height*height);
    //let result = document.getElementById("result").innerText="result";
    return result;
}

console.log(calcBMI(70,1.7))


// function call
 //IBM(weight , height);

function Status(bmiResult){
    BMI();

    bmiResult=document.getElementById("bmiResult").innerText="result";
    if(bmiResult<18.5){
       return("لديك نقص في الوزن");
    }
    else if(bmiResult>=18.5 && bmiResult<25){
        return("وزنك صحي");
    }
    else{
        return("لديك زيادة في الوزن");
    }
    
}


