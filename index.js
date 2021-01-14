//if the site is being viewed on a smaller device, do not load any photos to increase load speed
if (screen.width < 900){
  beginSite()
} else {
  //if the site is being viewed on a larger device, wait until the main photo has loaded
  let aboutSlideBackgroundImage = new Image()
  aboutSlideBackgroundImage.src = "https://res.cloudinary.com/apostrophe/image/upload/q_50/v1610421553/AndyK/andykedited.jpg"
  aboutSlideBackgroundImage.onload = () => {
    about.style.backgroundImage = "url('https://res.cloudinary.com/apostrophe/image/upload/q_50/v1610421553/AndyK/andykedited.jpg')"
    //once main photo has loaded, show the first slide
    beginSite()
    //then load the photos for the other slides (speeds up initial loading time of application, see note above addBackgroundImageUrlsToSlides function)
    addBackgroundImageUrlsToSlides()
  }
}

//initial scroll down to show the first page
function beginSite(){
  setTimeout(function(){
    currentSlide++
    show(about)
    setTimeout(function(){
      andrewrussell.style.opacity = 1
      bio.style.opacity = 1
      showArrow()
    }, 750)
  }, 50)
}

//originally the application waited for all images to load before beginning, but this caused about a 2-5 second delay before the visitor saw the first slide
//loading and caching the first photo, then displaying the first slide, and THEN loading the photos for the other slides creates a faster load time for the first page and better user experience
function addBackgroundImageUrlsToSlides(){
  storys.style.backgroundImage = "url('https://res.cloudinary.com/apostrophe/image/upload/v1610421627/AndyK/j_criscitello_golden_roses.jpg')"
  iama.style.backgroundImage = "url('https://res.cloudinary.com/apostrophe/image/upload/v1610421635/AndyK/telephones.png')"
  walkaway.style.backgroundImage = "url('https://res.cloudinary.com/apostrophe/image/upload/v1610421620/AndyK/studded_belt.jpg')"
  dreams.style.backgroundImage = "url('https://res.cloudinary.com/apostrophe/image/upload/q_10/v1610421630/AndyK/lamb_swan.png')"
  feather.style.backgroundImage = "url('https://res.cloudinary.com/apostrophe/image/upload/v1610421620/AndyK/feather.jpg')"
}

//basic transition functionality of the app.
//"scroll" is the name of the function that changes the DOM to give the user the sensation of 'scrolling' to change slides
document.addEventListener("wheel", scroll)
mail.addEventListener("click", showModal)
closemodal.addEventListener("click", hideModal)
send.addEventListener("click", sendEmail)
arrow.addEventListener("click", () => scrollDirection("down"))

//handles the event to determine direction of slide change
function scroll(e){
  if (e.deltaY > 40){
    document.removeEventListener("wheel", scroll)
    scrollDirection("down")
    setTimeout(function(){
      document.addEventListener("wheel", scroll)
    }, 1000)
  } else if (e.deltaY < -40) {
    document.removeEventListener("wheel", scroll)
    scrollDirection("up")
    setTimeout(function(){
      document.addEventListener("wheel", scroll)
    }, 1000)
  }
}

function showArrow(){
  setTimeout(() => {
    arrow.style.opacity = 1
    arrow.style.zIndex = 2
    arrow.classList.value = "ready"
  }, 1000)
}

function hideArrow(){
  arrow.style.opacity = 0
  arrow.classList.value = ""
}

function showModal(){
  disableScroll = true
  hideArrow()
  dim(about)
  setTimeout(() => show(modal), 250)
}

function dim(element){
  element.style.opacity = .25
  element.style.zIndex = 0
}

function hideModal(){
  disableScroll = false
  showArrow()
  modal.style.opacity = 0
  show(about)
  setTimeout(() => {
    modal.style.zIndex = -1
    email.value = ""
    sender.value = ""
    message.value = ""
  }, 500)
}

function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "heyheyandyk@gmail.com",
    //passwords aren't supposed to be stored here but we're using GitHub pages to host :(
    //pretty low-risk information, no credit cards or personal info associated etc.
    Password : "c901c492-9ae1-477a-98cc-4f04ab4320e3",
    To : "heyheyandyk@gmail.com",
    From : "heyheyandyk@gmail.com",
    ReplyAddress : email.value,
    Subject : `Hey Hey! A Message From ${sender.value}`,
    Body : message.value
  })
  .then(hideModal);
}

//currentSlide is at 0 only when the user first visits the page and never after
let currentSlide = 0

//when modal is turned on, scroll will be disabled
let disableScroll = false

//disable scroll when modal is open or screen is small
function scrollEnabled() {
  return (disableScroll || (screen.width <= 900) ? false : true)
}

