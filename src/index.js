// STYLES
import './style.css'

// LAYOUT
import header from './header'
import main from './mains'
import footer from './footer'

// SECTIONS
import home from './homeSection'
import menu from './menuSection'
import contact from './contactSection'

const createPage = () => {
  const content = document.createElement('div')

  content.className = 'content'

  const headerContent = header()
  const mainContent = main()
  const footerContent = footer()

  const homeSection = home()
  const menuSection = menu()
  const contactSection = contact()

  mainContent.append(homeSection)

  const changeMainState = (e) => {
    const button = e.target
    if (button.classList.contains('header__btn_active')) return
    mainContent.innerHTML = ''
    document.querySelector('.header__btn_active').classList.remove('header__btn_active')
    button.classList.add('header__btn_active')
    if (button.textContent === 'home') {
      mainContent.append(homeSection)
    } else if (button.textContent === 'menu') {
      mainContent.append(menuSection)
    } else {
      mainContent.append(contactSection)
    }
  }

  const navButtons = headerContent.querySelectorAll('.header__btn')
  navButtons.forEach((button) => button.addEventListener('click', changeMainState))

  content.append(headerContent)
  content.append(mainContent)
  content.append(footerContent)

  return content
}

document.body.append(createPage())
