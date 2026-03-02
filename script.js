function toggleMessage() {
  const msg = document.getElementById("msg");
  if (msg.textContent === "") {
    msg.textContent = "✅ Pipeline complete! Site deployed to GitHub Pages.";
  } else {
    msg.textContent = "";
  }
}