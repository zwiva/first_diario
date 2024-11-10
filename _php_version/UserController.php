<?php 

    // vALIDACION DATOS DE USUARIO PARA EL LOGIN
    if(isset($_POST['submit'])){
        $rutuser = $_POST['rutuser'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $perfil = $_POST['perfil'];

        if(empty($rutuser) || empty($username) || empty($password) || empty($perfil)){
            echo '<div class="alert alert-danger">Rut, Nombre de usuario, contraseña o perfil es vacio</div>';
        }else{
            $user = new User;

            if($user->getUser($rutuser,$username,$password,$perfil)){
                session_start();
                $_SESSION['rutuser'] = $rutuser;
                $_SESSION['usuario'] = $username;
                $_SESSION['perfil'] = $perfil;
                header('Location: welcome.php');
            }else{
             echo '<div class="alert alert-danger">Usuario no existe</div>';
            }
        }

    }

    // rEGISTRO DE USUARIO LECTOR PARA LA SUSCRIPCION AL SITIO 
    if(isset($_POST['registrar'])){
        $rutuser = $_POST['rutuser'];
        $username = $_POST['username'];
        $password = $_POST['password'];

        if(empty($rutuser) || empty($username) || empty($password)){
            echo '<div class="alert alert-danger">RUT, Nombre de usuario o contraseña es vacio</div>';
        }else{
            $user = new User;

            if($user->getInsert($rutuser,$username,$password)){
                echo '<div class="alert alert-success">Registrado Correctamente</div>';
                echo '<div class="row mt-3 justify-content-md-center">
                        <form action="indexFaro.php" method="POST">
                        <button type="submit" class="btn btn-primary btn-block" name="irPeriodico"> Ir a Periodico el Faro </button>
                        </form>
                    </div>';
            }else{
             echo '<div class="alert alert-danger">Usuario ya existe</div>';
            }
        }

    }


    // 
    if(isset($_POST['cargatablasuscriptores'])){
        $user = new User;

            if($user->getUsersDataAdmin()){
                echo '<div class="alert alert-success">Si existen suscriptores</div>';
            }else{
             echo '<div class="alert alert-danger">Si existen suscriptores</div>';
            }

    }