about(); // Display home content by default

// The onscroll event calls the scroll function to make the top banner get smaller when you scroll down
window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "1.7vw";
    } else {
        document.getElementById("header").style.fontSize = "3vw";
    }
};

// function home() {
//     document.getElementById('txt').innerHTML = "<div class='p'><h2>Hello!</h2><hr>" +
//         "<br>I'm <b>Madison Han</b>, a second year @UWaterloo double majoring in <b>Computational Mathematics</b> and <b>Statistics</b>!</div>";
// }

function about() {
     document.getElementById('txt').innerHTML = "<div class='p'><h2>Hello!</h2><hr>" +
        "<br>My name is <b>Madison Han</b>."+
        "<br><br> I'm a second year at the University of Waterloo double majoring in <b>Computational Mathematics</b> and <b>Statistics</b>.<br><br>"+
        "<br> In my freetime, I enjoy programming, rock climbing, hiking, board games, and Star Trek!<br> </div>";
}

function projects() {
    document.getElementById('txt').innerHTML = "<div class='p'><h2><a href='https://github.com/madison-han/Weather-App'>WeatherApp</a></h2><hr>"+
      "<br>This <b>Java</b> application allows users to retrieve weather information for a specific city using the OpenWeatherMapp <b>API</b>.<br></div>"+
      "<div class='p'><h2><a href='https://github.com/madison-han/To-Do-List'>ToDo</a></h2><hr>"+
      "<br>A simple to-do list application built with React! Tasks can be added, marked as complete, and deleted.<br></div>"+
      "<div class='p'><h2><a href='https://github.com/madison-han/Scripts-for-CS-246'>Bash Scripts</a></h2><hr>"+
      "<br>Various Bash scripts written for testing automation in an Object Oriented Programming course.</div>"+
       "<div class='p'><h2><a href='https://github.com/madison-han/madison-han.github.io'>This Site!</a></h2><hr>"+
      "<br>Created with HTML, CSS, and Javascript.</div>";
      
}

function contact() {
    document.getElementById('txt').innerHTML = "<div class='p'><h2>Contact Me!</h2><hr>" +
        "<br>Phone Number: 437-262-5468" +
        "<br>Email: <a href='mailto:madisonhan04@gmail.com'>madisonhan04@gmail.com</a>" +
        "<br>Github: <a href='https://github.com/madison-han'>madison-han</a>" +
        "<br>LinkedIn: <a href='https://www.linkedin.com/in/madison-han-01b5701a4/'>Madison Han</a>" +
        "</div>";
}
