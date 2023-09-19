//built array
const ARRAY=[1,23,3,6,5,9,10,12,7,13,15]
const NEW_ARRAY=[]

//built the array with the right number
for (let i = 0; i < ARRAY.length; i++) {
    if(ARRAY[i]%3==0)
    {
        NEW_ARRAY.push(ARRAY[i])
    }
}
console.log({NEW_ARRAY});

//do it with filter
const NEW_ARRAY2=ARRAY.filter((num)=>{return num%3==0})
console.log({NEW_ARRAY2});

//do it with slice
for (let i = 0; i < ARRAY.length; i++) {
    if(ARRAY[i]%3!==0)
    {
        ARRAY.splice(i,1)
        i--
    }
}
console.log( {ARRAY});

