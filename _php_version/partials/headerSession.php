<?php 
session_start();
if(isset($_POST['cerrarSesion'])){ // si apretamos boton cerrar sesion redirige a index para volver a logearse
    unset($_SESSION['usuario']); // unset elimina variables
    unset($_SESSION['perfil']); // unset elimina variables
    session_destroy(); // mata la sesion
    header('Location: /proyecto_web_el_faro_php/index.php');
}
else if (isset($_SESSION['usuario'])){ // si no existe valor en variable sesion redirige para logearse
    $usuario = $_SESSION['usuario'];
}else{
  header('Location: /proyecto_web_el_faro_php/index.php'); //Aqui lo redireccionas al lugar que quieras.
  die();
}
?>

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
  <link rel="stylesheet" href="/proyecto_web_el_faro_php/css/cards.css">
</head>

<body>

  <!-- START NAV -->
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="/proyecto_web_el_faro_php/faroico.png" alt="Logo">
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

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" style="color: rgb(196, 196, 255);">
                Categorias
              </a>

              <div class="navbar-dropdown">
                <a href="/proyecto_web_el_faro_php/indexFaro.php" class="navbar-item" style="color: rgb(0, 0, 12);">
                  Miscelaneos
                </a>
                <a href="/proyecto_web_el_faro_php/nacional/nacional.php" class="navbar-item" style="color: rgb(0, 0, 12);">
                  Nacional
                </a>


                <div class="nested navbar-item dropdown">
                  <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                      <span>Deportes</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <a href="/proyecto_web_el_faro_php/deportes/futbol/futbol.php" class="dropdown-item">
                        Futbol
                      </a>
                      <a href="/proyecto_web_el_faro_php/deportes/basquetbol/basquetbol.php" class="dropdown-item" >
                        Basquetbol
                      </a>
                      <a href="/proyecto_web_el_faro_php/deportes/tenis/tenis.php" class="dropdown-item">
                        Tenis
                      </a>
                    </div>
                  </div>
                </div>

                <hr class="navbar-divider" style="color: rgb(0, 0, 12);">
                
              </div>
            </div>
            

            <a class="navbar-item">
              <?php echo '<strong>'.$_SESSION['usuario'].'</strong>'; ?>
            </a>

            <a class="navbar-item">
              <?php echo '<strong>'.$_SESSION['perfil'].'</strong>'; ?>
            </a>

            <div class="navbar-item is-hoverable">
            <form action="" method="POST">
            <button type="submit" name="cerrarSesion" style="color: rgb(240,248,255));"> Cerrar Sesión </button>
            </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </nav>
  <!-- END NAV -->

   <section class="hero">
    <figure class="image">
      <img src="/proyecto_web_el_faro_php/farobanner.jpg">
    </figure>
  </section>