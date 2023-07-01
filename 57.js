// splice method
// start , delete , insert

const myArr=['item1' , 'item2', 'item3' ];

// delete 
// ye delete ke sath sath return mai bhi dega ki kya delete kia
//  console.log(myArr.splice(1,1)); // eska matlab 1st index se start hona hai or 1 item delete karna hai 

//  console.log(myArr); 

myArr.splice(1,0,'inserted item');// 1st index pr 
// insert karna hai delete count==0 matlab kuch bhi delete ni hoga 

console.log(myArr);  