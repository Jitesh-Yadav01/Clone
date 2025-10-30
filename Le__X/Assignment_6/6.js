const hour = 7;
const name = `Jitesh Yadav`;
if (hour >= 6 && hour <= 12) {
  console.log(`Good Morning ${name}!`);
} else if (hour >= 12 && hour <= 17) {
  console.log(`Good Afternoon ${name}!`);
} else {
  console.log(`Good Evening ${name}!`);
}

const age = 65;
const isHoliday = 'true';
if((age >= 65 || age <= 6) && !isHoliday) {
  console.log('Discount');
} else {
  console.log('No Discount');
}