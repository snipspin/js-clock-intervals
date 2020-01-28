document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    // find all handles in DOM and store them in domHandles{}
    domHandles.second = document.querySelector(`#second`);
    console.log(domHandles.second);

    //domHandles.minute = document.querySelector(`#${}`)
    for (const key in domHandles) {
        if (domHandles.hasOwnProperty(key)) {
            const element = domHandles[key];
            console.log(`element is ${element}`);
        }
    }
    // start the clock
    setInterval(function(){
        console.log("TICK!");
     }, 1000);
});

// precomputed rotation for 60 steps
const rotation = [
    0,6,12,18,24,30,36,42,48,54,
    60,66,72,78,84,90,96,102,108,114,
    120,126,132,138,144,150,156,162,168,174,
    180,186,192,198,204,210,216,222,228,234,
    240,246,252,258,264,270,276,282,288,294,
    300,306,312,318,324,330,336,342,348,354
];

const domHandles = {
    hour: null,
    minute: null,
    second: null
};