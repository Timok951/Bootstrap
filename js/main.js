
var number = 0;
var numbervideo = 0 ;
var buttons = 0;
function onClickButtonAddImage(el) {


    if (number == 0) {
        var newImage = document.createElement("img");
        newImage.src = "../img/AK74.jpeg";
        newImage.className = "image";
        var targetElement = document.getElementById("image_target"); 
        targetElement.appendChild(newImage);
        number = number +1;
    }

    else if (number == 1) {
        var secondImage = document.createElement("img");
        secondImage.src = "../img/MP5.jpg"; 
        secondImage.className = "image";
        var targetElement = document.getElementById("image_target");
        targetElement.appendChild(secondImage)
        number = number +1;
    }

    else if (number == 2) {
        var thirdImage = document.createElement("img");
        thirdImage.src = "../img/M16A2.jpg"; 
        thirdImage.className = "image";
        var targetElement = document.getElementById("image_target");
        targetElement.appendChild(thirdImage)
        number = number +1;
    }
    else
    {
        var targetElement = document.getElementById("image_target");
        var allimages = targetElement.querySelectorAll('div > img');
        allimages.forEach(function (image){
            image.remove(); 
        });
        number = 0;
    }

}

function OnClickButtonAddVideo(el){
     if (numbervideo == 0) {
        var newvideo = document.createElement("video");
        newvideo.src = "../video/Original Vietnam-Era M60 at the Range.mp4";
        var targetElement = document.getElementById("video_target"); 
        newvideo.autoplay = true;
        targetElement.appendChild(newvideo);
        numbervideo = number +1;
    }

    else if (numbervideo == 1) {
        var secondVidoe = document.createElement("video");
        secondVidoe.src = "../video/Shooting a Suppressed Sten Gun.mp4";
        var targetElement = document.getElementById("video_target"); 
        secondVidoe.autoplay = true;
        targetElement.appendChild(secondVidoe);
        numbervideo = numbervideo +1;
    }

    else
    {
        var targetElement = document.getElementById("video_target");
        var allvideo = targetElement.querySelectorAll('div > video');
        allvideo.forEach(function (video){
            video.remove(); 
        });
        numbervideo = 0;
    }

}

function AddButton(el){
     var newbutton = document.createElement("button");
        newbutton.setAttribute("type", "button");
        newbutton.setAttribute("class", "btn btn-primary");
        newbutton.innerHTML = "Add button";
        var targetElement = document.getElementById("button_target"); 
        targetElement.appendChild(newbutton);
        buttons = buttons +1;

        if (buttons > 4){
            var allbuttons = targetElement.querySelectorAll('div > button');
        allbuttons.forEach(function (button){
            button.remove(); 
        });
        buttons = 0;
        }
}
