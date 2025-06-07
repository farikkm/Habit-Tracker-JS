// Styles
import "./assets/styles/main.scss";
// Modules
import loadPage from "./helpers/loadPage";
import { PAGES_FOLDER } from "./helpers/constants";
import renderCalendar from "./modules/calendar";

async function main() {
  if (window.location.pathname === "/") {
    await loadPage(PAGES_FOLDER + "/home.html");

    const calendarDays = document.getElementById("calendar-days");
    const calendarYear = document.getElementById("calendar-year");

    renderCalendar(calendarDays, calendarYear)
  } else {
    await loadPage(PAGES_FOLDER + "/pageNotFound.html");
  }
}

main();
