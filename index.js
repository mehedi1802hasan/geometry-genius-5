let serial=0;
function getTable(titleField,areaField){
    const container=document.getElementById('table-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <th>${serial}</th>
    <td>${titleField}</td>
    <td>${areaField}cm<sup>2</sup> </td>
    <td>${''}<button class="bg-blue-700 text-white p-3">Covert to m<sup>2</sup></button> </td
  
    `
    container.appendChild(tr);
}

document.getElementById('first-btn').addEventListener('click',function(){
  
    const titleField=document.getElementById('first-name').innerText;
    const bField=document.getElementById('first-b-field').value;
    const lField=document.getElementById('first-h-field').value;
  if(
    bField==='' || lField===''|| isNaN(bField) || isNaN(lField)|| bField <0 || lField<0 
  ){
   return alert('Please give me valid number')
  }
else{
  serial ++;
  const area= 0.5 *bField * lField  ;
  const areaField=area.toFixed(2);
getTable(titleField,areaField);
}

})
document.getElementById('second-btn').addEventListener('click',function(){
  
    const titleField=document.getElementById('second-name').innerText;
    const bField=document.getElementById('second-w-field').value;
    const hField=document.getElementById('second-l-field').value;
    if(
      bField==='' || hField===''|| isNaN(bField) || isNaN(hField)|| bField <0 || hField<0 
    ){
     return alert('Please give me valid number')
    }
    serial ++;
    const area=bField * hField ;
    const areaField=area.toFixed(2);
  getTable(titleField,areaField);

})
document.getElementById('third-btn').addEventListener('click',function(){
  serial ++;
    const titleField=document.getElementById('third-name').innerText;
    const bField=document.getElementById('third-b-field').innerText;
    const hField=document.getElementById('third-h-field').innerText;
    const area= bField *hField;
    const areaField=area.toFixed(2);
  getTable(titleField,areaField);

})
document.getElementById('fourth-btn').addEventListener('click',function(){
  serial ++;
    const titleField=document.getElementById('fourth-name').innerText;
    const d1Field=document.getElementById('fourth-d1-field').innerText;
    const d2Field=document.getElementById('fourth-d2-field').innerText;
    const areaField= 0.5* d1Field * d2Field;
  getTable(titleField,areaField);

})
document.getElementById('five-btn').addEventListener('click',function(){
  serial ++;
    const titleField=document.getElementById('five-name').innerText;
    const pField=document.getElementById('five-p-field').innerText;
    const bField=document.getElementById('five-b-field').innerText;
    const areaField=pField * bField;
  getTable(titleField,areaField);

})
document.getElementById('six-btn').addEventListener('click',function(){
  serial ++;
    const titleField=document.getElementById('six-name').innerText;
    const aField=document.getElementById('six-a-field').innerText;
    const bField=document.getElementById('six-b-field').innerText;
    const area=aField * bField;
    const areaField=area.toFixed(2);
  getTable(titleField,areaField);

})
