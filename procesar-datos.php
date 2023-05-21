<?php
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    echo '<h1>Estos son los datos que se recibieron del formulario:</h1>';
    echo '<p>Usuario: '.$_POST['usuario'].'</p>';
    echo '<p>Contraseña: '.$_POST['password'].'</p>';
}
?>