async function getCurrency(from,to,value){
const url = `https://currency-converter241.p.rapidapi.com/conversion_rate?from=${from}&to=${to}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '', // Enter your API key here
		'X-RapidAPI-Host': 'currency-converter241.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    let converted = result.rate.toFixed(4);
    console.log(converted);
    let convert = document.getElementById("result"); 
    convert.innerText = `${value} ${from} = ${value*converted} ${to}`;
} catch (error) {
	console.error(error);
}
};

let fromTo = document.querySelectorAll(".fromToDiv select");
for(let select of fromTo){
    for(let CurrencyCode in countryList){
        let createOption = document.createElement("option");
        createOption.innerText = CurrencyCode;
        if(select.name==="from" && CurrencyCode==="USD"){
            createOption.selected = "selected";
        }
        else if(select.name==="to" && CurrencyCode==="INR"){
            createOption.selected = "selected";
        }
        select.append(createOption);
    }
    select.addEventListener("change",(e)=>{
        let countryCode = countryList[e.target.value];
        let imgFrom = document.getElementById("imgFrom");
        let imgTo = document.getElementById("imgTo");
    if(select.name==="from"){
    imgFrom.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    }
    else{
    imgTo.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    }
    });
};
let button = document.getElementById("button");
button.addEventListener("click",convertCurrency);
function convertCurrency(){
    let input = document.getElementById("amt");
    let inputValue = input.value;
    if(inputValue<1 || inputValue===''){
        input.value = 1;
        inputValue = 1;
    }
    let selectFrom = document.getElementsByName("from")[0];
    let selectTo = document.getElementsByName("to")[0];
    let fromCurrency = selectFrom.value;
    let toCurrency = selectTo.value;
    getCurrency(fromCurrency,toCurrency,inputValue);
};
    
