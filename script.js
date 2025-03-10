document.getElementById('button').addEventListener('click', function (e) {
  e.preventDefault(); 

  const nameValue = document.getElementById('name').value.trim();
  const yearValue = document.getElementById('year').value.trim();

  let baseUrl = "https://localhost:8080/";
  const params = [];


  if (nameValue) {
    params.push(`name=${encodeURIComponent(nameValue)}`);
  }

  if (yearValue) {
    params.push(`year=${encodeURIComponent(yearValue)}`);
  }

  if (params.length > 0) {
    baseUrl += "?" + params.join("&");
  }

  document.getElementById("url").textContent = baseUrl;
});
