
var a=2;
var b=3;
var c={
    a:4,
    b:5,
    p:function(){
        return (( this.a+this.b),console.log(this));
    }
}
console.log(c.p());

var e=5;
var f=6;
function ad(){
   var e=1;
   var f=1;
    return (console.log(e+f),console.log(this.e+this.f));
}
console.log(e+f);
console.log(this.e+this.f);
ad();

function check(){
    var a=2;
    var b=3;
    function check1(){
        var a=10;
    var b=30;
    p= {
        a:4,
        b:5,
        p:function(){
            return (console.log(a+b),console.log( this.a+this.b),console.log(this));
        }
    }
   
}
}

var x = check()();
console.log(x.p);
