const texts = document.getElementsByClassName("text");
const color = [    "#fa5757", "#faa657","#fadf57", "#b9fa57", "#78fa57", "#57faa6", 
                    "#57faec", "#57befa", "#5788fa", "#9b57fa", "#9b57fa", "#e257fa", 
                    "#de6fbd", "#d1a1ed", "#b3cef5"];

for(var i=0; i<texts.length; i++) {
    const randInt = Math.floor(Math.random()*(color.length-1));
    texts[i].addEventListener("mouseover",(event)=>{
        event.target.style.color = color[randInt];
    })

    texts[i].addEventListener("mouseleave",(event)=>{
        event.target.style.color = "";
    })
}

if(window.location.href.indexOf("#contacts") > -1) {
    alert("You're in contacts");
}