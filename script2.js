const heading=document.getElementById("main-heading")
heading.style.color="blue";
const descriptions=document.getElementByName("description")
for(let i=0;i<descriptions.length;i++){
    descriptions[i].style.fontweight="bold";
}
const paragraphs=document.getElementsByTagName("p");
paragraph[0].style.backgroundColor="yellow";
const firstpara=document.querySelector("description");
firstpara.innerText="updated using query selector";
const allparas=document.queryselectorAll("description");
allparas.forEach((p,index)=>{
    p.innerText+='(para${index+1})';
});
console.log("heading element,heading");
console.log("description:",description);
    console.log("paragraphs:",paragraphs);
    console.log("first.description:",firstpara);
    console.log("all.description:",allparas);
