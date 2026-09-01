function test1(callback){
    setTimeout(()=>{
        console.log("task 1");
        callback();
    }, 1000);
}

function test2(callback){
    setTimeout(()=>{
        console.log("task 2");
        callback();
    }, 1000);
}

function test3(callback){
    setTimeout(()=>{
        console.log("task 3");
        callback();
    }, 1000);
}
test1(()=>{
    test2(()=>{
        test3(()=>{
            console.log("task 4");
        });
    }       ); 
});