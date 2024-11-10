<?php 

    class User extends Database{

        public function getUser($rutuser, $username, $password, $perfil){
            $sql = "SELECT * FROM User WHERE rutuser = $rutuser AND username = '$username' AND password ='$password' AND perfil ='$perfil'";

            $result = $this->connect()->query($sql);

            $numRows = $result->num_rows;
            if($numRows == 1){
                return true;
            }

            return false;
        }



        public function getInsert($rutuser, $username, $password){
            $sql = "INSERT INTO user (rutuser, username, password, perfil) VALUES ($rutuser, '$username', '$password', 'Lector')";
            $result = $this->connect()->query($sql);

            if($result == 1){
                return true;    
            }
            return false;
        }

        public function getUsersDataAdmin(){
            $sql = "SELECT rutuser, username, password, perfil FROM user WHERE perfil = 'Lector'";
            $result = $this->connect()->query($sql);
            #echo $result;

            

            echo '<table class="table">';
            echo '<thead>';
            echo '<tr>';
            echo '<th scope="col">RUT</th>';
            echo '<th scope="col">USERNAME</th>';
            echo '<th scope="col">PASSWORD</th>';
            echo '<th scope="col">PERFIL</th>';
            echo '</tr>';
            echo '</thead>';

            while($rows = $result->fetch_array()) {
                echo '<tr>';
                echo '<td>'.$rows[0].'</td>';
                echo '<td>'.$rows[1].'</td>';
                echo '<td>'.$rows[2].'</td>';
                echo '<td>'.$rows[3].'</td>';
                echo '<tr>';
            }
            echo '</table';

            $numRows = $result->num_rows;
            echo $numRows;
            if($numRows > 0){
                return true;
            }

            return false;


            
        }

    }