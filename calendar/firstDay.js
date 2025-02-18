const dayjs = require('dayjs');
const localeData = require('dayjs/plugin/localeData');
const nl = require('dayjs/locale/nl');

dayjs.extend(localeData);
dayjs.locale(nl);

const now = dayjs();
console.log("Current Date and Time:", now.toString());

// Format the date
const formattedDate = now.format('YYYY-MM-DD');
console.log("Formatted Date:", formattedDate);

// Add 7 days
const nextWeek = now.add(7, 'day');
console.log("Next Week:", nextWeek.format('YYYY-MM-DD'));

console.log("Local Date and Time:", now.format('YYYY-MM-DD HH:mm:ss'));

console.log(now.format('dddd, MMMM D, YYYY'));

console.log("Volledige Datum:", now.format('dddd D MMMM YYYY'));