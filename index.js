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
    chrisArray.push(data)
    const nameItem=document.createElement('li')
    nameItem.textContent=data
    nameItem.appendChild(deleteButton(data))
    console.log(chrisArray)
    return nameItem
}  
   

const handleSubmit = function (ev) {
    ev.preventDefault()
    const form=ev.target
    let chris = ''
    chris=form.firstName.value +' '+ form.lastName.value
    chrisList.appendChild(renderListItem(chris))

    form.reset()
    form.firstName.focus()
}

const handleRemove= function (ev) {
    ev.preventDefault()
    const button=ev.target
    const toRemove=button.parentNode
    const index=chrisArray[toRemove]
    chrisArray.splice(index, 1)
    console.log(chrisArray)
    toRemove.remove()
}


form.addEventListener('submit', handleSubmit)

