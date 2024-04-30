// Isaiah Emmons
// April 30th 2024
// Fortune Teller Project JS

// ARRAYS
const countries =[
    'Japan',
    'Russia',
    'Canada',
    'United States',
    'North Korea',
    'Great Britain',
    'Australia',
    'Turkmenistan'
];
const jobs =[
    'Circus Clown',
    'Musicain',
    'Scientist',
    'Solider',
    'Teacher',
    'Hacker',
    'Criminal',
    'Athlete',
    'Blacksmith'
];

// INPUT
const year = Math.floor(Math.random()* 30)
const randCountry = countries[Math.floor(Math.random()*countries.length)];
const randJob = jobs[Math.floor(Math.random()*jobs.length)];
const firstName = prompt('What is your First Name?');
const fortune = `In ${year} year(s), ${firstName} will be working as a(n) ${randJob} in ${randCountry}.`

// OUTPUT
