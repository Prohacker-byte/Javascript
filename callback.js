function sum (a,b)
{
    return a+b;
}
function sumWithMsg(clbk,message){
    const result=clbk(20,30);
    
    const fresul="hi"+message+result;
    console.log(fresul);
}
sumWithMsg(sum, "John"  );