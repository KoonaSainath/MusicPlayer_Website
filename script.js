var numberOfSongs = document.querySelectorAll(".img").length;

for(var i = 0; i < numberOfSongs; i++){
    document.querySelectorAll(".img")[i].addEventListener("click" , songImageClicked);
}

document.addEventListener("keypress" , keyboardKeyPressed);

function songImageClicked(){
    playSong(this.textContent);
}

function keyboardKeyPressed(event){
    switch(event.key){
        case "0":
            playSong("I can't get enough");
            break;
        case "1":
            playSong("Shape of you");
            break;
        case "2":
            playSong("Lily");
            break;
        case "3":
            playSong("Mad at disney");
            break;
        case "4":
            playSong("Make you mine");
            break;
        case "5":
            playSong("Maps");
            break;
        case "6":
            playSong("Safari");
            break;
        case "7":
            playSong("Take you dancing");
            break;
        case "8":
            playSong("Willow");
            break;
        case "9":
            playSong("Without me");
            break;
        default:

    }
}

function playSong(song){
    switch(song){
        case "I can't get enough":
            var songToPlay = new Audio("sounds/i_cant_get_enough.mp3");
            songToPlay.play();
            break;
        case "Shape of you":
            var songToPlay = new Audio("sounds/shape_of_you.mp3");
            songToPlay.play();
            break;
        case "Lily":
            var songToPlay = new Audio("sounds/lily.mp3");
            songToPlay.play();
            break;
        case "Mad at disney":
            var songToPlay = new Audio("sounds/mad_at_disney.mp3");
            songToPlay.play();
            break;
        case "Make you mine":
            var songToPlay = new Audio("sounds/make_you_mine.mp3");
            songToPlay.play();
            break;
        case "Maps":
            var songToPlay = new Audio("sounds/maps.mp3");
            songToPlay.play();
            break;
        case "Safari":
            var songToPlay = new Audio("sounds/safari.mp3");
            songToPlay.play();
            break;
        case "Take you dancing":
            var songToPlay = new Audio("sounds/take_you_dancing.mp3");
            songToPlay.play();
            break;
        case "Willow":
            var songToPlay = new Audio("sounds/willow.mp3");
            songToPlay.play();
            break;
        case "Without me":
            var songToPlay = new Audio("sounds/without_me.mp3");
            songToPlay.play();
            break;
        default:
            var songToPlay = new Audio("sounds/lily.mp3");
            songToPlay.play();
    }
}