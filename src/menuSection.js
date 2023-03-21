import Salsiccia from './images/salsiccia.png'
import Gamberi from './images/gamberi.png'
import Pepe from './images/pepe.png'
import Disgustoso from './images/disgustoso.png'
import Colorato from './images/colorato.png'
import Pomodoro from './images/pomodoro.png'
import Crema from './images/crema.png'
import Carne from './images/carne.png'

const createMenuSection = () => {
  const menuSection = document.createElement('section')
  menuSection.className = 'menu-section'

  const innerContent = [
    {
      image: Salsiccia,
      title: 'Salsiccia',
      description: 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil',
    },
    {
      image: Gamberi,
      title: 'Gamberi',
      description: 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',
    },
    {
      image: Pepe,
      title: 'Pepe',
      description: 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil',
    },
    {
      image: Disgustoso,
      title: 'Disgustoso',
      description: 'Tomato sauce, Bacon, Pineapple, Olives, Basil',
    },
    {
      image: Colorato,
      title: 'Colorato',
      description: 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil',
    },
    {
      image: Pomodoro,
      title: 'Pomodoro',
      description: 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli',
    },
    {
      image: Crema,
      title: 'Crema',
      description: 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil',
    },
    {
      image: Carne,
      title: 'Carne',
      description: 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli',
    },
  ]

  for (let i = 0; i < innerContent.length; i += 1) {
    const { image, title, description } = innerContent[i]

    const article = document.createElement('article')
    article.className = 'menu-section__article'

    const articleImage = new Image()
    articleImage.src = image
    articleImage.className = 'menu-section__article-image'

    const articleTitle = document.createElement('h2')
    articleTitle.className = 'menu-section__article-title'
    articleTitle.textContent = title

    const articleDescription = document.createElement('p')
    articleDescription.className = 'menu-section__article-description'
    articleDescription.textContent = description

    article.append(articleImage, articleTitle, articleDescription)
    menuSection.append(article)
  }

  return menuSection
}

export default createMenuSection
