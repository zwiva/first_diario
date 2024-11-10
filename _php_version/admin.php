<?php 
session_start();
if(isset($_POST['cerrarSesion'])){
    unset($_SESSION['usuario']);
    unset($_SESSION['perfil']);
    header('Location: login.php');
    session_destroy();

}

include 'Database/Db.php';
include 'UserModel.php';
include 'UserController.php';
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

        <br>
        <h1 style="text-align: center;">Panel Admin</h1>

        <form action="" method="POST">
            <button type="submit" name="cargatablasuscriptores" class="btn-primary">Mostrar Todos los  Suscriptores</button>
        </form>




    <?php }  ?>


    </div>

<?php include 'partials/footer.php'; ?>