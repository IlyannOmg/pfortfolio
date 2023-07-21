let menuLeft = document.getElementsByClassName("menu-left")[0];
let btnOpenMenu = document.getElementById("openMenu");
const buttonHome = document.getElementById("buttonHome");
const subscribeButtons = document.querySelectorAll('.subsribeOfUser');
const modalWinodowExit = document.querySelector('.modal-winodow-exit');
const exit = document.getElementById("Exit");
const exitNo = document.getElementsByClassName("exitNo")[0];
const exitYes = document.getElementsByClassName("exitYes")[0];
const body = document.getElementsByClassName("body")[0];
const buttonMyPage = document.getElementById("buttonMyPage");
const mainContent = document.getElementsByClassName("mainContent")[0];
const mainMyPage = document.getElementsByClassName("main-my-page")[0];
const infoAnalyticMyAccount = document.getElementsByClassName("info-analytic-my-account")[0];
const imagesWithWrapperClass = document.querySelectorAll(".wrapper-show-my-post");

imagesWithWrapperClass.forEach((image) => {
  image.addEventListener("click", () => {
    const parentPostElement = image.closest(".my-post-1");
    const openInfoMyPostElements = parentPostElement.querySelectorAll(".open-info-my-post");
    
    openInfoMyPostElements.forEach((element) => {
      element.classList.toggle("openInfoMyPost");
    });
  });
});


exit.addEventListener("click", () => {
    body.classList.add("remove-scroll-body");
    modalWinodowExit.style.display = "flex";
    exitNo.addEventListener("click", () => {
      modalWinodowExit.style.display = "none";
      body.classList.remove("remove-scroll-body");
      return
    })
    exitYes.addEventListener("click", () => {
      window.location.href = "login.html";
      return
    })
  })
  
  buttonHome.addEventListener("click", () => {
    mainContent.classList.toggle("openMainHome")
    mainMyPage.classList.remove("openMyPage")
    mainMyPage.classList.remove("main-my-pageStyle")
    infoAnalyticMyAccount.classList.remove("openMyPage")
  })
  buttonMyPage.addEventListener("click", () => {
    mainMyPage.classList.toggle("openMyPage")
    mainMyPage.classList.toggle("main-my-pageStyle")
    infoAnalyticMyAccount.classList.toggle("openMyPage")
    mainContent.classList.remove("openMainHome")

  })


  

subscribeButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (this.style.background === 'rgb(59, 41, 255)') {
      this.style.backgroundColor = '';
      this.textContent = 'Subsribe';
      this.style.color = 'white';
      this.style.border = 'none';
    } else {
      this.style.background = 'rgb(59, 41, 255)';
      this.style.color = 'White';
      this.textContent = 'Your friend';
    }
  });
});

btnOpenMenu.addEventListener("click", () => {
    if (!menuLeft.classList.contains("openMenuLeft")) {
        menuLeft.classList.add("openMenuLeft");
      } else {
        menuLeft.classList.remove("openMenuLeft");
      }
})

buttonHome.addEventListener("click", () => {

})

subsribeOfUser.addEventListener("click", () => {
  
})

body.addEventListener("click", () => {

})



// if (subsribeOfUser.addEventListener("click", function () {
//   subsribeOfUser.style.background = "#ccc";
//   subsribeOfUser.innerText = 'Your frien';
//   subsribeOfUser.style.color = "black";
// })) {
//   alert(1)
// } else if (subsribeOfUser.addEventListener("click", function () {

// })) {
//   subsribeOfUser.style.background = "#ccc";
//   subsribeOfUser.innerText = 'Your friend';
//   subsribeOfUser.style.color = "black";
// }

// if(subsribeOfUser.addEventListener("click", () => {})
// subsribeOfUser.style.background = "#ccc";
// subsribeOfUser.innerText = 'Your friend';
// subsribeOfUser.style.color = "black";
// )  {
//   subsribeOfUser.style.background = "rgb(0, 100, 200)";
//   subsribeOfUser.innerText = 'Subsribe';
//   subsribeOfUser.style.color = "white";
// }

