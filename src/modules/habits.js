export default function renderHabits(habits, habitsContainer) {
  habitsContainer.innerHTML = ""

  habits.forEach((habit, index) => {
    const habitElem = document.createElement("div");
    habitElem.classList.add("habit");

    const habitIndex = document.createElement("span");
    habitIndex.textContent = `${index + 1}.`;

    habitElem.append(habitIndex, habit);
    habitsContainer.appendChild(habitElem);
  });
}
