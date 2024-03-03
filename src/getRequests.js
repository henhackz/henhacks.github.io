// sleep function stolen from here: https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData() {
    const response = await fetch("http://example.com/movies.json");
    const data = await response.json();
    console.log(data);
  }

getData();