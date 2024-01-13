window.onscroll = function () {

    var scrollPercent = document.documentElement.scrollTop / 100;
    var element = document.getElementById('scroll-down');

    // getting alpha value of background color
    var currentBGColor = getComputedStyle(element)['background-color'];
    var rgbValues = currentBGColor.match(/\d+/g);
    var alphaValue = parseFloat(rgbValues[3]);

    // updating background color
    alphaValue = 0.692 - scrollPercent;
    element.style['background-color'] = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${alphaValue})`;

    // updating text color
    alphaValue = 1 - scrollPercent;
    element.style.color = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${alphaValue})`;
    

    // if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    //   document.getElementById("header").style.fontSize = "1vw";
    // } else {
    //   document.getElementById("header").style.fontSize = "1.5vw";
    // }



  }
  
  