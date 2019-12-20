const countDownBox = document.getElementById("count-down-box");
const deadlineMessage = document.getElementById("deadline-message");
const deadlineTime = new Date();
deadlineTime.setMonth(11);
deadlineTime.setDate(15);
deadlineTime.setHours(23);
deadlineTime.setMinutes(59);
deadlineTime.setSeconds(59);
deadlineTime.setMilliseconds(999);
if ((new Date).getTime() > deadlineTime.getTime()) {
  deadlineTime.setFullYear(deadlineTime.getFullYear() + 1);
}
const deadlineTimeStamp = deadlineTime.getTime();
deadlineMessage.innerText = `${deadlineTime.getFullYear()}年 レポート締め切り12月15日まで`;

const timeStampDifference = () => {
  const nowTimeStamp = (new Date()).getTime();
  return deadlineTimeStamp - nowTimeStamp;
}

const assembleTimeString = (timeStamp) => {
  const hours = Math.floor(timeStamp / (1000 * 60 * 60));
  const minuits = Math.floor((timeStamp % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeStamp % (1000 * 60 * 60) % (1000 * 60)) / (1000));
  const seconds0 = ("0" + seconds).slice(-2);
  const mSeconds = Math.floor((timeStamp % (1000 * 60 * 60) % (1000 * 60) % (1000)));
  const mSeconds0 = ("00" + mSeconds).slice(-3);
  return `${hours}時間 ${minuits}分 ${seconds0}.${mSeconds0}秒`;
}

setInterval(() => {
  const timeUpToDeadline = new Date(timeStampDifference());
  countDownBox.innerText = assembleTimeString(timeUpToDeadline);
}, 1000 / 60);