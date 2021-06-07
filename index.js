     //question 1
  var bodyStyle =  document.body.style.backgroundColor="silver";
     //question 2
   var title =   document.getElementById("title").style.color = "green";
     // question 3
   var heading=document.body.getElementsByTagName("h3");
   
    heading[0].style.textTransform = "uppercase";
    heading[1].style.textTransform = "uppercase";

  
    //question 4
    var fruits = document.getElementById("fruList");
    var fruitNode = document.createElement("li");
    var newFruit = document.createTextNode("Pineapple");
    fruitNode.appendChild(newFruit);
     fruits.appendChild(fruitNode);  

     //question 5

     var veges = document.getElementById("vegList");
     var vegeNode = document.createElement("li");
     var newVege = document.createTextNode("Chillies");
     vegeNode.appendChild(newVege);
     veges.appendChild(vegeNode);
    





























// function color(){
//     document.body.style.backgroundColor="silver";
//     document.getElementById("title").style.color="green";
//     document.getElementById("head").style.textTransform="uppercase";
//     document.getElementById("heading").style.textTransform="uppercase";
//     var node=document.createElement("li");
//     var textnode=document.createTextNode("Apple");node.appendChild(textnode)
//     document.getElementById("fruList").appendChild(node)
//     var node2=document.createElement("li");
//     var textnode2=document.createTextNode("Cabbages");node2.appendChild(textnode2)
//     document.getElementById("vegList").appendChild(node2)
// }