const savat = document.querySelector('.savat')
const openbox = document.querySelector('.openbox2')
const hero1 = document.querySelector('.hero')
const btnx = document.querySelector('.btnx')
const body = document.querySelector('body')
const nav3 = document.querySelector('.nav3')

savat.addEventListener('click', () => {
    openbox.style.display = 'block'
    openbox.style.position = 'fixed'
    openbox.style.right = 0
    openbox.style.top = 0
    hero1.style.filter = 'blur(2px)'
    body.style.position = 'fixed'

})
btnx.addEventListener('click', () => {
    openbox.style.display = 'none'
    hero1.style.filter = 'blur(0px)'
    body.style.position = 'sticky'
})

const ooo = document.querySelector('.ooo')
const navvv = document.querySelector('.navvv')

window.addEventListener('scroll', () => {
    if(window.scrollY > 1000)  {
  navvv.style.position = 'fixed'
  navvv.style.top = 0

} else {
    navvv.style.position = 'relative'
    navvv.style.top = '120px'

}
})