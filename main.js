//{
    //var xhr=new XMLHttpRequest();
  //  xhr.overrideMimeType("application/JSON");
  //  xhr.open("GET",file+true);
  //  xhr.onreadystatechange=function()
  //  {
    //    if(xhr.onreadystate===4&&xhr.status=="200");
    //      {
    //              callback(xhr.responceText);
    //        }
  //    }
    //      xhr.send();
    //  }
    //  loadJSON("data.jsan",function)
    function loadJSON(file){
      return new Promise((resolve,request)=>{
        return fetch(file).then(response=>{
          if (response.ok) {
            resolve(response.json());
          }
            else{
              reject(new error("error"));
            }
        })
      })
    }
var fetchedData=loadJSON("java.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
  education(data.career);
})
var child2=document.querySelector("#child2");
function career(car){
  var heading=document.createElement("h2");
  heading.textContent="career objective";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  child2.appendChild(hLine);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}
function education(edu){var heading=document.createElement("h2");
heading.textContent="education qualifition";
child2.appendChild(heading);
var hLine=document.createElement("hr");
child2.appendChild(hLine);
var table=document.createElement("table");
child2.appendChild(table);
var tr="<tr><td>S.no</td><td>degree</td><td>institute</td><td>data</td></tr>";
table.innerHTML=tr;
table.border="1";
}
