document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', newToDo)
});

const newToDo = function(event) {
  event.preventDefault()
  let input = event.target['new-task-description'].value
  let color = event.target.selectPriority.value
  let date = event.target.dueDate.value
  console.log(color);
  appendTasker(input, color, date)
  event.target['new-task-description'].value = ''
  event.target.dueDate.value = ''
}

const appendTasker = function(input, color, date){
  let ul = document.querySelector('#tasks')
  let li = document.createElement('li')
  let deleteBtn = document.createElement('button')
  

  //assign values
  li.innerText = `${input} Due: ${date}  `
  li.style.color = color
  deleteBtn.innerText = 'X'
 


  //appending to DOM
  ul.appendChild(li)
  li.append(deleteBtn)


  // event listeners
  deleteBtn.addEventListener('click', () => li.remove())
  
}
