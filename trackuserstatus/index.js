const userStatus = document.querySelector(".status");
window.addEventListener("load", () => {
  const handleNetworkChange = () => {
    navigator.onLine
      ? userStatus.classList.remove("offline")
      : userStatus.classList.add("offline");
  };
  window.addEventListener("online", handleNetworkChange);
  window.addEventListener("offline", handleNetworkChange);
});
