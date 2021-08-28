const dob = document.querySelector('#date-input');
const luckyNumber = document.querySelector('#lucky');
const btnCheck = document.querySelector('#btn-check');
const output = document.querySelector('.output');


function calculateSum(dob){
    var sum=0;
    var str = dob.value.replaceAll("-","");
    for(var i=0;i<str.length;i++){
        sum = sum + Number(str.charAt(i));
    }
    return sum;
}

function style(){
    output.style.fontSize ="2rem";
    output.style.fontWeight = "bold";
    output.style.color="indigo";
}

function calculateLucky(luckyNumber){
    var add = calculateSum(dob);
    var compare = Number(luckyNumber);
    if (add % compare === 0){
        output.textContent = "Yippee Your BirthDay Date is Lucky 🎂";
        style();

    }
    else{
        output.textContent = "Your BirthDay Date is not Lucky 😭";
        style();
    }
    
}


btnCheck.addEventListener('click', function(){
    
    calculateLucky(luckyNumber.value);
});