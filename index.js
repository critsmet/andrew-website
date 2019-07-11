document.addEventListener('DOMContentLoaded', (event) => {

  //current frame that the user is on
  let cP = 0
  let loading

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

  function scrollDirection(direction){
    if (direction === "down"){
      console.log("down", cP)
      switch (cP) {
        case 0:
          cP++
          about.style.opacity = 1;
          about.style.zIndex = 1
          setTimeout(function(){
            andrewrussell.style.opacity = 1
            bio.style.opacity = 1
          }, 750)
          break;
        case 1:
          cP++
          about.style.opacity = 0;
          about.style.zIndex = -1
          setTimeout(function(){
            walkincontainer.style.opacity = 1
            walkincontainer.style.zIndex = 1
            walkIn()
          }, 500)
          break;
        case 2:
          cP++
          walkincontainer.style.opacity = 0
          walkincontainer.style.zIndex = -1
          setTimeout(function(){
            storys.style.opacity = 1
            storys.style.zIndex = 1
            storySlide()
          }, 500)
          break;
        case 3:
          cP++
          storys.style.opacity = 0
          storys.style.zIndex = -1
          setTimeout(function(){
            iama.style.opacity = 1
            iama.style.zIndex = 1
            iAmASlide()
          }, 500)
          break;
        case 4:
          cP++
          iama.style.opacity = 0
          iama.style.zIndex = -1
          setTimeout(function(){
            believeme.style.opacity = 1
            believeme.style.zIndex = 1
            believeMeSlide()
          }, 500)
          break;
        // case 5:
        //   cP++
        //   believeme.style.opacity = 0
        //   setTimeout(function(){
        //     doyou.style.opacity = 1
        //     doYouSlide()
        //   }, 500)
        //   break;
        case 5:
          cP++
          believeme.style.opacity = 0
          believeme.style.zIndex = -1
          setTimeout(function(){
            dreams.style.opacity = 1;
            dreams.style.zIndex = 1
          }, 500)
          break;
        case 6:
          cP++
          dreams.style.opacity = 0
          dreams.style.zIndex = -1
          setTimeout(function(){
            feather.style.opacity = 1
            feather.style.zIndex = 1
            featherSlide()
          }, 500)
          break;
        case 7:
          cP = 1
          feather.style.opacity = 0
          feather.style.zIndex = -1
        setTimeout(function(){
          about.style.zIndex = 1
          about.style.opacity = 1;
          andrewrussell.style.opacity = 1
          bio.style.opacity = 1
        }, 500)
        default:
          break;
        }
     } else if (direction === "up"){
       console.log("up", cP)
      switch (cP) {
        case 1:
          break;
        case 2:
          cP--
          walkincontainer.style.opacity = 0
          walkincontainer.style.zIndex = -1
          setTimeout(function(){
            about.style.opacity = 1;
            about.style.zIndex = 1
          }, 250)
          setTimeout(function(){
            andrewrussell.style.opacity = 1
            bio.style.opacity = 1
          }, 750)
          break;
        case 3:
          cP--
          storys.style.opacity = 0
          storys.style.zIndex = -1
          setTimeout(function(){
            walkincontainer.style.opacity = 1
            walkincontainer.style.zIndex = 1
            walkIn()
          }, 500)
          break;
        case 4:
          cP--
          iama.style.opacity = 0
          iama.style.zIndex = -1
          setTimeout(function(){
            storys.style.opacity = 1
            storys.style.zIndex = 1
            storySlide()
          }, 500)
          break;
        case 5:
          cP--
          believeme.style.opacity = 0
          believe.style.zIndex = -1
          setTimeout(function(){
            iama.style.opacity = 1
            iama.style.zIndex = 1
            iAmASlide()
          }, 500)
          break;
        case 6:
        cP--
          dreams.style.opacity = 0
          dreams.style.zIndex = -1
          setTimeout(function(){
            believeme.style.opacity = 1
            believeme.style.opacity = 1
            believeMeSlide()
          }, 500)
          break;
        case 7:
          cP--
          feather.style.opacity = 0
          feather.style.zIndex = -1
          setTimeout(function(){
            dreams.style.opacity = 1;
            dreams.style.opacity = 1
          }, 500)
          break;
        default:
          break;
        }
      }
    }


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
  }

  function believeMeSlide(){
    setTimeout(function(){
      could.style.opacity = 1
    }, 500)
    setTimeout(function(){
      away.style.opacity = 1
    }, 1500)
    setTimeout(function(){
      cannot.style.opacity = 1
    }, 3000)
  }

  function doYouSlide(){
    setTimeout(function(){
      gate.style.opacity = 1
    }, 500)
    setTimeout(function(){
      come.style.opacity = 1
    }, 2000)
    setTimeout(function(){
      stay.style.opacity = 1
    }, 3500)
    setTimeout(function(){
      time.style.opacity = 1
    }, 5000)
    setTimeout(function(){
      boiled.style.opacity = 1
    }, 6500)
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
  }

  function showModal(){
    console.log("clicked")
    modal.style.opacity = 1
    modal.style.zIndex = 1000
  }


  // contact.addEventListener("click", showModal)
  document.addEventListener("wheel", scroll)

  setTimeout(function(){
    scrollDirection("down")
  }, 50)

})
