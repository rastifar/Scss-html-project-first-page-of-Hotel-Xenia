const nextIcon =
  '<img class="owl-next" src="./assets/Pic/rightArrow.png" alt="right">';
const prevIcon =
  '<img class="owl-prev" src="./assets/Pic/leftArrow.png" alt="left" >';

  
$(document).ready(function () {
  
  $(".hambergurMenu").click(function () {
    $(this).toggleClass("is-active");
  });

  $(".side").click(function () {
    if ($(".side").hasClass("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  function openMenu() {
    
    if ($(window).width() <= 766) {
      $(".sidenav").animate(
        {
          width: "70vw",
          height: "100vh",
        },
        "slow"
      );
    } else {
      $(".sidenav").animate(
        {
          width: "20vw",
          height: "100vh",
        },
        "slow"
      );
    }
    $(".side").addClass("active");
    // $(".sidenav").css({display:'block'})
    // $(".sidenav").animate(
    //   {
    //     width: "20vw",
    //     height: "100vh",
    //   },
    //   "slow"
    // );

    $(".side").animate(
      {
        marginRight: "10vw",
      },
      "slow"
    );
    $(".booknow").animate(
      {
        marginRight: "15vw",
      },
      "slow"
    );
    $(".main").animate(
      {
        marginRight: "21vw",
      },
      "slow"
    );

    $(".logo").css({
      display: "none",
    });

    $(".extra").text("Menu");
  }
  function closeMenu() {
    $(".side").removeClass("active");
    $(".sidenav").animate(
      {
        width: "0",
        // height: "100vh",
      },
      100
    );
    $(".logo").css({
      display: "flex",
    });
    $(".side").animate(
      {
        marginRight: "0vw",
      },
      "slow"
    );
    $(".booknow").animate(
      {
        marginRight: "1vw",
      },
      "slow"
    );
    $(".main").animate(
      {
        marginRight: "0vw",
      },
      "slow"
    );

    $(".extra").text("Extra");
  }
  

  //owlCarousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    nav: true,
    navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".owl-carousel").on("changed.owl.carousel", function (event) {
    let item = event.item.index - 2;
    $("h3 , button").removeClass("animated fadeInUp");
    $(".owl-item")
      .not(".cloned")
      .eq(item)
      .find("h3 , button")
      .addClass("animated fadeInUp");
  });
  //end of owl carousel

  //datePicker
  $(".btnDate").click(function () {
    let checkInDate = new Date($("#checkInDate").val()).getTime();
    let checkOutDate = new Date($("#checkOutDate").val()).getTime();

    if (checkInDate && checkOutDate) {
      $.ajax({
        url: "./assets/Json/data.json",
        type: "GET",
        success: (result) => {
          result.map((date) => {
            let fromTimeStam = new Date(date.from).getTime();
            let toTimeStam = new Date(date.to).getTime();
            if (checkInDate >= fromTimeStam && checkOutDate <= toTimeStam) {
              console.log(date.room);
              $("#b").css("display", "block");
              $("#tbody").append(`<tr>
                            <td>${date.from}</td>
                            <td>${date.to}</td>
                            <td>${date.room}</td>
                            <td>${date.bed}</td>
                          </tr>`);
              $("#tbody tr:last").css({ backgroundColor: "yellow" });
            } else {
              $("#tbody").append(`<tr>
                <td>${date.from}</td>
                <td>${date.to}</td>
                <td>${date.room}</td>
                <td>${date.bed}</td>
              </tr>`);
            }
          });
        },
      });
    }
  });

  $(".cancel").click(function () {
    $("#b").fadeOut();
    $("#tbody").empty();
  });
  //End of datePicker
  
  //third carousel
  let currentIndex = 0,
    navItems = $(".CarouselNav li");

  function setSlide(index) {
    navItems.removeClass("selectedCarouselNav");
    navItems.eq(index).addClass("selectedCarouselNav");
    $(".myTestSlides").css("display", "none");
    $(".myTestSlides").eq(index).css("display", "flex");
  }

  $(".CarouselNav li").click(function () {
    let index = $(".CarouselNav li").index($(this));
    currentIndex = index;
    setSlide(currentIndex);
  });
  function slide() {
    if (currentIndex < navItems.length - 1) {
      currentIndex++;
      setSlide(currentIndex);
    } else {
      currentIndex = 0;
      setSlide(currentIndex);
    }
  }

  let interval = setInterval(slide, 3000);

  //append to menu
  $(window).resize(function () {
    if ($(window).width() <= 1000) {
      $('.append-nav').css({display:'block'})
    }
    else {
      $('.append-nav').css({'display':'none'})
    }
  })
  //backtotop
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#btnBackToTop").addClass("show");
    } else {
      $("#btnBackToTop").removeClass("show");
    }
  });

  $("#btnBackToTop").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "100");
  });
});
