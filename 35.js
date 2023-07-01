//Nesting destructuring

const users=[
     {userId:1,firstname:"gaurav",gender:"male"},
     {userId:2,firstname:"shreem",gender:"female"},
     {userId:1,firstname:"ashi",gender:"female"}
]

// const [user1 ,user2 ,user3]=users; esme tumne koi bhi destructing ni ki hai
const[{firstname:user1firstname}, ,{gender}]=users;


console.log(user1firstname, gender);