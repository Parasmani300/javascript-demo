console.log("Hello WOrld")

async function fetchDetails()
{

  var e = document.getElementById("mydropdown");
  var value = e.options[e.selectedIndex].value;
  var text = e.options[e.selectedIndex].text;

  var baseUrl = "https://random-data-api.com/api/v2"

  const response = await fetch(`${baseUrl}/${value}`)
  const val = await response.json();
  // console.log(val);
  document.getElementById("mytext").innerText = JSON.stringify(val)
  

}