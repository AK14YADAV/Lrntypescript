export{}

function test(n1:number,n2:number)
{
    if(n1){
        console.log(n1);

    }
    else{
        console.log(n1+n2);
    }
}
test(10,20);



interface person{
    fn:string;
    ln:string;
    add:string;
    age:number;
}
function fullname(p:person){
    console.log(`${p.fn}${p.ln}${p.add}${p.age}`);

}
let emp={
    fn:"ajay",
    ln:"kumar",
    add:"noida",
    age:23
}
fullname(emp);