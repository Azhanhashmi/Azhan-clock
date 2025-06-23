setInterval(() => {
  const now = new Date();

  document.querySelector(".a1 .value").innerText = now.getDate().toString().padStart(2, '0');
  document.querySelector(".a2 .value").innerText = now.getHours().toString().padStart(2, '0');
  document.querySelector(".a3 .value").innerText = now.getMinutes().toString().padStart(2, '0');
  document.querySelector(".a4 .value").innerText = now.getSeconds().toString().padStart(2, '0');
}, 1000);

