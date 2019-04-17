//
var foo = () =>{
    var arr = [];
    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr=arr.map((n) => n + 1);
    arr.forEach((i)=>console.log(i))
    //arrow operators

   //babel-preset-flow
};
foo();

// @flow
function square(n) {
  return n * n;
}
