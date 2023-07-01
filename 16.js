//  Clone Nodes
const ul=document.querySelector(".todo-list");
const li=document.createElement("li");
li.textContent="New Todo";
const li2=li.cloneNode(true);
 
ul.append(li);
ul.prepend(li2);

// At this point ya to node append hogi ya to prepend hogi donon kaam ek sath hona impossible hai
// so for that purpose we use something called clone nodes
