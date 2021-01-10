let entries=[]
export const getBeans=()=>{
    return fetch("http://localhost:5001/api/BeanVariety")
    .then(entrys=>entrys.json())
    .then(entry=>{entries=entry})
}

export const useBeans=()=>{
    return entries.slice()
}

export const saveBean=(beanObj)=>{
    fetch("http://localhost:5001/api/BeanVariety", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(beanObj)
    })
    .then(getBeans)
}

export const updateBean=(beanObj)=>{
    fetch(`http://localhost:5001/api/BeanVariety/${beanObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(beanObj)
    })
    .then(getBeans)
}

export const deleteBean=(id)=>{
    fetch(`http://localhost:5001/api/BeanVariety/${id}`,{
        method:"DELETE"
    })
    .then(getBeans)
}