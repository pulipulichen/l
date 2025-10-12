function checkLocalStorage(url) {
  const visited = localStorage.getItem("visited-" + url);
  if (visited) {
      window.location.href = url;
  } else {
      document.getElementById("link").style.display = "block";
      document.getElementById("link").innerText = url;
  }
}

function resetLocalStorage() {
  // 刪除所有 key 以 "visited-" 開頭的項目
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("visited-")) {
      localStorage.removeItem(key);
      // 因為刪除後 localStorage.length 會變，i-- 讓 index 對應正確
      i--;
    }
  }
}