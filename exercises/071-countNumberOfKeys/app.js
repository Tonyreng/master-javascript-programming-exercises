let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
   let num = 0;

   for(let prop in obj) {
    num++;
   }

   return num;
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
