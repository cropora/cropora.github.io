/* ==========================================
   Cropora Hero Slider
========================================== */

const screenshots = [
    "dashboard.jpeg",
    "fields.jpeg",
    "crops.jpeg",
    "crop-details.jpeg",
    "labour.jpeg",
    "attendance.jpeg",
    "salary.jpeg",
    "crop-expense.jpeg",
    "crop-sales.jpeg"
];

const cardData = [

{
left:{
icon:"dashboard",
title:"Farm Overview",
text:"Everything in one place"
},
right:{
icon:"account_balance_wallet",
title:"Expenses",
text:"Track farm income & costs"
},
bottom:{
icon:"cloud_done",
title:"Works Offline",
text:"No internet required"
}
},

{
left:{
icon:"landscape",
title:"Fields",
text:"Manage all your fields"
},
right:{
icon:"pin_drop",
title:"Locations",
text:"Organize farm plots"
},
bottom:{
icon:"cloud_done",
title:"Offline Access",
text:"Always available"
}
},

{
left:{
icon:"eco",
title:"Crops",
text:"Track every crop"
},
right:{
icon:"monitoring",
title:"Growth",
text:"Monitor crop progress"
},
bottom:{
icon:"analytics",
title:"Reports",
text:"Crop summaries"
}
},

{
left:{
icon:"info",
title:"Crop Details",
text:"Complete crop information"
},
right:{
icon:"event",
title:"Timeline",
text:"Track crop stages"
},
bottom:{
icon:"check_circle",
title:"Organized",
text:"Everything recorded"
}
},

{
left:{
icon:"groups",
title:"Labours",
text:"Manage workers"
},
right:{
icon:"badge",
title:"Profiles",
text:"Worker information"
},
bottom:{
icon:"verified_user",
title:"Attendance",
text:"Easy management"
}
},

{
left:{
icon:"calendar_month",
title:"Attendance",
text:"Daily attendance"
},
right:{
icon:"schedule",
title:"Working Days",
text:"Track work history"
},
bottom:{
icon:"check_circle",
title:"Accurate",
text:"No missed records"
}
},

{
left:{
icon:"payments",
title:"Salary",
text:"Manage payments"
},
right:{
icon:"receipt_long",
title:"History",
text:"Payment records"
},
bottom:{
icon:"currency_rupee",
title:"Quick Pay",
text:"Simple salary tracking"
}
},

{
left:{
icon:"account_balance_wallet",
title:"Expenses",
text:"Track every expense"
},
right:{
icon:"trending_down",
title:"Costs",
text:"Understand spending"
},
bottom:{
icon:"savings",
title:"Better Planning",
text:"Reduce costs"
}
},

{
left:{
icon:"sell",
title:"Crop Sales",
text:"Manage crop sales"
},
right:{
icon:"trending_up",
title:"Profit",
text:"Know your earnings"
},
bottom:{
icon:"bar_chart",
title:"Analytics",
text:"Sales reports"
}
}

];

const heroImage = document.getElementById("heroScreenshot");
const phone = document.getElementById("phone");
const dotsContainer = document.getElementById("sliderDots");

const leftIcon = document.getElementById("leftIcon");
const leftTitle = document.getElementById("leftTitle");
const leftText = document.getElementById("leftText");

const rightIcon = document.getElementById("rightIcon");
const rightTitle = document.getElementById("rightTitle");
const rightText = document.getElementById("rightText");

const bottomIcon = document.getElementById("bottomIcon");
const bottomTitle = document.getElementById("bottomTitle");
const bottomText = document.getElementById("bottomText");

let currentIndex = 0;
let sliderInterval;

// -------------------------
// Create Navigation Dots
// -------------------------

screenshots.forEach((_, index) => {

    const dot = document.createElement("span");

    dot.className = "dot";

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {

        currentIndex = index;

        changeSlide();

        restartSlider();

    });

    dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".dot");

// -------------------------
// Update Active Dot
// -------------------------

function updateDots() {

    dots.forEach((dot, index) => {

        dot.classList.toggle("active", index === currentIndex);

    });

}

// -------------------------
// Change Slide
// -------------------------

function changeSlide() {

    heroImage.style.opacity = "0";
    heroImage.style.transform = "translateY(15px) scale(.98)";

    setTimeout(() => {

        heroImage.src = `assets/images/${screenshots[currentIndex]}`;

        updateDots();

        updateCards();

        heroImage.style.opacity = "1";
        heroImage.style.transform = "translateY(0) scale(1)";

    }, 250);

}


function updateCards() {

    const data = cardData[currentIndex];

    const leftIcon = document.getElementById("leftIcon");
    const leftTitle = document.getElementById("leftTitle");
    const leftText = document.getElementById("leftText");

    const rightIcon = document.getElementById("rightIcon");
    const rightTitle = document.getElementById("rightTitle");
    const rightText = document.getElementById("rightText");

    const bottomIcon = document.getElementById("bottomIcon");
    const bottomTitle = document.getElementById("bottomTitle");
    const bottomText = document.getElementById("bottomText");

    if(
        !leftIcon || !leftTitle || !leftText ||
        !rightIcon || !rightTitle || !rightText ||
        !bottomIcon || !bottomTitle || !bottomText
    ){
        console.error("Floating card IDs not found.");
        return;
    }

    leftIcon.textContent = data.left.icon;
    leftTitle.textContent = data.left.title;
    leftText.textContent = data.left.text;

    rightIcon.textContent = data.right.icon;
    rightTitle.textContent = data.right.title;
    rightText.textContent = data.right.text;

    bottomIcon.textContent = data.bottom.icon;
    bottomTitle.textContent = data.bottom.title;
    bottomText.textContent = data.bottom.text;
}

// -------------------------
// Next Slide
// -------------------------

function nextSlide() {

    currentIndex++;

    if (currentIndex >= screenshots.length) {

        currentIndex = 0;

    }

    changeSlide();

}

// -------------------------
// Auto Slider
// -------------------------

function startSlider() {

    sliderInterval = setInterval(nextSlide, 4000);

}

function stopSlider() {

    clearInterval(sliderInterval);

}

function restartSlider() {

    stopSlider();

    startSlider();

}

updateCards();
updateDots();
startSlider();

// -------------------------
// Pause On Hover
// -------------------------

phone.addEventListener("mouseenter", stopSlider);

phone.addEventListener("mouseleave", startSlider);

// -------------------------
// Mouse Tilt Effect
// -------------------------

phone.addEventListener("mousemove", (e) => {

    const rect = phone.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;

    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 12;

    const rotateX = (0.5 - y) * 12;

    phone.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-5px)
    `;

});

phone.addEventListener("mouseleave", () => {

    phone.style.transform = `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
    `;

});




/* ==========================================
   FAQ Accordion
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(i => i.classList.remove("active"));

        if (!isActive) {
            item.classList.add("active");
        }

    });

});



/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

revealElements.forEach(el=>observer.observe(el));


/* ==========================================
   Mobile Navigation
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector(".material-symbols-rounded");

        if (navbar.classList.contains("active")) {
            icon.textContent = "close";
        } else {
            icon.textContent = "menu";
        }

    });

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuBtn.querySelector(".material-symbols-rounded").textContent = "menu";

        });

    });

}
