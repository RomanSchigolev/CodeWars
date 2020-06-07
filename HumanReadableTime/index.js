const humanReadable = seconds => {
  const secondsPer = { hour: 3600, minute: 60 };
  const hour = Math.floor(seconds / secondsPer.hour);
  const lessThanHour = seconds - secondsPer.hour * hour;
  const minute = Math.floor(lessThanHour / secondsPer.minute);
  const second = lessThanHour - secondsPer.minute * minute;

  const setFormat = number => ((number < 10) ? `0${number}` : number);
  return `${setFormat(hour)}:${setFormat(minute)}:${setFormat(second)}`;
}

console.log(humanReadable(359999)); // 99:59:59