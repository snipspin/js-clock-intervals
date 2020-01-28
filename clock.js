// this function rotates a given element 
const setRotation = function(elementToRotate, degrees) {
    elementToRotate.style.transform = `rotate(${degrees}deg)`;
};

// precomputed rotation for 60 steps
const rotation = [
    0,6,12,18,24,30,36,42,48,54,
    60,66,72,78,84,90,96,102,108,114,
    120,126,132,138,144,150,156,162,168,174,
    180,186,192,198,204,210,216,222,228,234,
    240,246,252,258,264,270,276,282,288,294,
    300,306,312,318,324,330,336,342,348,354
];

// this type of clock shows the time since it is active
const timePassedClock = {
    interval: 0,
    secondsPassed: 0,
    minutesPassed: 0,
    fifthOfHour : 0,
    hoursPassed: 0,
    tick: function() {
        // first increment interval
        this.interval++;
        // then move the seconds handle
        setRotation(domHandles.second, rotation[this.interval]);
        // and increment the counter for passed seconds
        this.secondsPassed++;
        // after 60 seconds, increment the counter for passed minutes
        // and rotate the handle
        if (this.secondsPassed === 60) 
        {
            this.secondsPassed = 0;
            this.minutesPassed++;
            this.fifthOfHour++;
            setRotation(domHandles.minute, rotation[this.minutesPassed]);
        }
        // then after 12 minutes do the same thing with the handle for hours
        if (this.fifthOfHour === 12) 
        {
            this.fifthOfHour = 0;
            this.hoursPassed++;
            setRotation(domHandles.hour, rotation[this.hoursPassed]);
        }
        // 
        if (this.hoursPassed === 60) 
        {
            this.hoursPassed = 0;
        }

        if(this.minutesPassed === 60)
        {
            this.minutesPassed = 0;
        }
        
        if (this.interval === 59) 
        {
            this.interval = -1;
        }
    }
};

// controls which type clock to use
let clockInUse = {
    clockType : timePassedClock,
    tick: function() { this.clockType.tick(); }
};

// holds the handles DOM-elements
const domHandles = {
    hour: null,
    minute: null,
    second: null
};

// wait to loaded
document.addEventListener('DOMContentLoaded', function() {
    // find all handles in DOM and store them in domHandles{}
    domHandles.second = document.querySelector(`#second`);
    domHandles.minute = document.querySelector(`#minute`);
    domHandles.hour = document.querySelector(`#hour`);
    // start the clock
    setInterval(function(){
        clockInUse.tick();
     }, 1000);
});