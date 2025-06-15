export const disableButton = (buttonHtml) => {
  if (buttonHtml !== null || buttonHtml.tagName !== "button") {
    buttonHtml.disabled = true;
    buttonHtml.style.opacity = 0.7;
  }
}

export const undisableButton = (buttonHtml) => {
  if (buttonHtml !== null || buttonHtml.tagName !== "button") {
    buttonHtml.disabled = false;
    buttonHtml.style.opacity = 1;
  }
}