const form = document.querySelector('form#chrisForm') 
const chrisList= document.querySelector('ul#chrises')

function renderListItem (data) {
    let name=''
    Object.keys(data).map(function(label){  //Object.keys returns array of the keys
        name+=data[label]+' '
    })
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

    chrisList.appendChild(renderListItem(chris))

    form.reset()
    form.firstName.focus()
}


form.addEventListener('submit', handleSubmit)