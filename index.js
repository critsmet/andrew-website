document.addEventListener('DOMContentLoaded', () => {

    let lastScrollTop = 0;
    let panel = 1;

    window.addEventListener("scroll", function(){
        let  st = window.pageYOffset;
        if (st > lastScrollTop){
            scrollUp()
            panel++;
        }
        else {
            panel == 0 ? null : panel--
        }
    })

    function scrollUp(){
        switch (panel){
            case 1:
            splashtext.classList.add("hide");
            
        }
    }


})