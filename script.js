const slideModels = [
    {
        title: "Slide Title 1",
        text: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.",
        imgUrl: "./img/1.jpg"
    },
    {
        title: "Slide Title 2",
        text: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.",
        imgUrl: "./img/2.jpg"
    },
    {
        title: "Slide Title 3",
        text: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.",
        imgUrl: "./img/3.jpg"
    },
    {
        title: "Slide Title 4",
        text: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.",
        imgUrl: "./img/4.jpg"
    },
    {
        title: "Slide Title 5",
        text: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.",
        imgUrl: "./img/5.jpg"
    },
    {
        title: "Slide Title 6",
        text: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.",
        imgUrl: "./img/6.jpg"
    },
    {
        title: "Slide Title 7",
        text: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.",
        imgUrl: "./img/7.jpg"
    },
];

let index = 0;
let slideCount = slideModels.length;
let slideSettings = {
    duration: '1000',
    random: false,
}
const slideImg = document.querySelector(".slide-img");
const slideTitle = document.querySelector(".slide-title");
const slideText = document.querySelector(".slide-text");
const slideLink = document.querySelector(".slide-link");
const slideContolItems = document.querySelectorAll('.slide-control-item');
const back = document.querySelector(".back");
const next = document.querySelector(".next");

startSlide(slideSettings);
slideContolItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        clearInterval(slideInterval)
    })
});
slideContolItems.forEach(item => {
    item.addEventListener('mouseleave', function () {
        startSlide(slideSettings);
    })
});

back.addEventListener('click', function () {
    index--;
    showSlide(index)
    console.log(index);
})
next.addEventListener('click', function () {
    index++;
    showSlide(index)
    console.log(index);
})

function showSlide(i) {
    index = i;
    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }
    slideImg.setAttribute("src", slideModels[index].imgUrl)
    slideTitle.textContent = slideModels[index].title;
    slideText.textContent = slideModels[index].text;
}

function startSlide(settings) {
    let prev;
    slideInterval = setInterval(function () {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slideCount)
                console.log(index);
            } while (index == prev);
            prev = index;
        } else {
            if (slideCount == index) {
                index = 0;
            }
            console.log(index);
            index++;
       
        }
        showSlide(index)
    }, settings.duration)
}



