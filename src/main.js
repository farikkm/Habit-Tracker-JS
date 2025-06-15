// Styles
import "./assets/styles/main.scss";
// Modules
import loadPage from "./helpers/loadPage";
import { PAGES_FOLDER } from "./helpers/constants";
import renderCalendar from "./modules/calendar";
import renderHabits from "./modules/habits";

async function main() {
  if (window.location.pathname === "/") {
    await loadPage(PAGES_FOLDER + "/home.html");

    const calendarDays = document.getElementById("calendar-days");
    const calendarWeekDays = document.getElementById("calendar-weekdays");
    const calendarYear = document.getElementById("calendar-year");

    renderCalendar(calendarDays, calendarWeekDays, calendarYear);

    // New Habit
    const habits = JSON.parse(localStorage.getItem("habits")) || [];
    const form = document.getElementById("create-new-habit");
    const habitsContainer = document.getElementById("habits");

    const addNewHabit = (habit) => {
      habits.push(habit);
      localStorage.setItem("habits", JSON.stringify(habits));
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const newHabit = fd.get("new-habit"); 

      addNewHabit(newHabit)
      renderHabits(habits, habitsContainer);

      form.reset();
    });

    renderHabits(habits, habitsContainer);
  } else {
    await loadPage(PAGES_FOLDER + "/pageNotFound.html");
  }
}

main();
