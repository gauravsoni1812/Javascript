// const sectionTodo=document.querySelector(".section-todo");
// console.log(sectionTodo);
// // now if i want to see ki maine es section mai kitni 
// // classes derakhi hain so i have something called classList
// console.log(sectionTodo.classList);
// // Now i want to give class to section jo maine pehle se 
// // hi bana kar rakhi hai 
// // sectionTodo.classList.add('bg-dark');
// // Now if i want to remove classes to voo bhi mai karsakta
// // hun by sectionTodo.classList.remove("coantainer")

// // if i want to pata karna hai ki particular class exist 
// // karti hai ya ni so i have a function called
// // const ans= sectionTodo.classList.contains("container");
// // console.log(ans);

// // Toggle class
// sectionTodo.classList.toggle("bg-dark");
// // jab maine ye ni likha tha to toggle function class add karega
// sectionTodo.classList.toggle("bg-dark");
// // ab ye added hai to remove hojaega 

// Ab apan yehi kaam header ke sath kare hain
const header=document.querySelector(".header");
console.log(header.classList);
header.classList.add('bg-dark');
// accha if css ke andar tum ye bg dark class agr header ke 
// pehle add karloge to vo ni chalega kuki class upar se 
// neeche chalta hai