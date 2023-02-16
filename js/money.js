



document.getElementById('calculate-btn').addEventListener('click',function(){

    const myIncomeField = document.getElementById('income');
    const myIncomeString=myIncomeField.value;
    const myIncomeInt=parseInt(myIncomeString)


    const myFoodField = document.getElementById('food');
    const myFoodString=myFoodField.value;
    const myfoodint=parseInt(myFoodString)


    const myRentField = document.getElementById('rent');
    const myRentString=myRentField.value;
    const myrentint=parseInt(myRentString)

    const myClothsField = document.getElementById('clothes');
    const myClothsString=myClothsField.value;
    const myclothesint=parseInt(myClothsString)


const totalExpense = myfoodint + myrentint + myclothesint;
const expenseField=document.getElementById('total-expense');
expenseField.innerText=totalExpense;


// remaining balance

const save = myIncomeInt-totalExpense;
const remainingBalance=document.getElementById('balance');
remainingBalance.innerText=save;




})

document.getElementById('save-ans').addEventListener('click',function(){

const savings = (save * .2);
const saveField = document.getElementById('save');
const saveFieldString=saveField.value;
const saveFinal=parseFloat(saveFieldString);
saveFinal.innerTex=savings;



})