const createHeader = () => {
  const header = document.createElement('header')
  const headerTitle = document.createElement('h1');

  // HEADER NAV START
  const headerNavigation = document.createElement('nav')
  const btnNames = ['home', 'menu', 'contact']
  for (let i = 0; i < 3; i += 1) {
    const navigationBtn = document.createElement('button')
    navigationBtn.className = 'header__btn'
    navigationBtn.textContent = btnNames[i]
    headerNavigation.append(navigationBtn)
  }
  // HEADER NAV END

  header.className = 'header'
  headerTitle.className = 'header__title'
  headerTitle.textContent = 'Mozzafiato'

  headerNavigation.className = 'header__nav'
  headerNavigation.firstChild.classList.add('header__btn_active')

  header.append(headerTitle)
  header.append(headerNavigation)

  return header
}

export default createHeader
