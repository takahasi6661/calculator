let a=prompt('Введите первое число');
let b=prompt('Введите второе число');
let c=prompt('Введите операцию');
if (c=='+') {
    alert(Number(a)+Number(b));
}  else if(c=='-'){
    alert(a-b)
} else if(c=='*'){
    alert(a*b)
} else if(c=='/'){
    alert(a/b)
}