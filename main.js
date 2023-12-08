const selectModal = document.querySelector('[data-modal]')
const successModal = document.querySelector('[data-modal-success]')
const book = document.querySelector('#book')
const openModal = document.querySelector('.back')
const closeModal = document.querySelector('.close-modal-img')
const closeSuccess = document.querySelector('.close-success')
const chooses = document.querySelectorAll('.chose')
const openSuccesses = document.querySelectorAll('.open-success')
const conts = document.querySelectorAll('.cont')
const hamburger = document.querySelector('#hamburger')
const navbar = document.querySelector('.navbar')

hamburger.onclick = () => {
    hamburger.classList.toggle('active')
    navbar.classList.toggle('active-nav')
}

book.onclick = () => {
    if(book.innerText === 'Bookmark'){
        book.innerText = 'Bookmarked'
    }else{
        book.innerText = 'Bookmark'
    }
}

openModal.onclick =  () => selectModal.showModal()
closeModal.onclick = () => selectModal.close()

openSuccesses.forEach(openSuccess => {
    openSuccess.onclick = () => successModal.showModal()
})
closeSuccess.onclick = () => successModal.close()

chooses.forEach(chose => {
    chose.onclick = () => {
        chooses.forEach(c => {
            c.classList.remove("chosen")
        })
        conts.forEach(cont => {
            cont.classList.remove('chosen-cont');
        })
        chose.classList.add('chosen')
        chose.parentElement.parentElement.parentElement.classList.add('chosen-cont');
    }
})