$(document).ready(function(event) {
  $('.bio-pic').hover(
    function() {
      $(this).attr("src","./img/21664b48_o.jpeg");
    }, function() {
      $(this).attr("src","./img/my-face.jpeg");
    }
  )
  $('#btn-bio').click(function(event) {
    $('#portfolio-space').hide();
    $('#carousel-space').hide();
    $('#btn-bio').hide();
    $('#btn-portfolio').show();
    $('#bio-space').show();
  });

  $('#resume-btn-bio').click(function(event) {
    $('#portfolio-space').hide();
    $('#resume-space').hide();
    $('#btn-bio').hide();
    $('.main-window').show();
    $('.side-image').show();
    $('#btn-portfolio').show();
    $('#btn-resume').show();
    $('#bio-space').show();
  });

  $('#btn-portfolio').click(function(event) {
    $('#btn-portfolio').hide();
    $('#resume-space').hide();
    $('#carousel-space').hide();
    $('#bio-space').hide();
    $('#btn-bio').show();
    $('#portfolio-space').show();
  });

  $('#resume-btn-portfolio').click(function(event) {
    $('#portfolio-space').show();
    $('#resume-space').hide();
    $('#btn-bio').show();
    $('.main-window').show();
    $('.side-image').show();
    $('#btn-portfolio').hide();
    $('#btn-resume').show();
    $('#bio-space').hide();
  });

  $('#btn-resume').click(function(event) {
    $('#portfolio-space').hide();
    $('#carousel-space').hide();
    $('.side-image').hide();
    $('#btn-resume').hide();
    $('#bio-space').hide();
    $('#resume-space').show();
  });

  $('#resume-btn-downloadPDF').click(function(event) {
    window.open('./pdf/BrianGrantResume.pdf');
  })

  var i = 0
  $('#down-arrow').click(function(event) {
    $('html, body').animate({
        scrollTop: $('#portfolio-space').offset().top - 20
    }, 'slow');
    $('.portfolio-project-' + i).hide();
    $('#portfolio-link-' + i).hide();
    if (i < 4) {
      i++;
    } else {
      i = 4;
    };
    if (i === 4) {
      $("#down-arrow").hide();
    }
    $('#up-arrow').show();
    $('#down-arrow').css("margin-left", "0%");
    $('.portfolio-project-' + i).show();
    $('#portfolio-link-' + i).show();
  });

  $('#up-arrow').click(function(event) {
    $('html, body').animate({
        scrollTop: $('#portfolio-space').offset().top - 20
    }, 'slow');
    $('.portfolio-project-' + i).hide();
    $('#portfolio-link-' + i).hide();
    if (i >= 0) {
      i--;
    } else {
      i = 0;
    };
    if (i === 0) {
      $("#up-arrow").hide();
      $('#down-arrow').css("margin-left", "48%");
    };
    $('#down-arrow').show();
    $('.portfolio-project-' + i).show();
    $('#portfolio-link-' + i).show();
  });

});
