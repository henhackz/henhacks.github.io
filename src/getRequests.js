export let gyroXRot = 0.0;
export let gyroYRot = 0.0;
export let gyroZRot = 0.0;

// sleep function stolen from here: https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData() {
    const response = await fetch("https://soundificatorinator.onrender.com/");
    //await console.log(response);
    sleep(1000);
    const data = await response.text();
    await console.log(data);
    var parsed = data.split(',');
    if(parsed) {
      gyroXRot = parsed[0];
      gyroYRot = parsed[1];
      gyroZRot = parsed[2];
    }
    return 0;
  }

var threadID = setInterval(getData,50);
//clearInterval(threadID);