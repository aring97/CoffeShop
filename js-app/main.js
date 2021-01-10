import {getBeans, useBeans, saveBean, updateBean, deleteBean} from "./Provides/BeanDataProvider.js"
var domElement= document.getElementById("core");
const button = document.querySelector("#run-button");
const beanButton=document.querySelector("#bean-button");
const coffeeButton=document.querySelector("#coffee-button");
button.addEventListener("click", event => {
    getBeans()
        .then(()=> {
            if(event.target.id==="run-button"){
                domElement.innerHTML=''
            var beanVarieties=useBeans();
            console.log(beanVarieties);
            beanVarieties.forEach(bean => {
                domElement.innerHTML+=`
                <p>Bean: ${bean.name}</p>
                <p>Region: ${bean.region}</p>`
                if(bean.notes!=null){
                    domElement.innerHTML+=`<p>Notes: ${bean.notes}</p>`
                }else{domElement.innerHTML+=`<p>Notes:</p>`}
                domElement.innerHTML+=`<button id="bean-${bean.id}">Delete</button>`
                domElement.innerHTML+="<hr/>"
            });
            }
        })
});

beanButton.addEventListener("click", event=>{
    if(event.target.id="bean-button"){
        domElement.innerHTML=`
        <fieldset>
        <p>Bean Name</p>
        <input type="text" id="Name"/>
        <p>Region</p>
        <input type="text" id="Region" />
        <p>Notes</p>
        <textarea id="Notes"></textarea>
        <button id="bean-submit">Submit</button>
        </fieldset>
        `
    }
});

domElement.addEventListener("click", click=>{
    if(click.target.id==="bean-submit"){
        const name=document.querySelector("#Name")
        const region=document.querySelector("#Region")
        const notes=document.querySelector("#Notes")
        const beanObj={
            "name":name.value,
            "region":region.value,
            "notes":notes.value,
        }
        saveBean(beanObj)
    }
})


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