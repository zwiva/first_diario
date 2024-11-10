<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>El Faro - Noticias al día</title>
  <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
  <script src="https://kit.fontawesome.com/7dc3015a44.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <link rel="stylesheet" href="css/cards.css">
</head>

<body>

  <!-- START NAV -->
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="faroico.png" alt="Logo">
        </a>
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">


          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="index.php">
              Portada
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                  <a href="signup.php" class="button is-primary">
                  <strong>Sign up</strong>
                  </a>
                  <a href="login.php" class="button is-light">
                  Log in
                  </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </nav>
  <!-- END NAV -->


  <section class="hero">
    <figure class="image">
      <img src="farobanner.jpg">
    </figure>
  </section>
  

</body>

<?php include 'partials/footerSession.php' ?>
