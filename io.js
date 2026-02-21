function setData(key, data) {
  localStorage.setItem(key, data);
}

function getData(key) {
  return localStorage.getItem(key);
}

function deleteData(key) {
  localStorage.removeItem(key);
}

function clearAllData() {

}

class DataConstants {
  static KEY_PROFILES = "profiles";
}