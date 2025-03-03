
document.addEventListener("DOMContentLoaded", function() {
  const startTimeInput = document.getElementById("appt");
  const endTimeInput = document.getElementById("tapp");
  const displayTime = document.getElementById("display-time");

  function calculateTimeDifference(){
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;

    if (!startTime || !endTime){
      displayTime.textContent="Selecteer beide tijden.";
      return;
    }

    const start = dayjs(`2000-01-01T${startTime}`);
    const end = dayjs(`2000-01-01T${endTime}`);

    let diff = end.diff(start, "minute");

    if(diff < 0){
      displayTime.textContent = "Eindtijd moet later zijn dan starttijd."
    }else{
      const hours = Math.floor(diff / 60);
      const minutes = diff % 60;
      displayTime.textContent = `Tijdsverschil: ${hours} uur en ${minutes} minuten`;
    }
  }
  startTimeInput.addEventListener("input", calculateTimeDifference);
  endTimeInput.addEventListener("input", calculateTimeDifference);
});