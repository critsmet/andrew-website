document.addEventListener('DOMContentLoaded', (event) => {

  //current frame that the user is on
  let page = window.location.href[window.location.href.length - 1]
  let cP = page == "l" ? 1 : parseInt(page)
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
      console.log("down")
      switch (cP) {
        case 1:
          console.log(scroll, one)
          one.style.opacity = 1;
          cP++
          break;
        case 2:
          cP++
          one.style.opacity = 0;
          setTimeout(function(){
            two.style.opacity = 1
            pageTwo()
          }, 500)
          break;
        case 3:
          cP++
          two.style.opacity = 0
          setTimeout(function(){
            three.style.opacity = 1
            pageThree()
          }, 500)
          break;
        case 4:
          cP++
          three.style.opacity = 0
          setTimeout(function(){
            four.style.opacity = 1
            pageFour()
          }, 500)
          break;
        case 5:
          cP++
          four.style.opacity = 0
          setTimeout(function(){
            five.style.opacity = 1
          }, 500)
          break;
        case 6:
          cP++
          five.style.opacity = 0
          setTimeout(function(){
            six.style.opacity = 1
            pageSix()
          }, 500)
          break;
        case 7:
          cP++
          six.style.opacity = 0
          setTimeout(function(){
            seven.style.opacity = 1
            pageSeven()
          }, 500)
          break;
        case 8:
          cP++
          seven.style.opacity = 0
          setTimeout(function(){
            eight.style.opacity = 1
          }, 500)
          break;
        case 9:
          cP++
          eight.style.opacity = 0
          setTimeout(function(){
            nine.style.opacity = 1
          }, 500)
          break;
        default:
        break;
        }
     } else if (direction === "up"){
      switch (cP) {
        case 2:
          break;
        case 3:
          cP--
          two.style.opacity = 0;
          //need to add some clearTimeouts
          setTimeout(function(){
            one.style.opacity = 1
            pageOne()
          }, 500)
          break;
      case 4:
        cP--
        three.style.opacity = 0;
        //need to add some clearTimeouts
        setTimeout(function(){
          two.style.opacity = 1
          pageTwo()
        }, 500)
        break;
      case 5:
        cP--
        four.style.opacity = 0;
        //need to add some clearTimeouts
        setTimeout(function(){
          three.style.opacity = 1
        }, 500)
        break;
      case 6:
        cP--
        five.style.opacity = 0;
        //need to add some clearTimeouts
        setTimeout(function(){
          four.style.opacity = 1
        }, 500)
        break;
      case 7:
        cP--
        six.style.opacity = 0;
        //need to add some clearTimeouts
        setTimeout(function(){
          five.style.opacity = 1
        }, 500)
        break;
      case 8:
        cP--
        seven.style.opacity = 0;
        //need to add some clearTimeouts
        setTimeout(function(){
          six.style.opacity = 1
        }, 500)
        break;
      case 9:
        cP--
        eight.style.opacity = 0;
        setTimeout(function(){
          seven.style.opacity = 1
        }, 500)
        break;
      case 10:
        cP--
        nine.style.opacity = 0;
        setTimeout(function(){
          eight.style.opacity = 1
        }, 500)
        break;
      }
    }
  }


  function pageTwo(){
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

  function pageDash(){
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

  function pageThree(){
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

  function pageFour(){
    setTimeout(function(){
      believe.style.opacity = 1
    }, 500)
    setTimeout(function(){
      could.style.opacity = 1
    }, 2000)
    setTimeout(function(){
      away.style.opacity = 1
    }, 3000)
    setTimeout(function(){
      cannot.style.opacity = 1
    }, 5000)
  }

  function pageSix(){
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

  function pageSeven(){
    setTimeout(function(){
      evolve.style.opacity = 1
    }, 500)
    setTimeout(function(){
      down.style.opacity = 1
    }, 2500)
  }

  function showModal(){
    console.log("clicked")
    modal.style.opacity = 1
    modal.style.zIndex = 1000
  }


  contact.addEventListener("click", showModal)
  document.addEventListener("wheel", scroll)

  setTimeout(function(){
    scrollDirection("down")
  }, 50)

})
