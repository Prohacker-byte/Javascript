function f1(){
return new Promise((resolve, reject)=>{
   setTimeout(()=>{
console.log("task 1");
resolve();
}, 1000);
});
}       

function f2(){
return new Promise((resolve, reject)=>{
   setTimeout(()=>{
console.log("task 2");
resolve();
}, 1000);
});
}

async function f(){
  try{  await f1();
    await f2();
  }
  catch(err){
    console.log("error",err);
  }
}
f();

