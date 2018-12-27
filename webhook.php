<?php
// Use in the "Post-Receive URLs" section of your GitHub repo.
if ( $_POST['payload'] ) {
 // shell_exec( 'git reset --hard HEAD && git pull' );
  //echo shell_exec( 'git reset --hard HEAD' ); 
  echo shell_exec( 'git pull' );
  echo shell_exec( 'git status' );
  //print_r($_POST);
}
?>hi..
