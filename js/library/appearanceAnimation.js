// document.querySelector('content').style.opacity = 0;
// show('content', 20);

function smoothUprise(element, speed) { 

    let valueOpacity;

    let smooth = setInterval(function() {

        valueOpacity = Number(document.querySelector(element).style.opacity);

        if (valueOpacity>1) {
            clearInterval(smooth);
        }

        valueOpacity += 0.1; 

        document.querySelector(element).style.opacity = valueOpacity;

    }, speed);
}

function handlerSmoothScroll(elem, indent = 0) {
    const posElement = elem.offsetTop - indent;

    window.scrollTo({
        top: posElement,
        left: 0,
        behavior: 'smooth'
      });
}

export {smoothUprise, handlerSmoothScroll};