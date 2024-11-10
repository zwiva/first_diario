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
<h1 style="text-align: center;">Sign Up</h1>
<div class="container">
    <div class="row mt-3 justify-content-md-center">
        <div class="col-md-6">
            <form action="" method="POST">
                <div class="form-group">
                <label for="rutuser">RUT:</label>
                    <input class="form-control" name="rutuser" placeholder="RUT" value="" type="text">
                </div>
                <div class="form-group">
                <label for="username">Nombre:</label>
                    <input class="form-control" name="username" placeholder="Nombre" value="" type="text">
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input class="form-control" name="password" value="" type="password">
                </div>
                <button type="submit" name="registrar" class="btn btn-sm btn-block btn-primary">Registrate</button>
            </form>
        </div>
    </div>
</div>


<?php include 'partials/footer.php'?>

