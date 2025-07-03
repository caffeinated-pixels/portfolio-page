const projects = [
  {
    name: 'NetFlix clone (Next.js/TS)',
    website: 'https://retrofix-nextjs.netlify.app',
    image: './images/retrofix.jpg',
    altText: 'Netflix clone screen grab',
  },
  {
    name: 'Weather App (React/TS)',
    website: 'https://caffeinated-weather.netlify.app/',
    image: './images/caffeinated-weather.jpg',
    altText: 'Weather app screen grab',
  },
  {
    name: 'Pac-man clone (TS)',
    website: 'https://mercboy-pacman.netlify.app/',
    image: './images/pacman.png',
    altText: 'Pacman game screen grab',
  },
  {
    name: 'Tetris (TS)',
    website: 'https://caffeinated-tetris.netlify.app/',
    image: './images/basic-tetris.jpg',
    altText: 'Tetris game screen grab',
  },
  {
    name: 'Snake Game (JS)',
    website: 'https://mercboy-snake.netlify.app/',
    image: './images/mercboy-snake.png',
    altText: 'snake game screen grab',
  },
  {
    name: 'Pomodoro (25+5) Clock (React)',
    website: 'https://caffeinated-pomodoro-clock.netlify.app/',
    image: './images/pomodoro-clock.jpg',
    altText: 'Pomodoro (25+5) Clock screen grab',
  },
  {
    name: 'JavaScript calculator (React/TS)',
    website: 'https://mercenary-calculator.netlify.app/',
    image: './images/javascript-calculator.jpg',
    altText: 'JavaScript calculator screen grab',
  },
  {
    name: 'To-do app (React/TS)',
    website: 'https://caffeinated-todo-app.netlify.app/',
    image: './images/to-do-app.png',
    altText: 'To-do app screen grab',
  },
  {
    name: 'Drum Machine (React)',
    website: 'https://merc-drum-machine.netlify.app/',
    image: './images/drum-machine.jpg',
    altText: 'Drum Machine screen grab',
  },
  {
    name: 'Markdown Previewer (React)',
    website: 'https://markup-my-markdown.netlify.app/',
    image: './images/markdown-previewer.jpg',
    altText: 'Markdown Previewer screen grab',
  },
  {
    name: 'Random Quote Machine (jQuery)',
    website: 'https://quote-o-matic-4000.netlify.app/',
    image: './images/random-quote-machine.jpg',
    altText: 'Random Quote Machine screen grab',
  },
  {
    name: 'Technical Documentation Page (HTML/CSS)',
    website: 'https://cssflex-tech-doc.netlify.app/',
    image: './images/technical-documentation-page.jpg',
    altText: 'Technical Documentation Page screen grab',
  },
  {
    name: 'Product Landing Page (HTML/CSS)',
    website: 'https://moonsorrow-industries.netlify.app/',
    image: './images/product-landing-page.jpg',
    altText: 'Product landing page project screen grab',
  },
  {
    name: 'Survey Form (HTML/CSS)',
    website: 'https://caffeinatedpixelsurveyform.netlify.app/',
    image: './images/survey-form.jpg',
    altText: 'Survey Form project screen grab',
  },
  {
    name: 'Wikipedia Viewer (jQuery)',
    website: 'https://codepen.io/cakeisaliegaming/full/aVXKpN',
    image: './images/wikipedia-viewer.jpg',
    altText: 'Wikipedia Viewer project screen grab',
  },
  {
    name: 'Tribute Page (HTML/CSS)',
    website: 'https://roquefort-tribute.netlify.app/',
    image: './images/tribute-page-roquefort.jpg',
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
