import $ from 'jquery'
import retrofixImg from '/images/retrofix.webp'
import weatherImg from '/images/caffeinated-weather.webp'
import pacmanImg from '/images/pacman.webp'
import tetrisImg from '/images/basic-tetris.webp'
import snakeImg from '/images/mercboy-snake.webp'
import pomodoroImg from '/images/pomodoro-clock.webp'
import calculatorImg from '/images/javascript-calculator.webp'
import todoImg from '/images/to-do-app.webp'
import drumMachineImg from './images/drum-machine.webp'
import markdownImg from './images/markdown-previewer.webp'
import quoteMachineImg from './images/random-quote-machine.webp'
import techDocImg from './images/technical-documentation-page.webp'
import landingPageImg from './images/product-landing-page.webp'
import surveyFormImg from './images/survey-form.webp'
import wikiViewerImg from './images/wikipedia-viewer.webp'
import tributePageImg from './images/tribute-page-roquefort.webp'

const projects = [
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

$(function () {
  //start document ready function

  let projectGridHTML = ''

  projects.forEach((project) => {
    const html = `
      <div class="project-tile">
        <a href="${project.website}">
          <img
            class="tile-img"
            src="${project.image}"
            alt="${project.altText}"
          />
          <p class="center-text">${project.name}</p>
        </a>
      </div>
    `
    projectGridHTML += html
  })

  $('#project-grid').html(projectGridHTML)

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault()
    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top + -75,
      },
      1000
    )
  }) // offsets anchor by 75px (size of the header) and adds in scroll animation

  // click hander for burger btn and nav-links on smaller screens; toggles dropdown menu
  $('.burger-btn, .nav-link').on('click', (event) => {
    event.preventDefault()

    // check window size so only executed on smaller screens
    if ($(window).width() <= 768) {
      $('.nav-list').slideToggle(250)
    }
  })

  // the click handler above adds a display style attr to .nav-list, which can cause problems when enlarging the window (i.e. the menu items dissappear!). This event listener removes that attr when window > 1024px
  $(window).resize(() => {
    if ($(window).width() > 768) {
      $('.nav-list').removeAttr('style')
    }
  })
}) //end of document ready
