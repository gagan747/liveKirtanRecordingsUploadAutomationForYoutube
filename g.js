function getarray(fruits) {
    return new Promise((res,rej)=>{
    console.log("getting first element from fruit");
    setTimeout(() => {
    res(fruits[0]);},4000);
    });
    }
   
    let fruits = ["mango", "apple"];
   
    getarray(fruits).then((fruit)=>{
    return new Promise((res,rej)=>{
    console.log("Received first fruit "+fruit)
    fruit+=" is my favourite fruit";
    setTimeout(()=>{
    res(fruit);
    },4000);}
    )}).then((fruit)=>{ console.log("After executing 2 callback ="+fruit);}).catch((err)=>{console.log(err)});
   
 