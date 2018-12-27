<?php
// Use in the "Post-Receive URLs" section of your GitHub repo.
//if ( $_POST['payload'] ) {
 // shell_exec( 'git reset --hard HEAD && git pull' );
  //echo shell_exec( 'git reset --hard HEAD' ); 
  echo exec( 'git pull', $arr );
  print_r($arr);
  //echo shell_exec( 'git status' );
  //print_r($_POST);
//}
?>hi....
