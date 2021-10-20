<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Abhinav Dholi</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" media="screen and (max-width: 1180px)" href="css/tab.css">
    <link rel="stylesheet" media="screen and (max-width: 575px)" href="css/phone.css">
    <link rel="stylesheet" media="screen and (max-width: 440px)" href="css/smallphone.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400;500&family=Bree+Serif&display=swap"
        rel="stylesheet">
</head>

<body>
    <nav id="navbar">
        <div id="logo">
            <img src="https://media-exp1.licdn.com/dms/image/C5103AQEmdRp4mV0ihQ/profile-displayphoto-shrink_800_800/0/1580143606282?e=1635984000&v=beta&t=IfUiHjWPFSzFSrBaGHbGnqzkiBZpx_th8eKemVFFXdA"
                alt="Abhinav Dholi">
        </div>
        <ul>
            <li class="item"><a href="#">Home</a></li>
            <li class="item"><a href="#">About Me</a></li>
            <li class="item"><a href="#">My Skills</a></li>
            <li class="item"><a href="#">Connect with me</a></li>
        </ul>
    </nav>

    <section id="home">
        <h1 class="h-primary">Welcome to my page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel optio quibusdam itaque ex. Esse nostrum ipsum sapiente in sunt!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat distinctio aspernatur cumque amet tempore delectus quos incidunt fuga soluta obcaecati.
        </p>
    </section>
    <section class="services-container">
        <h1 class="h-primary center">About My Life</h1>
        <div id="services">
            <div class="box">
                <img src="1.jpg" alt="">
                <h2 class="h-secondary center">GRIP NTU</h2>
                <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam eos minima quibusdam autem at nihil asperiores aliquam ipsa, necessitatibus optio! Rerum aut voluptate nobis ut ullam fugiat iusto reiciendis!</p>

            </div>
            <div class="box">
                <img src="3.jpg" alt="">
                <h2 class="h-secondary center">I love Cats</h2>
                <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam eos minima quibusdam autem at nihil asperiores aliquam ipsa, necessitatibus optio! Rerum aut voluptate nobis ut ullam fugiat iusto reiciendis!</p>

            </div>
            <div class="box">
                <img src="4.jpg" alt="">
                <h2 class="h-secondary center">They are just like me!</h2>
                <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam eos minima quibusdam autem at nihil asperiores aliquam ipsa, necessitatibus optio! Rerum aut voluptate nobis ut ullam fugiat iusto reiciendis!</p>

            </div>
            <!-- <div class="box">
                <img src="5.jpg" alt="">
                <h2 class="h-secondary center">Global Research Immersion Program</h2>
                <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam eos minima quibusdam autem at nihil asperiores aliquam ipsa, necessitatibus optio! Rerum aut voluptate nobis ut ullam fugiat iusto reiciendis!</p>

            </div> -->
        </div>
    </section>
    <section id="client-section">
        <h1 class="h-primary center">My Skills</h1>
        <div id="clients">
            <div class="client-item">
                <img src="skilllang/css.png" alt="">
            </div>
            <div class="client-item">
                <img src="skilllang/html.png" alt="">
            </div>
            <div class="client-item">
                <img src="skilllang/java.png" alt="">
            </div>
            <div class="client-item">
                <img src="skilllang/pandas.png" alt="">
            </div>
            <div class="client-item">
                <img src="skilllang/python.png" alt="">
            </div>
            <div class="client-item">
                <img src="skilllang/ps.png" alt="">
            </div>
            <div class="client-item">
                <img src="skilllang/linux.png" alt="">
            </div>
        </div>
    </section>
    <section id="contact">
        <h1 class="h-primary center">Get in touch</h1>
        <div id="contact-box">
            <form>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name">

                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email">

                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="Enter the subject">

                </div>
                <div class="form-group">
                    <label for="body">Message:</label>
                    <textarea name="body" id="body" cols="30" rows="10"></textarea>

                </div>
                <button type="submit" onclick="sendEmail()" style="margin: 6px 4px; font-family: 'Bree Serif', serif; font-size: 20px;">Send</button>
            </form>
            <h4 class="sent-notification"></h4>
        </div>
    </section>

    <footer>
        <div class="center">
            Connect with me on <a href="https://www.linkedin.com/in/abhinavdholi/"  target="_blank">LinkedIn</a>
            <a href="https://github.com/abhinav-dholi" target="_blank">GitHub</a>
            <a href="https://www.instagram.com/abhinav_dholi/" target="_blank">Instagram</a>
            <a href="https://www.facebook.com/abhinav.dholi" target="_blank">Facebook</a>
            <br>
            <hr>
            <br>
            Copyright &copy; www.abhinavdholi.com All rights reserved!
        </div>
    </footer>

        <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript">
        function sendEmail() {
            var name = $("#name");
            var email = $("#email");
            var subject = $("#subject");
            var body = $("#body");

            if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(body)) {
                $.ajax({
                   url: 'sendEmail.php',
                   method: 'POST',
                   dataType: 'json',
                   data: {
                       name: name.val(),
                       email: email.val(),
                       subject: subject.val(),
                       body: body.val()
                   }, success: function (response) {
                        $('#myForm')[0].reset();
                        $('.sent-notification').text("Message Sent Successfully.");
                   }
                });
            }
        }

        function isNotEmpty(caller) {
            if (caller.val() == "") {
                caller.css('border', '1px solid red');
                return false;
            } else
                caller.css('border', '');

            return true;
        }
    </script>
    
</body>

</html>