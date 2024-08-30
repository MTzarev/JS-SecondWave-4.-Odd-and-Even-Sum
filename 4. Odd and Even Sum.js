function oddAndEvenSum (singleNumber){
    let oddSum = 0;
    let evenSum = 0;
let num = singleNumber.toString()
for (let i = 0; i<num.length; i++){
    let digit = Number(num[i])
    if (digit %2 === 0){
        evenSum+=Number(num[i])
    }else{
        oddSum +=Number(num[i])
    }
}

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
