const form = document.querySelector('form#chrisForm') 
const chrisList= document.querySelector('ul#chrises')
let chrisArray=[]

function deleteButton (name) {
    const removeButton = document.createElement('button')
    removeButton.type = 'button'
    removeButton.textContent='Remove'
    removeButton.addEventListener('click', handleRemove)
    return removeButton
}

function renderListItem (data) {
    let name=''
    Object.keys(data).map(function(label){  //Object.keys returns array of the keys
        name+=data[label]+' '
    })
    chrisArray.push(name)
    const nameItem=document.createElement('li')
    nameItem.textContent=name
    nameItem.appendChild(deleteButton(name))
    return nameItem
}  
   

const handleSubmit = function (ev) {
    ev.preventDefault()
    const form=ev.target
    const chris = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
    }
    chrisList.appendChild(renderListItem(chris))

    form.reset()
    form.firstName.focus()
}

const handleRemove= function (ev) {
    ev.preventDefault()
    const button=ev.target
    button.parentNode.remove()
}


form.addEventListener('submit', handleSubmit)

