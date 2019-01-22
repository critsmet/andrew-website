document.addEventListener('DOMContentLoaded', (event) => {

  //current frame that the user is on
  let cP = 0

  function scroll(e){
    console.log(e)
    if (e.deltaY > 40){
      document.removeEventListener("wheel", scroll)
      scrollDirection("down")
      setTimeout(function(){
        document.addEventListener("wheel", scroll)
      }, 250)
    } else if (e.deltaY < -40) {
      document.removeEventListener("wheel", scroll)
      scrollDirection("up")
      setTimeout(function(){
        document.addEventListener("wheel", scroll)
      }, 250)
    }
  }

  function scrollDirection(direction){
    if (direction === "down"){
      console.log("down")
      switch (cP) {
        case 0:
          one.style.opacity = 1;
          pageOne()
          cP++
          break;
        case 1:
          cP++
          one.style.opacity = 0;
          setTimeout(function(){
            two.style.opacity = 1
            pageTwo()
          }, 500)
          break;
        case 2:
          cP++
          two.style.opacity = 0
          setTimeout(function(){
            three.style.opacity = 1
            pageThree()
          }, 500)
          break;
        case 3:
          cP++
          three.style.opacity = 0
          setTimeout(function(){
            four.style.opacity = 1
          }, 500)
          break;
        case 4:
          cP++
          four.style.opacity = 0
          setTimeout(function(){
            five.style.opacity = 1
          }, 500)
          break;
        case 5:
          cP++
          five.style.opacity = 0
          setTimeout(function(){
            six.style.opacity = 1
          }, 500)
          break;
          case 6:
            cP++
            six.style.opacity = 0
            setTimeout(function(){
              seven.style.opacity = 1
            }, 500)
            break;
        }
     } else if (direction === "up"){
      switch (cP) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          cP--
          two.style.opacity = 0;
          //need to add some clearTimeouts
          setTimeout(function(){
            one.style.opacity = 1
            pageOne()
          }, 500)
          break;
      case 3:
        cP--
        three.style.opacity = 0;
        //need to add some clearTimeouts
        setTimeout(function(){
          two.style.opacity = 1
          pageTwo()
        }, 500)
        break;
      case 4:
        cP--
        four.style.opacity = 0;
        //need to add some clearTimeouts
        setTimeout(function(){
          three.style.opacity = 1
        }, 500)
        break;
      }
    }
  }


  function pageOne(){
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

  function pageTwo(){
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
    console.log("HI");
  }



  document.addEventListener("wheel", scroll)

  setTimeout(function(){
    scrollDirection("down")
  }, 50)

})
