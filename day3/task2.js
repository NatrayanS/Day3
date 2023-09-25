//rest countries API URL-> https://restcountries.com/v3.1/all and display all the country flags in the console

let request = new XMLHttpRequest();
console.log(request);
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function (){
    let result = JSON.parse(request.response);
    console.log(result);

    for(let i = 0; i < result.length;i++){
        console.log("Name :", result[i].name.common);
        console.log("flags :", result[i].flags.png);
    }
}