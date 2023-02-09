const tableBodyTrs=document.querySelector(".tableBody").querySelectorAll(".tr");
//console.log("all table rows..",tableBodyTrs)

function createForm(){
    let form = document.createElement("form");

    form.innerHTML=`
    <th>
    <input type="text" class="orange" placeholder="Enter Day" />
    </th>
    <td>
        <input type="time" class="green" id="start-work"/> 
    </td>
    <td>
        <input type="time" class="blue" id="start-break"/> 
    </td>
    <td>
        <input type="time" class="blue" id="end-break"/> 
    </td>
    <td>
        <input type="time" class="green" id="end-work"/> 
    </td>
    <td>
        <input  class="workedHours purple" value="00:00" disabled/> 
    </td>
    <td> <button class="btn" type="submit">Calculate time</button></td>

    `
return form;
}

// console.log(createForm())

(async()=>{
    tableBodyTrs.forEach((tr) => tr.appendChild(createForm())) 
})();


const forms=document.querySelectorAll("form");

// console.log("forms..",forms)


forms.forEach((form)=>
form.addEventListener('submit',function(e){
    e.preventDefault();

    const day = e.target.children[0].value;
    const startWork=e.target.children[1].value;
    const startBreak=e.target.children[2].value;
    const endBreak=e.target.children[3].value;
    const endWork=e.target.children[4].value;

    const worked=e.target.children[5].value;
    const submitBtn=e.target.children[6].value;




    console.log("inputs",e.target.children)
    console.log("day..",day)
    console.log("ss",e.target.children[3].value)

    //validation function

    validateSubmission()
})
)

