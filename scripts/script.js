function copyText() {
  const boxText = event.target.previousElementSibling;
  const text = boxText.textContent;
  navigator.clipboard.writeText(text)
    .then(() => {
      event.target.textContent = 'Copied!';
      event.target.disabled = true;
      event.target.classList.add('copied');
    })
    .catch(() => {
      event.target.textContent = 'Copy failed.';
    });
}
