const retrofixImg = new URL('/images/retrofix.webp', import.meta.url).href

const weatherImg = new URL('/images/caffeinated-weather.webp', import.meta.url)
  .href
const pacmanImg = new URL('/images/pacman.webp', import.meta.url).href
const tetrisImg = new URL('/images/basic-tetris.webp', import.meta.url).href
const snakeImg = new URL('/images/mercboy-snake.webp', import.meta.url).href
const pomodoroImg = new URL('/images/pomodoro-clock.webp', import.meta.url).href
const calculatorImg = new URL(
  '/images/javascript-calculator.webp',
  import.meta.url
).href
const todoImg = new URL('/images/to-do-app.webp', import.meta.url).href
const drumMachineImg = new URL('/images/drum-machine.webp', import.meta.url)
  .href
const markdownImg = new URL('/images/markdown-previewer.webp', import.meta.url)
  .href
const quoteMachineImg = new URL(
  '/images/random-quote-machine.webp',
  import.meta.url
).href
const techDocImg = new URL(
  '/images/technical-documentation-page.webp',
  import.meta.url
).href
const landingPageImg = new URL(
  '/images/product-landing-page.webp',
  import.meta.url
).href
const surveyFormImg = new URL('/images/survey-form.webp', import.meta.url).href
const wikiViewerImg = new URL('/images/wikipedia-viewer.webp', import.meta.url)
  .href
const tributePageImg = new URL(
  '/images/tribute-page-roquefort.webp',
  import.meta.url
).href

export const projects = [
  {
    name: 'NetFlix clone (Next.js/TS)',
    website: 'https://retrofix-nextjs.netlify.app',
    image: retrofixImg,
    altText: 'Netflix clone screen grab',
  },
  {
    name: 'Weather App (React/TS)',
    website: 'https://caffeinated-weather.netlify.app/',
    image: weatherImg,
    altText: 'Weather app screen grab',
  },
  {
    name: 'Pac-man clone (TS)',
    website: 'https://mercboy-pacman.netlify.app/',
    image: pacmanImg,
    altText: 'Pacman game screen grab',
  },
  {
    name: 'Tetris (TS)',
    website: 'https://caffeinated-tetris.netlify.app/',
    image: tetrisImg,
    altText: 'Tetris game screen grab',
  },
  {
    name: 'Snake Game (JS)',
    website: 'https://mercboy-snake.netlify.app/',
    image: snakeImg,
    altText: 'snake game screen grab',
  },
  {
    name: 'Pomodoro (25+5) Clock (React)',
    website: 'https://caffeinated-pomodoro-clock.netlify.app/',
    image: pomodoroImg,
    altText: 'Pomodoro (25+5) Clock screen grab',
  },
  {
    name: 'JavaScript calculator (React/TS)',
    website: 'https://mercenary-calculator.netlify.app/',
    image: calculatorImg,
    altText: 'JavaScript calculator screen grab',
  },
  {
    name: 'To-do app (React/TS)',
    website: 'https://caffeinated-todo-app.netlify.app/',
    image: todoImg,
    altText: 'To-do app screen grab',
  },
  {
    name: 'Drum Machine (React)',
    website: 'https://merc-drum-machine.netlify.app/',
    image: drumMachineImg,
    altText: 'Drum Machine screen grab',
  },
  {
    name: 'Markdown Previewer (React)',
    website: 'https://markup-my-markdown.netlify.app/',
    image: markdownImg,
    altText: 'Markdown Previewer screen grab',
  },
  {
    name: 'Random Quote Machine (jQuery)',
    website: 'https://quote-o-matic-4000.netlify.app/',
    image: quoteMachineImg,
    altText: 'Random Quote Machine screen grab',
  },
  {
    name: 'Technical Documentation Page (HTML/CSS)',
    website: 'https://cssflex-tech-doc.netlify.app/',
    image: techDocImg,
    altText: 'Technical Documentation Page screen grab',
  },
  {
    name: 'Product Landing Page (HTML/CSS)',
    website: 'https://moonsorrow-industries.netlify.app/',
    image: landingPageImg,
    altText: 'Product landing page project screen grab',
  },
  {
    name: 'Survey Form (HTML/CSS)',
    website: 'https://caffeinatedpixelsurveyform.netlify.app/',
    image: surveyFormImg,
    altText: 'Survey Form project screen grab',
  },
  {
    name: 'Wikipedia Viewer (jQuery)',
    website: 'https://codepen.io/cakeisaliegaming/full/aVXKpN',
    image: wikiViewerImg,
    altText: 'Wikipedia Viewer project screen grab',
  },
  {
    name: 'Tribute Page (HTML/CSS)',
    website: 'https://roquefort-tribute.netlify.app/',
    image: tributePageImg,
    altText: 'Tribute Page project screen grab',
  },
]
