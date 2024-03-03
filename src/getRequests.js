// sleep function stolen from here: https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData() {
    const response = await fetch("https://soundificatorinator.onrender.com/");
    await console.log(response);
    sleep(1000);
    const data = await response.text();
    await console.log(data);
    var parsed = data.split(',');
    var x = parsed[0];
    var y = parsed[1];
    var z = parsed[2];
    return 0;
  }

var threadID = setInterval(getData,100);
//clearInterval(threadID);