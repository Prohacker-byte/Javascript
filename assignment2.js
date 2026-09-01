function sum(message1, message2)
{
    if(message1 == message2){
        console.log("both are equal");
    }
}

function sumWithMsg(clbk, message)
{
    const result = clbk(20, 30);

    const fresul = "hi " + message + result;
    console.log(fresul);
}

sumWithMsg(sum, "hello ");