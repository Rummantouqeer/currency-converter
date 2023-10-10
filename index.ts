import inquirer from "inquirer";

let Conversion = {
    "PKR":{
         "USD":0.0044,
         "GBP":0.0037,
         "PKR":1,
    },
    "GBP":{
         "USD":1.21,
         "GBP":1,
         "PKR":271.79,

    },
    "USD":{
         "USD":1,
         "GBP":0.83,
         "PKR":225.50,

    }
}
const answers:{
    from:"PKR"|"USD"|"GBP";
    to:"PKR"|"USD"|"GBP";
    amount:number;
} = await inquirer.prompt([
{
        type:"list",
        name:"from",
        choices:["USD","GBP","PKR"],
        message:"Select your currency"
},
{
    type:"list",
    name:"to",
    choices:["USD","GBP","PKR"],
    message:"Select your conversion currency",
},
{
    type:"number",
    name:"amount",
    message:"Enter your conversion amount",
},


])
const {from,to,amount} = answers;
if (from && to && amount) {
    let result =Conversion[from][to] * amount;
    console.log(`Your Conversion from ${from} to ${to} is ${result} `)
}
