const countDownBox = document.getElementById("count-down-box");
const deadlineTimeStamp = new Date(2020, 11, 15, 23, 59, 59, 999).getTime();

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