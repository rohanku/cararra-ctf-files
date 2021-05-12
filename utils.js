function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  try {
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  } catch (error) {
    return results[2].replace(/\+/g, " ");
  }
}

module.exports = { getParameterByName };
