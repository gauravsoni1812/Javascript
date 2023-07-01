// Static List vs Live list

// queryselectorAll hamein static list degi
// getElementsBysomething hamein live list

const ul=document.querySelector(".todo-list");
const ListItems=ul.getElementsByTagName("li");// ye ye btatega ki pure class mai kitni li hain
// But ul.getElementsByClassName ye ye bataega ki ul mai kitne li ha
// Now i will add 6th li here in the list items
const sixthli=document.createElement("li");
sixthli.textContent="item 6";
// Now iam going to add this in my ul
 
ul.append(sixthli);
console.log(ListItems);

// Line no 7 tumne list banai hai or baad mai update ki hai to vo 
// changes terminal window mai bhi reflect hue hain
