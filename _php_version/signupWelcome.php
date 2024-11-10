<?php 
session_start();
if(isset($_POST['cerrarSesion'])){
    unset($_SESSION['usuario']);
    unset($_SESSION['perfil']);
    header('Location: login.php');
    session_destroy();

}
?>

<?php if(isset($_SESSION['usuario'])) { ?>
<?php include 'partials/header.php' ?>

    <div class="container">
        <div class="row mt-3 justify-content-md-center">
            <div class="col-md-6">
                <h1>Hola, bienvenido <?php echo '<strong>'.$_SESSION['usuario'].'</strong>'; ?> eres 
                    <?php echo '<strong>'.$_SESSION['perfil'].'</strong>'; ?></h1>
            </div>

        </div>
        <?php if($_SESSION['perfil'] == "Admin")  { ?>
        <div class="row mt-3 justify-content-md-center">
            <form action="index2.php" method="POST">
            <button type="submit" class="btn btn-primary btn-block" name="irPanelAdmin"> Panel Admin </button>
            </form>
        </div>
        <div class="row mt-3 justify-content-md-center">
            <form action="" method="POST">
            <button type="submit" class="btn btn-primary btn-block" name="cerrarSesion"> Cerrar Sesión </button>
            </form>
        </div>
        <?php } else { ?>
        <div class="row mt-3 justify-content-md-center">
            <form action="indexFaro.php" method="POST">
            <button type="submit" class="btn btn-primary btn-block" name="irPeriodico"> Ir a Periodico el Faro </button>
            </form>
        </div>
        <div class="row mt-3 justify-content-md-center">
            <form action="" method="POST">
            <button type="submit" class="btn btn-primary btn-block" name="cerrarSesion"> Cerrar Sesión </button>
            </form>
        </div>


    <?php }  ?>


    </div>

<?php include 'partials/footer.php'; ?>
<?php }else{ 
    header('Location: index.php');
 } ?>