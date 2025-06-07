const app = document.getElementById("app");

export default async function loadPage(path) {
  try {
    const res = await fetch(path);
    const content = await res.text();

    app.innerHTML = content;
  } catch (error) {
    console.error("Failed to load the page", error);
  }
}
