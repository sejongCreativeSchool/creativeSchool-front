function clickBtn() {
  alert("클론 페이지기 때문에 아무일도 일어나지 않아요!");
}

var g_carousel = 1;
var carouselImg;

window.onload = function () {
  let carouselContainer = document.getElementsByClassName("owl-carousel")[0];
  carouselImg = document.getElementsByClassName("carousel1img");
  carouselImgDiv = document.getElementsByClassName("item");
  carousel1text = document.getElementsByClassName("carousel1text");

  carouselImg[0].style.visibility = "visible";
  carouselImg[0].style.height = "auto";
  carouselImgDiv[0].style.height = "auto";
  carouselImg[0].style.opacity = "1";
  carousel1text[0].style.visibility = "visible";
  carousel1text[0].style.height = "auto";

  carouselImg[1].style.visibility = "hidden";
  carouselImg[1].style.height = "0";
  carouselImgDiv[1].style.height = "0";
  carousel1text[1].style.visibility = "hidden";
  carousel1text[1].style.height = "0";

  carouselImg[2].style.visibility = "hidden";
  carouselImg[2].style.height = "0";
  carouselImgDiv[2].style.height = "0";
  carousel1text[2].style.visibility = "hidden";
  carousel1text[2].style.height = "0";

  const interval1 = setInterval(activeCarousel, 5000);
};

const activeCarousel = () => {
  const index = g_carousel % 3;
  console.log(index);

  switch (index) {
    case 0:
      carouselImg[0].style.visibility = "visible";
      carouselImg[0].style.height = "auto";
      carouselImgDiv[0].style.height = "auto";
      carouselImg[0].style.opacity = "1";
      carousel1text[0].style.visibility = "visible";
      carousel1text[0].style.height = "auto";

      carouselImg[1].style.visibility = "hidden";
      carouselImg[1].style.height = "0";
      carouselImgDiv[1].style.height = "0";
      carouselImg[1].style.opacity = "0.8";
      carousel1text[1].style.visibility = "hidden";
      carousel1text[1].style.height = "0";

      carouselImg[2].style.visibility = "hidden";
      carouselImg[2].style.height = "0";
      carouselImgDiv[2].style.height = "0";
      carouselImg[2].style.opacity = "0.8";
      carousel1text[2].style.visibility = "hidden";
      carousel1text[2].style.height = "0";
      break;

    case 1:
      carouselImg[0].style.visibility = "hidden";
      carouselImg[0].style.height = "0";
      carouselImgDiv[0].style.height = "0";
      carouselImg[0].style.opacity = "0.8";
      carousel1text[0].style.visibility = "hidden";
      carousel1text[0].style.height = "0";

      carouselImg[1].style.visibility = "visible";
      carouselImg[1].style.height = "auto";
      carouselImgDiv[1].style.height = "auto";
      carouselImg[1].style.opacity = "1";
      carousel1text[1].style.visibility = "visible";
      carousel1text[1].style.height = "auto";

      carouselImg[2].style.visibility = "hidden";
      carouselImg[2].style.height = "0";
      carouselImgDiv[2].style.height = "0";
      carouselImg[2].style.opacity = "0.8";
      carousel1text[2].style.visibility = "hidden";
      carousel1text[2].style.height = "0";
      break;

    case 2:
      carouselImg[0].style.visibility = "hidden";
      carouselImg[0].style.height = "0";
      carouselImgDiv[0].style.height = "0";
      carouselImg[0].style.opacity = "0.8";
      carousel1text[0].style.visibility = "hidden";
      carousel1text[0].style.height = "0";

      carouselImg[1].style.visibility = "hidden";
      carouselImg[1].style.height = "0";
      carouselImgDiv[1].style.height = "0";
      carouselImg[1].style.opacity = "0.8";
      carousel1text[1].style.visibility = "hidden";
      carousel1text[1].style.height = "0";

      carouselImg[2].style.visibility = "visible";
      carouselImg[2].style.height = "auto";
      carouselImgDiv[2].style.height = "auto";
      carouselImg[2].style.opacity = "1";
      carousel1text[2].style.visibility = "visible";
      carousel1text[2].style.height = "auto";
      break;

    default:
      console.log("unHandled Error!");
      break;
  }

  g_carousel++;
};
