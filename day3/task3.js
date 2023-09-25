//the same rest countries and print all countries names, regions, sub-region and populations

let request = new XMLHttpRequest();
console.log(request);
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function (){
    let result = JSON.parse(request.response);
    console.log(result);

    for(let i = 0; i < result.length;i++){
        console.log(`
        Name : ${result[i].name.common}
        Region : ${result[i].region}
        Subregion : ${result[i].subregion}
        Population : ${result[i].population}
        `);
    }
}