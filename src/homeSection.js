import Cook from './images/cook.jpg'

const createHomeSection = () => {
  const homeSection = document.createElement('section')
  homeSection.className = 'home-section'

  const cookImage = new Image()
  cookImage.src = Cook
  cookImage.className = 'home-section__cook'

  const texts = ['Best pizza in your country', 'Made with passion since 1908', 'Order online or visit us!']
  for (let i = 0; i < texts.length; i += 1) {
    const paragraph = document.createElement('p')
    paragraph.textContent = texts[i]
    paragraph.className = 'home-section__text'
    homeSection.append(paragraph)
  }

  homeSection.insertBefore(cookImage, homeSection.lastElementChild)

  return homeSection
}

export default createHomeSection
