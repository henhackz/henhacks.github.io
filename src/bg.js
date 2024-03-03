import { renderDreamEnvironment, removeDreamEnvironment } from './enviroments/dream.js'
import { renderWaterEnvironment, removeWaterEnvironment } from './enviroments/water.js';
import { renderForestEnvironment, removeForestEnvironment } from './enviroments/forest.js';

document.getElementById("1").addEventListener("click", function() {
    console.log(1);
    document.body.style.background = "radial-gradient(circle, rgba(149,127,173,1) 0%, rgba(101,59,147,1) 100%)"
    removeScenes();
    renderDreamEnvironment();
document.getElementById("2").addEventListener("click", function() {
    console.log(2);
    document.body.style.background = "radial-gradient(circle, rgba(113,160,169,1) 0%, rgba(39,72,148,1) 100%)"
    removeScenes();
    renderWaterEnvironment();
});
document.getElementById("3").addEventListener("click", function() {
    console.log(3);
    document.body.style.background = "radial-gradient(circle, rgba(117,185,152,1) 0%, rgba(20,94,41,1) 100%)"
    removeScenes();
    renderForestEnvironment();
});
const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", function() {
    console.log("resetting orientation")
});

function removeScenes() {
    removeWaterEnvironment();
    removeForestEnvironment();
    removeDreamEnvironment();
}
function adjustResetButtonPosition() {
    if (resetButton.getBoundingClientRect().left < document.getElementById("3").getBoundingClientRect().right) {
        console.log("YES");
        document.getElementsByClassName("selection")[0].style = "bottom:7%";
    }
    else {
        document.getElementsByClassName("selection")[0].style = "bottom:2%";
    }
}
window.addEventListener('resize', adjustResetButtonPosition);

