const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const sliderImg = document.querySelector(".slider-img");
const sliderImges = document.querySelectorAll(".slider-img img");
const dotDiv = document.querySelector(".dotDiv");

let sliderNumber = 1;
let sliderImageLength = sliderImges.length;

// slider dot functionlity
for (let i = 0; i < sliderImageLength; i++) {
  const dotSpan = document.createElement("span");
  dotSpan.className = "dotBtn";

  dotDiv.appendChild(dotSpan);
}

const dotBtns = document.querySelectorAll(".dotBtn");

dotBtns[0].style.backgroundColor = "#000";

const restBG = () => {
  dotBtns.forEach((btn) => {
    btn.style.backgroundColor = "transparent";
  });
};

dotBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    restBG();
    sliderImg.style.transform = `translateX(-${i * 100}%)`;
    sliderNumber = i + 1;
    btn.style.backgroundColor = "#000";
  });
});

const changeColor = () => {
  restBG();
  dotBtns[sliderNumber - 1].style.backgroundColor = "#000";
};

// slider next & perv button functionlity
const nextSlide = () => {
  sliderImg.style.transform = `translateX(-${sliderNumber * 100}%)`;
  sliderNumber++;
};
const getFirstSlide = () => {
  sliderImg.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};

const prevSlide = () => {
  sliderImg.style.transform = `translateX(-${(sliderNumber - 2) * 100}%)`;
  sliderNumber--;
};
const getLastSlide = () => {
  sliderImg.style.transform = `translateX(-${(sliderImageLength - 1) * 100}%)`;
  sliderNumber = sliderImageLength;
};

rightBtn.addEventListener("click", () => {
  sliderNumber < sliderImageLength ? nextSlide() : getFirstSlide();
  changeColor();
});

leftBtn.addEventListener("click", () => {
  sliderNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});

// slider auto play

let sliderInterval;

const sliderAutoPlay = () => {
  sliderInterval = setInterval(() => {
    sliderNumber < sliderImageLength ? nextSlide() : getFirstSlide();
    changeColor();
  }, 2000);
};

const stopSlider = () => {
  clearInterval(sliderInterval);
};
sliderAutoPlay();

sliderImg.addEventListener("mouseover", stopSlider);
sliderImg.addEventListener("mouseout", sliderAutoPlay);

leftBtn.addEventListener("mouseover", stopSlider);
leftBtn.addEventListener("mouseout", sliderAutoPlay);

rightBtn.addEventListener("mouseover", stopSlider);
rightBtn.addEventListener("mouseout", sliderAutoPlay);
