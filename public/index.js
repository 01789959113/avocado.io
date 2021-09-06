console.log("this is");
console.log($)

// fixed navbar
let navbar = document.querySelector(".navbar");
window.onscroll = function () {
    myFunction();
};

function myFunction() {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// image gallery using jQuery
$(document).ready(function () {

    // image gallery
    $('.images').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: { enabled: true }
    });

      // count in about 
      $('.count').counterUp({
        delay: 10,
        time: 3000
    });
})

// selecting all the latest project projects id

// seleting all the latest project
let latest_project_one = document.querySelector("#latest-project-one");
let latest_project_two = document.querySelector("#latest-project-two");
let latest_project_three = document.querySelector("#latest-project-three");

if (latest_project_one) {
    latest_project_one.addEventListener("click", function () {
        console.log("click");
        location.href = "/latestProjectOne";
    });
}

if (latest_project_two) {
    latest_project_two.addEventListener("click", function () {
        location.href = "/latestProjectTwo";
    });
}

if (latest_project_three) {
    latest_project_three.addEventListener("click", () => {
        console.log("click");
        window.location.href = "/latestProjectThree";
    });
}

// residential page section

// selecting all the id of residential page
let residential_project_one = document.querySelector("#residential-project-one");
let residential_project_two = document.querySelector("#residential-project-two");
let residential_project_three = document.querySelector("#residential-project-three");
let residential_project_four = document.querySelector("#residential-project-four");
let residential_project_five = document.querySelector("#residential-project-five");
let residential_project_six = document.querySelector("#residential-project-six");

if (residential_project_one) {
    residential_project_one.addEventListener("click", function () {
        location.href = "/residProOne";
    });
}

if (residential_project_two) {
    residential_project_two.addEventListener("click", function () {
        location.href = "/residProTwo";
    });
}

if (residential_project_three) {
    residential_project_three.addEventListener("click", function () {
        location.href = "/residProThree";
    });
}

if (residential_project_four) {
    residential_project_four.addEventListener("click", function () {
        location.href = "/residProFour";
    });
}

if (residential_project_five) {
    residential_project_five.addEventListener("click", function () {
        location.href = "/residProFive";
    });
}
if (residential_project_six) {
    residential_project_six.addEventListener("click", function () {
        location.href = "/residProSix";
    });
}

// commercial page section

// selecting all the id of commercial page
let commercial_project_one = document.querySelector("#commercial-project-one");
let commercial_project_two = document.querySelector("#commercial-project-two");
let commercial_project_three = document.querySelector("#commercial-project-three");
let commercial_project_four = document.querySelector("#commercial-project-four");
let commercial_project_five = document.querySelector("#commercial-project-five");
let commercial_project_six = document.querySelector("#commercial-project-six");

if (commercial_project_one) {
    commercial_project_one.addEventListener("click", function () {
        location.href = "/commerProOne";
    });
}

if (commercial_project_two) {
    commercial_project_two.addEventListener("click", function () {
        location.href = "/commerProTwo";
    });
}

if (commercial_project_three) {
    commercial_project_three.addEventListener("click", function () {
        location.href = "/commerProThree";
    });
}

if (commercial_project_four) {
    commercial_project_four.addEventListener("click", function () {
        location.href = "/commerProFour";
    });
}

if (commercial_project_five) {
    commercial_project_five.addEventListener("click", function () {
        location.href = "/commerProFive";
    });
}

if(commercial_project_six){
    commercial_project_six.addEventListener("click", function () {
      location.href = "/commerProSix"  
    })
}



// land page section

// selecting all the id of residential page
let land_project_one = document.querySelector("#land-project-one");
let land_project_two = document.querySelector("#land-project-two");
let land_project_three = document.querySelector("#land-project-three");
let land_project_four = document.querySelector("#land-project-four");
let land_project_five = document.querySelector("#land-project-five");

if (land_project_one) {
    land_project_one.addEventListener("click", function () {
        location.href = "/landOne";
    });
}

if (land_project_two) {
    land_project_two.addEventListener("click", function () {
        location.href = "/landTwo";
    });
}

if (land_project_three) {
    land_project_three.addEventListener("click", function () {
        location.href = "/landThree";
    });
}

if (land_project_four) {
    land_project_four.addEventListener("click", function () {
        location.href = "/landFour";
    });
}

if (land_project_five) {
    land_project_five.addEventListener("click", function () {
        location.href = "/landFive";
    });
}





// lightbox image section

// selecting all the images
// let images = document.querySelectorAll(".sub_img img");

// // creating a div
// let lightbox = document.createElement("div");
// lightbox.id = "lightBox";
// document.body.appendChild(lightbox);

// // creating a span tag for left arrow
// let left_arrow = document.createElement("span");
// left_arrow.id = "left_arrow";
// left_arrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
// document.body.appendChild(left_arrow);

// // creating a span tag for right arrow
// let right_arrow = document.createElement("span");
// right_arrow.id = "right_arrow";
// right_arrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
// document.body.appendChild(right_arrow);

// // creating a span tag for close icon
// let close = document.createElement("span");
// close.id = "close";
// close.innerHTML = '<i class="fas fa-times"></i>';
// document.body.appendChild(close);

// images.forEach((element) => {
//     element.addEventListener("click", function () {
//         console.log("click");

//         // creating an img tag to show the clicked image
//         let img = document.createElement("img");
//         img.id = "image";
//         let curretnImg = this.src;
//         img.src = curretnImg;
//         if (lightbox.firstChild) {
//             lightbox.removeChild(lightbox.firstChild)
//         }
//         lightbox.appendChild(img);

//         // adding classlist dynamically
//         lightbox.classList.add("active");
//         left_arrow.classList.add("left_arrow_active");
//         right_arrow.classList.add("right_arrow_active");
//         close.classList.add("close_active");
//     });
// });

// close.addEventListener("click", () => {
//     console.log("click");
//     lightbox.classList.remove("active");
//     left_arrow.classList.remove("left_arrow_active");
//     right_arrow.classList.remove("right_arrow_active");
//     close.classList.remove("close_active");
// });


// // image gallery
// let current = 0;

// for (let i = 0; img.length > i; i++) {
//     img[i].addEventListener('click', () => {
//         function reset() {
//             for (let i = 0; img.length > i; i++) {
//                 img[i].style.display = 'none';
//             }
//         }
//         function prevSlider() {
//             reset();
//             img[current - 1].style.display = 'block';
//             current--;
//         }
//         left_arrow.addEventListener('click', () => {
//             if (current === 0) {
//                 current = img.length;
//             }
//             prevSlider();
//         })
//         // if user click on the right arrow
//         function nextSlider() {
//             reset();
//             img[current + 1].style.display = 'block';
//             current++;
//         }
//         right_arrow.addEventListener('click', () => {
//             if (current === img.length - 1) {
//                 current = -1;
//             }
//             nextSlider();
//         })
//     })
// }
