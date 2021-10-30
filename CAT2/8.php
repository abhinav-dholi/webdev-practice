<?php
echo "Cookies<br>";

// Cookies | Sessions
// cookies -> used to store regular informarion about user.
// session -> used to store sensitive information about user.
echo time();
echo "<br>"; 
setcookie("category", "Books", time() + 86400, "/"); 
echo "The cookie is set<br>";


 ?>
 