//functions for showing or hiding elements in the switch below
function hide(element){
  element.style.opacity = 0
  element.style.zIndex = -1
}

function show(element){
  element.style.opacity = 1
  element.style.zIndex = 1
}

function scrollDirection(direction){
  if (scrollEnabled()){
    if (direction === "down" ){
      switch (currentSlide) {
        case 1:
        currentSlide++
        hideArrow()
        hide(about)
        setTimeout(function(){
          show(walkincontainer)
          walkIn()
        }, 500)
        break;
        case 2:
        currentSlide++
        hideArrow()
        hide(walkincontainer)
        setTimeout(function(){
          show(storys)
          storySlide()
        }, 500)
        break;
        case 3:
        currentSlide++
        hideArrow()
        hide(storys)
        setTimeout(function(){
          show(iama)
          iAmASlide()
        }, 500)
        break;
        case 4:
        currentSlide++
        hideArrow()
        hide(iama)
        setTimeout(function(){
          show(walkaway)
          walkAwaySlide()
        }, 500)
        break;
        case 5:
        currentSlide++
        hideArrow()
        hide(walkaway)
        setTimeout(function(){
          show(dreams)
        }, 500)
        setTimeout(function(){
          showArrow()
        }, 2500)
        break;
        case 6:
        currentSlide++
        hideArrow()
        hide(dreams)
        setTimeout(function(){
          show(feather)
          featherSlide()
        }, 500)
        break;
        case 7:
        currentSlide = 1
        hideArrow()
        hide(feather)
        setTimeout(function(){
          show(about)
          andrewrussell.style.opacity = 1
          bio.style.opacity = 1
          showArrow()
        }, 500)
        default:
        break;
      }
    } else if (direction === "up"){
      switch (currentSlide) {
        case 1:
        break;
        case 2:
        currentSlide--
        hideArrow()
        hide(walkincontainer)
        setTimeout(function(){
          show(about)
        }, 250)
        setTimeout(function(){
          andrewrussell.style.opacity = 1
          bio.style.opacity = 1
        }, 750)
        break;
        case 3:
        currentSlide--
        hideArrow()
        hide(storys)
        setTimeout(function(){
          show(walkincontainer)
          walkIn()
        }, 500)
        break;
        case 4:
        currentSlide--
        hideArrow()
        hide(iama)
        setTimeout(function(){
          show(storys)
          storySlide()
        }, 500)
        break;
        case 5:
        currentSlide--
        hideArrow()
        hide(walkaway)
        setTimeout(function(){
          show(iama)
          iAmASlide()
        }, 500)
        break;
        case 6:
        currentSlide--
        hideArrow()
        hide(dreams)
        setTimeout(function(){
          show(walkaway)
          walkAwaySlide()
        }, 500)
        break;
        case 7:
        currentSlide--
        hideArrow()
        hide(feather)
        setTimeout(function(){
          show(dreams)
        }, 500)
        break;
        default:
        break;
      }
    }
  }
}

//custom effect timings
function walkIn(){
  setTimeout(function(){
    walk.style.opacity = 1
  }, 500)
  setTimeout(function(){
    sit.style.opacity = 1
  }, 1500)
  setTimeout(function(){
    like.style.opacity = 1
  }, 2500)
  setTimeout(function(){
    showArrow()
  }, 2500)
}

function storySlide(){
  setTimeout(function(){
    story.style.opacity = 1
  }, 500)
  setTimeout(function(){
    smile.style.opacity = 1
  }, 2000)
  setTimeout(function(){
    real.style.opacity = 1
  }, 3500)
  setTimeout(function(){
    showArrow()
  }, 3500)
}

function iAmASlide(){
  setTimeout(function(){
    storyteller.style.opacity = 1
  }, 500)
  setTimeout(function(){
    piece.style.opacity = 1
  }, 2000)
  setTimeout(function(){
    shape.style.opacity = 1
  }, 3500)
  setTimeout(function(){
    showArrow()
  }, 2500)
}

function walkAwaySlide(){
  setTimeout(function(){
    could.style.opacity = 1
  }, 500)
  setTimeout(function(){
    away.style.opacity = 1
  }, 1500)
  setTimeout(function(){
    cannot.style.opacity = 1
  }, 3000)
  setTimeout(function(){
    showArrow()
  }, 3000)
}

function featherSlide(){
  setTimeout(function(){
    the.style.opacity = 1
  }, 1250)
  setTimeout(function(){
    model.style.opacity = 1
  }, 1750)
  setTimeout(function(){
    is.style.opacity = 1
  }, 2500)
  setTimeout(function(){
    the2.style.opacity = 1
  }, 3000)
  setTimeout(function(){
    mission.style.opacity = 1
  }, 3250)
  setTimeout(function(){
    showArrow()
  }, 3250)
}
