about();

 window.onscroll = function () {
   if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
     document.getElementById("header").style.fontSize = "1vw";
  } else {
     document.getElementById("header").style.fontSize = "1.5vw";
   }
 };

function about() {
  document.getElementById('txt').innerHTML = "<div class='p'><h2>Hello!</h2><hr>" +
    "<br>My name is <b>Madison Han</b>." +
    "<br><br> I'm a second year at the University of Waterloo double majoring in <b>Computational Mathematics</b> and <b>Statistics</b>.<br>"+
    "<br> In my freetime, I enjoy programming, rock climbing, hiking, board games, and Star Trek!<br><br> </div>" +
    "<br>";
}

function projects() {
  document.getElementById('txt').innerHTML = "<div class='p'><h2><a href='https://github.com/madison-han/Weather-App'>WeatherApp</a></h2><hr>"+
    "<br>This <b>Java</b> application allows users to retrieve weather information for a specific city using the OpenWeatherMapp <b>API</b>.<br></div>"+
    "<div class='p'><h2><a href='https://github.com/madison-han/To-Do-List'>ToDo</a></h2><hr>"+
    "<br>A simple to-do list application built with React! Tasks can be added, marked as complete, and deleted.</div>"+
    "<div class='p'><h2><a href='https://github.com/madison-han/Scripts-for-CS-246'>Bash Scripts</a></h2><hr>"+
    "<br>Various Bash scripts written for testing automation in an Object Oriented Programming course.<br></div>"+
    "<div class='p'><h2><a href='https://github.com/madison-han/madison-han.github.io'>This Site!</a></h2><hr>"+
    "<br>Created with HTML, CSS, and Javascript.<br></div>" +
    "<br>";
}

function contact() {
  document.getElementById('txt').innerHTML = "<div class='p'><h2>Contact Me!</h2><hr>" +
  "<br>Phone Number: 437-262-5468" +
  "<br><i class='fa fa-phone'></i> (437)-262-5468" +
  "<br><a href='mailto:madisonhan04@gmail.com'><i class='fa fa-envelope'></i></a> <a href='mailto:madisonhan04@gmail.com'> madisonhan04@gmail.com</a>" +
  "<br><a href='https://github.com/madison-han'><i class='fa fa-github'></i></a> <a href='https://github.com/madison-han'> madison-han</a>" +
  "<br><a href='https://www.linkedin.com/in/madison-han-01b5701a4/'><i class='fa fa-linkedin'></i></a> <a href='https://www.linkedin.com/in/madison-han-01b5701a4/'> Madison Han</a>" +
  "</div><br>"; 
}
