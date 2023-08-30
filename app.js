const inputName = document.querySelector('#inputName')
const homeBtn = document.querySelector('#homeBtn')
const formHome = document.querySelector('#formHome')
const checkboxHome = document.querySelector('#checkboxHome')
const homePage = document.querySelector('#homePage')
const homeCard = document.querySelector('.homeCard')

setTimeout(() => {
    homeCard.classList.add('active')
}, 300);

let username = '';

formHome.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(inputName.value);

    // remove paragraf invalid input & redborder di input text
    // kalo sudah ada
    let invalidInput = document.querySelector('#invalidInput')
    if (invalidInput) {
        invalidInput.remove()
        inputName.classList.remove('inputRedBorder')
    }

    // kalo input valid & cekbox true
    if ( isUsernameValid(inputName.value) && checkboxHome.checked === true) {
        username = inputName.value
        // todo animation swipe
        homePage.classList.add('displaynone')
    }
    // kalo nama invalid
    else if ( !isUsernameValid(inputName.value) ) {
        let newElement = document.createElement('P')
        newElement.innerText = 'nama tidak valid!'
        newElement.classList.add('invalidInput')
        newElement.setAttribute('id', 'invalidInput')
        formHome.insertBefore(newElement, homeBtn)
        inputName.classList.add('inputRedBorder')
    }
    // kalo belum cek agreement
    else if ( checkboxHome.checked === false ) {
        let newElement = document.createElement('P')
        newElement.innerText = 'Acc dulu dongs'
        newElement.classList.add('invalidInput')
        newElement.setAttribute('id', 'invalidInput')
        formHome.insertBefore(newElement, homeBtn)
    }
})

// username only huruf or spasi
// username harus > 3
// return true / false
function isUsernameValid (user) {
    user = user.toLowerCase()
    if (user.length <= 3) return false
    let huruf = "abcdefghijklmnopqrstuvwxyz"
    
    for (let h = 0; h < user.length; h++) { //M
        let isVerify = false
        for (let i = 0; i < huruf.length; i++) { //m
            if (user[h] === huruf[i] || user[h] ===" ") {
                isVerify = true
                break;
            }
        }
        if ( !isVerify ) {
            return false
        }
    }
    return true
}