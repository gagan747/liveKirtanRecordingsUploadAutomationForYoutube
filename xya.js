const fetch=require("node-fetch");
async function xyz() {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await result.json();
        console.log(data)
    }catch(err){
        console.log("error"+err);
    }
}
xyz();