{
  // console.log("Hello");
  // const country = "Bangladesh";
  // console.log(country);
  // const technologies = (name: string, established: string) => {
  //   console.log(
  //     `The name of technologies ${name} and it has estublished since ${established} years`
  //   );
  // };
  // technologies("Javascript", "September, 1995");
  // console.log("Hello");
  // const country = "Bangladesh";
  // console.log(country);
  // const technologies = (name: string, established: string) => {
  //   console.log(
  //     `The name of technologies ${name} and it has estublished since ${established} years`
  //   );
  // };
  // technologies("Javascript", "September, 1995");
  // let playerName = "Mashrafi";
  // console.log(playerName);
  // playerName = 22;
  // console.log(playerName);
  // function multiply(a: number, b: number) {
  //   return a * b;
  // }
  // console.log(multiply("result", 55));
  // console.log(multiply(44, 55));
  // ARRAY
  // let fruits = ["apple", "Banana", "fruits", "Mango"];
  // fruits.push(34);
  // let mixed = [22, "Hello", true, {}];
  // mixed.push(44, "world", false, {
  //   name: "Sifat",
  // });
  // console.log(mixed);
  // Object
  // let person = {
  //   name: "Sifat",
  //   age: 22,
  //   isCapital: true,
  // };
  // person.country("Rangpur");
  // let a;
  // a = 5;
  // a = "string";
  // let a: string;
  // let b: number;
  // a = "Ayan";
  // console.log(a);
  // ** Union types
  // Normal Variable
  // let b: string | number;
  // //array
  // let a: (string | number)[] = [];
  // b = "Sifat";
  // console.log(b);
  // a = ["Sahabul Islam Sifat", 22];
  // console.log(a);
  // a.push('Sifat', 22, false)
  // Object
  // let c: {
  //   name: string;
  //   age: number;
  //   isAdmin: boolean;
  // };
  // // c=[]
  // c = {
  //   name: "SIfat",
  //   age: 22,
  //   isAdmin: true,
  // };
  // console.log(c);
  //** Dynamic Type or Any Type */
  // let a;
  // a = 2;
  // a = "Sifat";
  // let a: any;
  // a = "Sifat";
  // console.log(a);
  // ARRAY
  // let a: any[] = [];
  // a.push("SIfat");
  // a.push(22);
  // a.push(true);
  // console.log(a);
  // OBJECT
  // let b: any = {};
  // b = {
  //   name: "Sifat",
  //   age: 22,
  //   isSingle: true,
  // };
  // console.log(b);
  // ** Function
  // let myFunc: Function;
  // myFunc = () => {
  //   console.log("Hello");
  // };
  // myFunc();
  // const myFunc = (a: string, b: number, c?: boolean) => {
  //   console.log(`This is ${a} and this is ${b}, and ${c}`);
  // };
  // myFunc("String", 2025, true);
  //** Type Aliases */
  // type stringOrNumber = string | number;
  // type userType = { name: string; age: number };
  // const userDetails = (id: stringOrNumber, user: userType) => {
  //   console.log(`User id is ${id} and user type is ${user}`);
  // };
  // const sayHello = (user: userType) => {
  //   console.log(`Hello From ${user}`);
  // };
  // sayHello()
  // ** Function Signature
  // let add: (x: number, y: number) => number;
  // add = (x: number, y: number) => {
  //   return x + y;
  // };
  // let calculation: (x: number, y: number, z: string) => number;
  // calculation = (a: number, b: number, c: string) => {
  //   if (c === "add") {
  //     return a + b;
  //   } else {
  //     return a - b;
  //   }
  // };
  // const result = calculation(5, 6, "add");
  // const result = calculation(5, 6, "minus");
  // console.log(result);
  // let userDetails: (
  //   id: number | string,
  //   userInfo: {
  //     name: string;
  //     age: number;
  //   }
  // ) => void;
  // userDetails = (
  //   id: number | string,
  //   user: {
  //     name: string;
  //     age: number;
  //   }
  // ) => {
  //   console.log(`this is user id ${id} and this is user info ${user}`);
  // };
  // userDetails(55, ('Sifat' 22) )
}
