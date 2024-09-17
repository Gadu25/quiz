import moment from "moment"

function parseJapanTime(japanTimeString) {
    const japanTimeFormat = 'YYYY 年 M 月 D 日 HH 時 mm 分 ss 秒';
    const japanTime = moment(japanTimeString, japanTimeFormat, 'ja');
    
    const isoString = japanTime.toISOString();

    const unixTime = japanTime.unix();

    return {
        isoString,
        unixTime
    };
}

function parseLondonTime(londonTimeString) {
    const londonTimeFormat = 'DD.MM YYYY | HH: mm: ss';
    const londonTime = moment(londonTimeString, londonTimeFormat, 'en');

    const isoString = londonTime.toISOString();

    const unixTime = londonTime.unix();

    return {
        isoString,
        unixTime
    };
}

const japanTimeString = '2024 ねん 2 げつ 7 にち 23 じ 59 ふん 12 びょう';
const londonTimeString = '02.07 2024 | 23: 59: 12';

console.log(parseJapanTime(japanTimeString));
console.log(parseLondonTime(londonTimeString));