const url = "https://localhost:5001/api/BeanVariety/";
var domElement= document.getElementById("core");
const button = document.querySelector("#run-button");
const beanButton=document.querySelector("#bean-button");
const coffeeButton=document.querySelector("#coffee-button");
var HTMLString="";

button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            beanVarieties.forEach(bean => {
                HTMLString +=`
                <p>Bean: ${bean.name}</p>
                <p>Region: ${bean.region}</p>`
                if(bean.notes!=null){
                    HTMLString+=`<p>Notes: ${bean.notes}</p>`
                }else{HTMLString+=`<p>Notes:</p>`}
                HTMLString+="<hr/>"
            },
            domElement.innerHTML=HTMLString
            );
        })
});

beanButton.addEventListener("click", ()=>{
    HTMLString+=`
    <fieldset>
    <p>Bean Name</p>
    <input type="text" id="Name"/>
    <p>Region</p>
    <input type="text" id="Region" />
    <p>Notes</p>
    <textsarea id="Notes"></textarea>
    <button id="bean-submit>Submit</button>
    </fieldset>
    `
});


/*
coffeeButton.addEventListener("click", ()=>{
    HTMLString+=`
    <fieldset>
    <p>Coffee Name</p>
    <input type="text" id="Name"/>
    <p>Region</p>
    <input type="text" id="Region" />
    <p>Notes</p>
    <textsarea id="Notes"></textarea>
    <button id="bean-submit>Submit</button>
    </fieldset>
    `
})
*/

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}