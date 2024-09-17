import moment from "moment"

let dateNow = moment()

const japanTimeString = dateNow.format('YYYY ねん M げつ D にち HH じ mm ふん ss びょう');

const londonTimeString = dateNow.format('DD.MM YYYY | HH: mm: ss');

console.log("Date Now:", dateNow.format('YYYY MM DD | HH:mm:ss'))
console.log('Converted to Japan Time:', japanTimeString);
console.log('Converted to London Time:', londonTimeString);