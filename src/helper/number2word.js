var MAX_SAFE_INTEGER = 9007199254740991;
// Simplified https://gist.github.com/marlun78/885eb0021e980c6ce0fb

// ========== file: /src/toWords.js ==========

var TEN = 10;
var ONE_HUNDRED = 100;
var ONE_THOUSAND = 1000;
var TEN_THOUSAND = 10000;
var HUNDRED_THOUSAND = 100000;
var ONE_MILLION = 1000000;
var ONE_BILLION = 1000000000; //         1.000.000.000 (9)
var ONE_TRILLION = 1000000000000; //     1.000.000.000.000 (12)
var ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
var MAX = 9007199254740992; // 9.007.199.254.740.992 (15)

var LESS_THAN_TWENTY = [
  "ສູນ",
  "ໜຶ່ງ",
  "ສອງ",
  "ສາມ",
  "ສີ່",
  "ຫ້າ",
  "ຫົກ",
  "ເຈັດ",
  "ແປດ",
  "ເກົ້າ",
  "ສິບ",
  "ສິບເອັດ",
  "ສິບສອງ",
  "ສິບສາມ",
  "ສິບສີ່",
  "ສິບຫ້າ",
  "ສິບຫົກ",
  "ສິບເຈັດ",
  "ສິບແປດ",
  "ສິບເກົ້າ",
  "ຊາວ",
  "ຊາວເອັດ",
];

var TENTHS_LESS_THAN_HUNDRED = [
  "ສູນ",
  "ສິບ",
  "ຊາວ",
  "ສາມສິບ",
  "ສີ່ສິບ",
  "ຫ້າສິບ",
  "ຫົກສິບ",
  "ເຈັດສິບ",
  "ແປດສິບ",
  "ເກົ້າສິບ",
];

function isFinite(value) {
  return !(
    typeof value !== "number" ||
    value !== value ||
    value === Infinity ||
    value === -Infinity
  );
}

function isSafeNumber(value) {
  return typeof value === "number" && Math.abs(value) <= MAX_SAFE_INTEGER;
}

function toWords(number, asOrdinal) {
  var words;
  var num = parseInt(number, 10);

  if (!isFinite(num)) {
    throw new TypeError(
      "Not a finite number: " + number + " (" + typeof number + ")"
    );
  }
  if (!isSafeNumber(num)) {
    throw new RangeError(
      "Input is not a safe number, it’s either too large or too small."
    );
  }
  words = generateWords(num);
  return asOrdinal ? asOrdinal(words) : words;
}

function generateWords(number) {
  var remainder,
    word,
    words = arguments[1];

  // We’re done
  if (number === 0) {
    return !words ? "zero" : words.join("").replace(/,$/, "");
  }
  // First run
  if (!words) {
    words = [];
  }
  // If negative, prepend “minus”
  if (number < 0) {
    words.push("minus");
    number = Math.abs(number);
  }

  if (number < 22) {
    remainder = 0;
    word = LESS_THAN_TWENTY[number];
  } else if (number < ONE_HUNDRED) {
    remainder = number % TEN;
    word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
    // In case of remainder, we need to handle it here to be able to add the “-”
    if (remainder) {
      word += "" + LESS_THAN_TWENTY[remainder];
      remainder = 0;
    }
  } else if (number < ONE_THOUSAND) {
    remainder = number % ONE_HUNDRED;
    word = generateWords(Math.floor(number / ONE_HUNDRED)) + "ຮ້ອຍ";
  } else if (number < TEN_THOUSAND) {
    remainder = number % ONE_THOUSAND;
    word = generateWords(Math.floor(number / ONE_THOUSAND)) + "ພັນ";
  } else if (number < HUNDRED_THOUSAND) {
    remainder = number % TEN_THOUSAND;
    word = generateWords(Math.floor(number / TEN_THOUSAND)) + "ໝື່ນ";
  } else if (number < ONE_MILLION) {
    remainder = number % HUNDRED_THOUSAND;
    word = generateWords(Math.floor(number / HUNDRED_THOUSAND)) + "ແສນ";
  } else if (number < ONE_BILLION) {
    remainder = number % ONE_MILLION;
    word = generateWords(Math.floor(number / ONE_MILLION)) + "ລ້ານ";
  } else if (number < ONE_TRILLION) {
    remainder = number % ONE_BILLION;
    word = generateWords(Math.floor(number / ONE_BILLION)) + "ຕື້";
  } else if (number < ONE_QUADRILLION) {
    remainder = number % ONE_TRILLION;
    word = generateWords(Math.floor(number / ONE_TRILLION)) + "ແສນລ້ານ";
  } else if (number <= MAX) {
    remainder = number % ONE_QUADRILLION;
    word = generateWords(Math.floor(number / ONE_QUADRILLION)) + "ລ້ານລ້ານ";
  }

  words.push(word);
  return generateWords(remainder, words);
}
export default generateWords;
