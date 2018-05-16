const form = document.querySelector('form#chrisForm') 
const chrisList= document.querySelector('ul#chrises')
let chrisArray=[]

function deleteButton () {
    const button = document.createElement('button')
    button.setAttribute('button', button)
    button.textContent='Remove'
    return button
}

function renderListItem (data) {
    let name=''
    Object.keys(data).map(function(label){  //Object.keys returns array of the keys
        name+=data[label]+' '
    })
    chrisArray.push(name)
    console.log(chrisArray)
    const nameItem=document.createElement('li')
    nameItem.textContent=name
    return nameItem
}  
   

const handleSubmit = function (ev) {
    ev.preventDefault()
    const form=ev.target
    const chris = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
    }
    const toAdd=renderListItem(chris)
    toAdd.appendChild(deleteButton())
    chrisList.appendChild(toAdd)

    form.reset()
    form.firstName.focus()
}


form.addEventListener('submit', handleSubmit)