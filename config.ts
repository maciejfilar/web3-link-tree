// Leave unwanted fields equal to undefined.
// Web3 Link Tree will handle the rest (🔗, 🌲)

// Set 'wallet' to undefined if you wish to disable the Tipping feature
export const DETAILS = {
  name: 'Maciej',
  header: 'Maciej.eth',
  headerlink: 'https://twitter.com/FilarMaciej',
  wallet: '0x0c24D64f0E15349be987342C1443151028783dc0'
}

// Import Background Image here 👇
import bg from './images/bg.png'
export const BG = bg;

// Import Logo Image here 👇
import logo from './images/logo.jpg'
export const LOGO = logo;

import btn_twitter from './images/btn_twitter.jpg'
import btn_medium from './images/btn_insta.jpg'
// Import Button Images here 👆

// Buttons are best as 1500x500px images!
// Upload your image to twitter as a header,
// then save your image and drag it in the /images/ folder.

// To include a footer icon: Give 'link' a value
// To include a button: Give 'button' your imported image value
export const TWITTER = {
  link: 'https://twitter.com/FilarMaciej',
  button: btn_twitter
}

export const MEDIUM = {
  link: 'https://www.instagram.com/matt_filar/',
  button: btn_medium
}

export const GITHUB = {
  link: undefined,
  button: undefined
}

export const DISCORD = {
  link: undefined,
  button: undefined
}

export const SUBSTACK = {
  link: undefined,
  button: undefined
}

export const ABOUT = {
  title: 'Who is Maciej?',
  text: 'Satoshi Nakamoto'
}
export const ABOUT2 = {
  title: undefined,
  text: undefined
}
export const ABOUT3 = {
  title: undefined,
  text: undefined
}
export const ABOUT4 = {
  title: undefined,
  text: undefined
}
export const ABOUT5 = {
  title: undefined,
  text: undefined
}

export const TITLE = `${DETAILS.name}'s Web3 Link Tree`