import { formateCurency } from "../script/utils/money.js";

if( formateCurency ( 2000) === '20.00'){
    console.log('Passed');
}else{
    console.log('Faild');
}
if( formateCurency ( 0) === '0.00'){
    console.log('Passed');
}else{
    console.log('Faild');
}
if( formateCurency ( 2005) === '20.05'){
    console.log('Passed');
}else{
    console.log('Faild');
}

