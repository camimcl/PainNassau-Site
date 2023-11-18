const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous")


nextButton.addEventListener('click',nextSlide)
previousButton.addEventListener('click',previousSlide)
let currentImage = 0;

function nextSlide(){
    if(currentImage<4){
        currentImage++;
        // document.getElementById("content-holder").style.transform ="translateX(-"+(currentImage*100)+"%)";
        document.getElementById("content-holder").style.transform = `translateX(-${currentImage*100}%)`
    }
}
function previousSlide(){
    if(currentImage>0){
        currentImage--;
        document.getElementById("content-holder").style.transform =`translateX(-${currentImage*100}%)`
    }
}
