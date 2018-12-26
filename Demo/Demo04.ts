// function searchXiaoJieJie(age:number):String{
//     return '找到了'+age+'岁的小姐姐'
// }
//
// let age:number = 28;
// let result:string = searchXiaoJieJie(age)
//
// console.log(result)


//有可选参数的函数

// function searchXiaoJieJie(age:number,stature?:string):string{
//     let yy:string=''
//      yy ='找到了'+age+'岁';
//
//     if(stature!=undefined){
//         yy = yy + stature
//     }
//
//     return yy+'的小姐姐'
// }
//
// let result:string = searchXiaoJieJie(22,'大长腿')
//
// console.log(result);

//有默认参数的函数
// function searchXiaoJieJie(age:number=18,stature:string='水蛇腰'):string{
//     let yy:string = ''
//     yy = '找到了'+age+'岁'
//     if(stature!=undefined){
//         yy = yy+stature
//     }
//     return yy+'小姐姐'
// }
//     let result:string = searchXiaoJieJie(22,'大长腿')
//
//     console.log(result)

//有剩余参数的函数
function searchXiaoJieJie(...xuqiu:string[]):string{
    let yy:string = '找到了'
    for(let i=0;i<xuqiu.length;i++){
        yy = yy + xuqiu[i]
        if (i<xuqiu.length-1){
            yy = yy +'、'
        }
    }

    yy = yy +'的小姐姐'
    return yy;
}
let result:string = searchXiaoJieJie('22岁','大长腿','瓜子脸','水蛇腰')

console.log(result)
