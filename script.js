function changeClass(id){
    var res = document.getElementById(id);
    res.className = res.className=="clicked" ? "not-clicked":"clicked";
}