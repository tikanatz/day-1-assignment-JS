var now            = new Date()
var holloween      = new Date(2020, 9,31)

var milliseconds   = holloween - now

var seconds        = milliseconds/ 1000
var mins           = seconds     / 60 
var hours          = mins        / 60
var days           = hours       / 24
var weeks          = days        / 7
var months         = weeks       / 4

alert(days.toFixed(2) + " days until holloween 2020")
alert(Math.round(weeks) + " weeks until holloween 2020")
alert(Math.round(months) + " months until holloween 2020")