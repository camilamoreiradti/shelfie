const saveButton = document.querySelectorAll('.save-item')
const filterType = document.querySelectorAll('.filter-item') 
const navSearchBtn = document.querySelector('#search')
const navSavedBtn = document.querySelector('#search')

const toggleLike = (element) => element.classList.toggle('selected')
const selectFilter = (element) => element.classList.toggle('selected')

saveButton.forEach((element) => element.addEventListener('click', () => toggleLike(element)))
filterType.forEach((element) => element.addEventListener('click', () => selectFilter(element)))