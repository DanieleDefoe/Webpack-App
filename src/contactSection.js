import Phone from './images/telephone.svg'
import Location from './images/location.svg'
import RetaurantLocation from './images/restaurant-location.png'

const createContactSection = () => {
  const contact = document.createElement('section')
  contact.className = 'contact-section'

  const numberContainer = document.createElement('div')
  numberContainer.className = 'contact-section__number'

  const phoneNumber = document.createElement('p')
  phoneNumber.className = 'contact-section__number-text'
  phoneNumber.textContent = '8 499 673 23 85'

  const phoneImage = new Image()
  phoneImage.className = 'contact-section__number-image'
  phoneImage.src = Phone

  numberContainer.append(phoneImage, phoneNumber)

  const locationContainer = document.createElement('div')
  locationContainer.className = 'contact-section__number'

  const locationText = document.createElement('p')
  locationText.className = 'contact-section__number-text'
  locationText.textContent = 'Hollywood Boulevard 42, Los Angeles, USA'

  const locationImage = new Image()
  locationImage.className = 'contact-section__number-image'
  locationImage.src = Location

  locationContainer.append(locationImage, locationText)

  const resaturantLocation = new Image()
  resaturantLocation.className = 'contact-section__image'
  resaturantLocation.src = RetaurantLocation

  contact.append(numberContainer, locationContainer, resaturantLocation)
  return contact
}

export default createContactSection
