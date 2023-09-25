/* compare Two JSON have the same properties without order <br>
            a. let obj1 = {name : "Person 1", age:5}; <br>
            b. let obj2 = {age:5,name:"Person 1"}; */


let obj1 = {name: "Person 1", age : 5};
let obj2 = {age:5, name : "person 1"};          


if(obj1=obj2){
    console.log(true);
}
else{
    console.log(false);
}

console.log("------------------------------------------");
let obj3 = {"name": "Person 1", "age" : "5"};
let obj4 = {"age":"5", "name" : "person 1"};          

if(obj3=obj4){
    console.log(true);
}
else{
    console.log(false);
}

