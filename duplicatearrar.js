function uniquearr(arr)
{
    let uniquearr = [];
    for (let i of arr)
    {
        if(uniquearr.indexOf(i)==-1)
        {
            uniquearr.push(i);
        }
    }
    return uniquearr;
}
var arr = [1,2,1,3,2,3,4];
console.log(uniquearr(arr))