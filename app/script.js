function checkLocalStorage(url) {
  const visited = localStorage.getItem("visited-" + url);
  if (visited) {
      window.location.href = url;
  } else {
      document.getElementById("link").style.display = "block";
      document.getElementById("link").innerText = url;
  }
}