var down = true;
var slide = true;

function toggler(divId) {
    if (down === true) {
        $("#" + divId).slideDown('slow');
        down=false;
    } else {
        $("#" + divId).slideUp('slow');
        down=true;
    }
}




function intro() {

    $('h4').css('color', 'darkgrey');
    $('span').css('color', 'darkgrey');
    $('.intro').css('color', 'teal');
    document.getElementById("content").innerHTML = "<center><h2> Hi! I'm <span id='imp'>Kaylynn Crawford</span>. I'm a Computer Science major at <a href='http://www.smith.edu/'>Smith College</a> in Massachusetts. I'm especially interested in web development and computer science education. I've worked as a teaching assistant at <a href='http://girlswhocode.com/'>Girls Who Code </a>and <a href='https://www.digitalmediaacademy.org/'>Digital Media Academy</a>, as well as interned at <a href='http://orbitalinsight.com/'>Orbital Insight</a> and worked as a research assistant at Smith College. In my free time I enjoy looking up <a href='http://docs.bonsaijs.org/'>cool graphics libraries </a> and rock climbing.  </h2></center>";

}

function edu() {

    $('h4').css('color', 'darkgrey');
    $('span').css('color', 'darkgrey');
    $('.edu').css('color', 'darkblue');
    document.getElementById("content").innerHTML = "<center><h2>  I currently attend <span id='e'>Smith College</span> in Massachusetts. I'm a junior,<span id='e'> majoring in Computer Science </span>. Due to Smith's liberal arts nature, I've been able to take classes in a wide variety of areas, which I love. I will graduate in <span id='e'>2017</span>.  <br><br><span id='e'>Computer Science Classes:</span><br> <span id='e'>Current:</span> AP Computer Science, Data Structures, Advanced Topics in Programming (Robotics), Assembly Language, Operating Systems. <br><span id='e'>In Progress:</span> Computer Graphics, Advanced Topics in Programming (Web Development and Javascript)</h2></center>";
}



function teach() {

    $('h4').css('color', 'darkgrey');
    $('span').css('color', 'darkgrey');
    $('.teach').css('color', 'deeppink');
    document.getElementById("content").innerHTML = "<center><h2>  I've had <span id='t'>three technical teaching assistant positions</span> so far.<br> <br><span id='t'>Teaching assistant for Data Structures at Smith College: </span>I helped students clarify their understanding of the concepts and do their programming assignments. <br><span id='t'>Digital Media Academy:</span> I helped teach various week-long classes in Java, Python, Graphic Design, and Photography. <br> <span id='t'>Girls Who Code: </span> I was a teaching assistant for a seven week program that teaches high school girls computer science. <span id='t'>90%</span> of the girls from the program go on to major in Computer Science.    </h2></center>";
}


function intern() {

    $('h4').css('color', 'darkgrey');
    $('span').css('color', 'darkgrey');
    $('.intern').css('color', 'purple');
    document.getElementById("content").innerHTML = "<center><h2>  I've had<span id='i'> two technical internship positions.</span><br><br> <span id='i'>Research Assistant: </span>I was a research assistant to <span id='i'>Nick Howe</span> at Smith College. I developed a website backed by a database that allowed users to search for particular letters in old manuscripts by date. I used <span id='i'>SQL, PHP, HTML, CSS, AJAX, and bootstrap </span>for the project. <br> <span id='i'>Intern at Orbital Insight: </span> At Orbital, I worked to develop an internal tool to visualize data being generated to check for errors. I used <span id='i'>python, flask, various mapping and data libraries </span>to create a map overlayed with color coded data.   </h2></center>";
}


function project() {

    $('h4').css('color', 'darkgrey');
    $('span').css('color', 'darkgrey');
    $('.project').css('color', 'darkblue');
    document.getElementById("content").innerHTML = "<center><h2>  --Insert content about projects here -- <br> Iudicem an officia a de quem exquisitaque eu officia exquisitaque e pariatur,cupidatat legam dolor occaecat velit. Senserit si malis iudicem. Cillum probantmentitum. Et veniam anim ne officia. Quae e offendit an sint, est amet magna estlaborum. Deserunt sed senserit, aliqua quamquam excepteur. Cernantur irmandaremus laboris ea dolor voluptate ab incididunt, pariatur anim probantofficia si an irure ullamco.  </h2></center>";
}

function events() {

    $('h4').css('color', 'darkgrey');
    $('span').css('color', 'darkgrey');
    $('.events').css('color', 'yellow');
    document.getElementById("content").innerHTML = "<center><h2>  --Insert content about events here -- <br> Iudicem an officia a de quem exquisitaque eu officia exquisitaque e pariatur,cupidatat legam dolor occaecat velit. Senserit si malis iudicem. Cillum probantmentitum. Et veniam anim ne officia. Quae e offendit an sint, est amet magna estlaborum. Deserunt sed senserit, aliqua quamquam excepteur. Cernantur irmandaremus laboris ea dolor voluptate ab incididunt, pariatur anim probantofficia si an irure ullamco.  </h2></center>";
}


function resume() {

    $('h4').css('color', 'darkgrey');
    $('span').css('color', 'darkgrey');
    $('.resume').css('color', 'green');
    document.getElementById("content").innerHTML = "<center><h2><a href='https://www.linkedin.com/in/kaylynncrawford'><span id='r'>LinkedIn</span></a><a href='https://github.com/silentttone'> <br><span id='r'>Github</span></a><br><span id='r'>Email: </span>Kaylynn.Crawford@gmail.com  </h2></center>";
}
