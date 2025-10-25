<?php

try{
    require 'database.php';
    $sql = "SELECT * FROM vuelo";
    $resultado = mysqli_query($conn, $sql);

    return $resultado;
}
catch(\Throwable $th){
    echo $th;
}