<?php
// INFORMIX SQL permite la conexión usando sql driver PDO
 try {
    ///Zona horaria local
    date_default_timezone_set('America/Guayaquil');
    ///Conexión
    $db = new PDO("informix:host=192.168.0.2;service=1526;database=edpacif;server=ol_server;protocol=onsoctcp;EnableScrollableCursors=1", "informix", "informix");
   //para traer datos DB en español
     $db -> exec("set names utf8");
     $conexion = 1;
      
    }
    
     catch (Exception $e) { 

        $conexion = 0;

    }
    
?>