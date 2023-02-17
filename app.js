console.log('hey itachi');

const endDate = "18 February 2023 12:00 AM";
const inputs = document.querySelectorAll('input');


const ED = document.querySelector('#end-date').textContent = endDate;

console.log(ED);


const clock = function() {

    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000 ; // by dividing with 1000 i made miliseconds into seconds! maths is indeed needed!
    // console.log(diff);
    // Convert Into Days

    if(diff<0){
        return; // when the timer will be done! it will stop working!
    }

    inputs[0].value =  Math.floor(diff / 3600 / 24);
    // Convert Into Hours
    inputs[1].value =  Math.floor((diff / 3600) % 24);
    // Convert Into Minutes
    inputs[2].value =  Math.floor((diff / 60) % 60);
    // Convert Into Seconds
    inputs[3].value =  Math.floor((diff) % 60);
    

}


console.log(clock());


// 1 Day = 24hours
// 1 Hour = 60min
// 60min = 3600sec


setInterval(
    () =>{
        clock()
    },
    1000
)

// this setInterval Function Will Call Clock Function After Every Second