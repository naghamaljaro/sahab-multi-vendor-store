$(function(){ 


// All p tags that have no children, but only if they don't have a class of ignore.
$( "p:not(.ignore):has(>)")

// Any element with the text "REPLACE_ME" in it.
$( ":contains('REPLACE_ME')" )

// All div tags with a child that has a class of special.
$( "div:has(.special)" )

// All heading elements (h1, h2, h3, h4, h5, h6).
$( "h1, h2, h3, h4, h5, h6" )

// Every other visible li.
$( "li:visible:even" )


});