// let index=[2,87,80,27,78,87,67,1000]
//  let len=index.length //=8
// let max=index[0]
// for(let i=0;i<len;i++)
// {
//     if(max<index[i]){
//         max=index[i]
// }
// }
// console.log(max)
let arr=[10,34,56,4,67,3,56,87,2,98,33,12,7,42,108,200,89,100]
let len=arr.length
let max =arr[0]
for(i=0;i<len;i++)
{
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log(max)