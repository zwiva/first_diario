<?php 
session_start();
if(isset($_SESSION['usuario'])){
        header('Location: welcome.php');
    }

include 'Database/Db.php';
include 'UserModel.php';
include 'UserController.php';

?>

<?php include 'partials/header.php'?>
<br>
<h1 style="text-align: center;">Login</h1>
<div class="container">
    <div class="row mt-3 justify-content-md-center">
        <div class="col-md-6">
            <form action="" method="POST">
                <div class="form-group">
                <label for="rutuser">RUT:</label>
                    <input class="form-control" name="rutuser" placeholder="Ingrese su rut" value="" type="text">
                </div>
                <div class="form-group">
                <label for="username">Nombre:</label>
                    <input class="form-control" name="username" placeholder="Ingrese username" value="" type="text">
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input class="form-control" name="password" placeholder="Ingrese su contraseña" value="" type="password">
                </div>
                <div class="form-group">
                <label for="perfil">Perfil:</label>
                    <input class="form-control" name="perfil" placeholder="Lector o Admin" value="" type="text">
                </div>
                <button type="submit" name="submit" class="btn btn-sm btn-block btn-primary">Iniciar Sesion</button>
            </form>
        </div>
    </div>
</div>


<?php include 'partials/footer.php'?>

