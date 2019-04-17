//@flow
//https://codeburst.io/getting-started-with-flow-and-nodejs-b8442d3d2e57
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
function square(n: number): number {
  return n * n;
}
