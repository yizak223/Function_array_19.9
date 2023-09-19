const ARRAY=[
    {firstname:'yizak',
    lastname:'alaluf',
    age:23},
    {firstname:'yizak',
    lastname:'alaluf',
    age:23},
    {firstname:'yizak',
    lastname:'alaluf',
    age:23}
]
console.log({ARRAY});
console.log(ARRAY[0].fullName);

ARRAY.forEach(person => {
    person.fullName=`${person.firstname}${person.lastname}`
});
console.log(ARRAY[0].fullName);

let NUM_ARRAY=[1,2,3,4,5,6,7,8,9]

let NEW_NUM_ARRAY=NUM_ARRAY.map((num)=>
    {return `<button>${num}</button>`}
)

NEW_NUM_ARRAY=NEW_NUM_ARRAY.join(' ');
container.innerHTML+=`${NEW_NUM_ARRAY}`

