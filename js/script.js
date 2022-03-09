// @ts-nocheck

window.addEventListener('load', () => {
  // PAGE LOADER
  document.querySelector('.page-loader').classList.add('fade-out')
  setTimeout(() => {
    document.querySelector('.page-loader').style.display = 'none'
  }, 600)

  // AOS LIBRARY (Animation On Scroll) : https://michalsnik.github.io/aos/
  AOS.init()
})

// TOGGLE NAVBAR
const btnNavToggler = document.querySelector('.btn-nav-toggler')
btnNavToggler.addEventListener('click', toggleNav)
const nav = document.querySelector('.nav')

function toggleNav() {
  btnNavToggler.classList.toggle('active')
  nav.classList.toggle('open')
}

// CLOSE NAV WHEN CLICKING ON A NAV ITEM
document.addEventListener('click', (e) => {
  if (e.target.closest('.nav-item')) {
    toggleNav()
  }
})

// STICKY HEADER
const header = document.querySelector('.header')

window.addEventListener('scroll', function () {
  if (this.scrollY > 60) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
})

// MENU TABS
const menuTabs = document.querySelector('.menu-tabs')

menuTabs.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('menu-tab-item') &&
    !e.target.classList.contains('active')
  ) {
    const target = e.target.getAttribute('data-target')
    // console.log(target)
    const tabWithActive = menuTabs.querySelector('.active')
    tabWithActive.classList.remove('active')
    e.target.classList.add('active')

    const menuSection = document.querySelector('.menu-section')
    const menuTabContentWithActive = menuSection.querySelector(
      '.menu-tab-content.active'
    )
    menuTabContentWithActive.classList.remove('active')
    menuSection.querySelector(target).classList.add('active')

    // AOS LIBRARY (Animation On Scroll)
    AOS.init()
  }
})
