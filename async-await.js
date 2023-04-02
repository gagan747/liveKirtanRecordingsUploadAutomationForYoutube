// let arr=["mango","apple"];
// getfruit(arr,(fruit,callback)=>{
// console.log("Got the first fruit"+fruit);

// setTimeout(()=>{
//     let str=fruit+" is my fav fruit";
//     callback(str);
// },4000);

// });
// function getfruit(arr,callback){
//     console.log("got the fruits array "+arr);
//     setTimeout(()=>{callback(arr[0],(concat)=>{console.log(concat)})},4000);

    

// }                 ///////////////////callbackhell

let ar=["mngo","apple"];
function getfruits(ar){
    console.log("got the fruits array"+ar);
return new Promise((res,rej)=>{

res(ar[0]);


});
}
getfruits(ar).then((fruits)=>{
console.log("got the first fruit"+fruits);
return new Promise((res,rej)=>{
setTimeout(()=>{res(fruits+"is my fav fruit")},4000);
});
}).then((data)=>{console.log(data)}).catch((err)=>{console.log("there is a err"+err)});
console.log("first");//////promises
// console.log("first");
// var sum=0;
// let ar=["mngo","apple"];
// function getfruits(ar){
//         console.log("got the fruits array"+ar);
//     return new Promise((res,rej)=>{
//     setTimeout(()=>{
//      res(ar[0]);
//      },4000)
    
//      });
//      }
//      function concat(fruit){
//          console.log("got the fruit"+fruit);
//          return new Promise((res,rej)=>{ setTimeout(()=>{res(fruit+" is my fav fruit")},4000);});
        
//      }
//      async function demo(){
//          try{
//      const res1=await getfruits(ar);
    
//      const res2=await concat(res1);
     
//      return res2 ;
//          }catch(err){
            
//              console.log("inner catch"+err);
//          }
//      }
// demo().then((data)=>{console.log(data)}).catch((err)=>{console.log("error from outside"+err)});
// console.log("end");
