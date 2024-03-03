// comment to force rebuild
document.getElementById("1").addEventListener("click", function() {
    console.log(1);
    document.body.style.background = "radial-gradient(circle, rgba(149,127,173,1) 0%, rgba(101,59,147,1) 100%)"
    //play ourple
});
document.getElementById("2").addEventListener("click", function() {
    console.log(2);
    document.body.style.background = "radial-gradient(circle, rgba(113,160,169,1) 0%, rgba(39,72,148,1) 100%)"
    //play ocean
});
document.getElementById("3").addEventListener("click", function() {
    console.log(3);
    document.body.style.background = "radial-gradient(circle, rgba(117,185,152,1) 0%, rgba(20,94,41,1) 100%)"
    //play forest
});
document.getElementById("reset").addEventListener("click", function() {
    console.log("resetting orientation")
});
