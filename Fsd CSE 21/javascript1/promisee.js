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
f1().then(f2).then(()=>{
    console.log("task 3");
})
.catch((err)=>{
    console.log(err);
})
