<?php
//echo sys_get_temp_dir();
//echo phpinfo();
$t = gettimeofday();
$usec = ($t['sec'] - 1543000000) . str_pad($t['usec'], 6, "0", STR_PAD_LEFT) ;
echo $usec;

//echo str_pad($input, 10, "-=", STR_PAD_LEFT);

//print_r($_SERVER);
?>