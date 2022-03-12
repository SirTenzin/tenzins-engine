function setTheme(theme) {
    localStorage.setItem("tenzindb.Theme", theme);
    document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
}

window.onload = function() {
    var theme = localStorage.getItem("tenzindb.Theme")
    if(theme) {
        setTheme(theme);
    }
}