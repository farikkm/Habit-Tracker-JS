import { monthNames } from "../helpers/constants";

export default function renderCalendar(daysContainerElem, currentDateElem) {
  if (!daysContainerElem || !currentDateElem) return;

  currentDateElem.innerHTML = ""
  daysContainerElem.innerHTML = "";

  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  currentDateElem.textContent = `${monthNames[month]} ${year}`;

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    daysContainerElem.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElem = document.createElement("div");
    dayElem.classList.add("calendar__day");
    dayElem.textContent = day;
    
    const isSunday = new Date(year, month, day).getDay() === 0;

    if (isSunday) {
      dayElem.style.backgroundColor = "rgba(255, 0, 0, 0.05)"
    }

    if (day === now.getDate()) {
      dayElem.classList.add("calendar__today");
    }

    daysContainerElem.appendChild(dayElem);
  }
}
