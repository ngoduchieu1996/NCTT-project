function menuActiveTab(){
    var currenlocation = location.href;
    var menuItem = document.querySelectorAll('#nav-header a');
    for (let i =0;i<menuItem.length;i++){
    if(menuItem[i].href === currenlocation){
    menuItem[i].className = "active-tab";
}
}
}
menuActiveTab();