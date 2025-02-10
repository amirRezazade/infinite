const topBar = document.querySelector(".top-bar");
const OpenOffcanvasBtn = document.querySelector(".top-bar__right");
const offcanvas = document.querySelector(".offcanvas");
const offcanvasContent = document.querySelector(".offcanvas-content");
const offcanvasClose = document.querySelector(".offcanvas-close");
const mouseFollow = document.querySelector(".mouse-follow");
const outerCircle = document.querySelector(".header-content__right-box");
const innerCircle = document.querySelector(".header-content__right-box-circle");
const studiesContentItem = document.querySelectorAll(".studies__content-item");
const testimonialContent = document.querySelector(".testimonial__content");
const rightAccordionBtn = document.querySelectorAll( ".faq__right-accordions .faq__accordions-item");
const leftAccordionBtn = document.querySelectorAll( ".faq__left-accordions .faq__accordions-item");
const upToTop = document.querySelector(".upto-top");
const upToTopCircle = document.querySelector(".upto-top-circle");











const rectangle = document.querySelectorAll(".header-content__right-box");

rectangle.forEach(elem=>{
  console.log(elem);
  const circle = elem.querySelector(".header-content__right-box-circle");


        // موقعیت اولیه دایره (وسط مستطیل)
      const initialTop = elem.clientHeight / 2;
      const initialLeft = elem.clientWidth / 2;

      // حداکثر فاصله‌ای که دایره می‌تواند از موقعیت اولیه فاصله بگیرد
      const maxDistance = 50; // 50 پیکسل

      // موقعیت هدف دایره
      let targetX = initialLeft;
      let targetY = initialTop;

      // تابع برای حرکت نرم دایره
      function animateCircle() {
        const currentX = parseFloat(circle.style.left) || initialLeft;
        const currentY = parseFloat(circle.style.top) || initialTop;

        // محاسبه موقعیت جدید با یک سرعت نرم
        const newX = currentX + (targetX - currentX) * 0.1;
        const newY = currentY + (targetY - currentY) * 0.1;

        // اعمال موقعیت جدید
        circle.style.left = `${newX}px`;
        circle.style.top = `${newY}px`;

        // ادامه انیمیشن
        requestAnimationFrame(animateCircle);
      }

      // شروع انیمیشن
      animateCircle();

      // تنظیم موقعیت هدف بر اساس موقعیت موس
      elem.addEventListener("mousemove", (e) => {
        const rect = elem.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // محاسبه فاصله موس از موقعیت اولیه دایره
        const deltaX = mouseX - initialLeft;
        const deltaY = mouseY - initialTop;

        // محدود کردن فاصله دایره از موقعیت اولیه
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const scale = Math.min(maxDistance, distance) / distance;

        // موقعیت هدف جدید
        targetX = initialLeft + deltaX * scale;
        targetY = initialTop + deltaY * scale;
      });

      // بازگشت دایره به موقعیت اولیه وقتی هاور تمام شد
      elem.addEventListener("mouseleave", () => {
        targetX = initialLeft;
        targetY = initialTop;
      });

 
      })
      












upToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    // behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    upToTop.classList.add("upto-top-active");
  } else {
    upToTop.classList.remove("upto-top-active");
  }
  const scrollHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPosition = window.scrollY;
  const progress = (scrollPosition / scrollHeight) * 251; // 251 = محیط دایره

  upToTopCircle.style.strokeDashoffset = 251 - progress;
});

rightAccordionBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    rightAccordionBtn.forEach((el) => {
      el.firstElementChild.classList.replace(
        "faq__accordions-btn-active",
        "faq__accordions-btn-def"
      );
      el.style.height = "110px";
      el.firstElementChild.lastElementChild.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    });
    if (elem.offsetHeight <= 120) {
      elem.style.height = elem.scrollHeight + "px";
      elem.firstElementChild.lastElementChild.innerHTML = `<i class="fa-solid fa-minus"></i>`;
      elem.firstElementChild.classList.replace(
        "faq__accordions-btn-def",
        "faq__accordions-btn-active"
      );
    } else {
      elem.firstElementChild.classList.replace(
        "faq__accordions-btn-active",
        "faq__accordions-btn-def"
      );
      elem.style.height = "110px";
      elem.firstElementChild.lastElementChild.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    }
  });
});

leftAccordionBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    leftAccordionBtn.forEach((el) => {
      el.firstElementChild.classList.replace(
        "faq__accordions-btn-active",
        "faq__accordions-btn-def"
      );
      el.style.height = "110px";
      el.firstElementChild.lastElementChild.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    });
    if (elem.offsetHeight <= 120) {
      elem.style.height = elem.scrollHeight + "px";
      elem.firstElementChild.lastElementChild.innerHTML = `<i class="fa-solid fa-minus"></i>`;
      elem.firstElementChild.classList.replace(
        "faq__accordions-btn-def",
        "faq__accordions-btn-active"
      );
    } else {
      elem.firstElementChild.classList.replace(
        "faq__accordions-btn-active",
        "faq__accordions-btn-def"
      );
      elem.style.height = "110px";
      elem.firstElementChild.lastElementChild.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    }
  });
});

let oldScroll = 0;

let i = 0;
let scrollTime = setInterval(() => {
  if (i <= testimonialContent.scrollWidth - testimonialContent.offsetWidth) {
    testimonialContent.scrollLeft = i;
    i += 2;
  } else {
    i = 0;
  }
}, 10);

testimonialContent.addEventListener("mousemove", () => {
  clearInterval(scrollTime);
});

testimonialContent.addEventListener("mouseenter", () => {
  mouseFollow.textContent = "Drag";
  mouseFollow.classList.add("mouse-follow-drag");
});
testimonialContent.addEventListener("mouseleave", () => {
  mouseFollow.textContent = "";
  mouseFollow.classList.remove("mouse-follow-drag");
  scrollTime = setInterval(() => {
    if (i <= testimonialContent.scrollWidth - testimonialContent.offsetWidth) {
      testimonialContent.scrollLeft = i;
      i += 2;
    } else {
      i = 0;
    }
  }, 10);
});

studiesContentItem.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    const item = elem.querySelector(".scroll-animation__list-hover");
    item.style.animationPlayState = "running";
  });
  elem.addEventListener("mouseleave", () => {
    const item = elem.querySelector(".scroll-animation__list-hover");
    item.style.animationPlayState = "paused";
  });
});
window.addEventListener("load", () => {
  if (window.scrollY == 0) topBar.classList.add("top-bar-up");
});
window.addEventListener("scroll", (event) => {
  let newScroll = window.scrollY;
  if (newScroll > oldScroll) {
    topBar.classList.remove("top-bar-up");
  } else {
    topBar.classList.add("top-bar-up");
  }
  oldScroll = newScroll;
});
window.addEventListener("mousemove", (event) => {
  if (mouseFollow.classList.contains("mouse-follow-drag")) {
    const mouseX = event.pageX - 60;
    const mouseY = event.pageY - 60;
    mouseFollow.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  } else {
    const mouseX = event.pageX - 15;
    const mouseY = event.pageY - 15;
    mouseFollow.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  }
});
OpenOffcanvasBtn.addEventListener("click", () => {
  offcanvas.style.opacity = "1";
  offcanvas.style.visibility = "visible";
  offcanvas.style.position = "fixed";
  offcanvasContent.style.left = "70%";
});
offcanvasClose.addEventListener("click", () => {
  offcanvas.style.opacity = "0";
  offcanvas.style.visibility = "hidden";
  offcanvasContent.style.left = "120%";
});
offcanvas.addEventListener("click", (event) => {
  if (event.target == offcanvas) {
    offcanvas.style.opacity = "0";
    offcanvas.style.visibility = "hidden";
    offcanvasContent.style.left = "120%";
  }
});
