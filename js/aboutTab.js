function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("tab-1").onclick = function(event) {
    openTab(event, 'tab1');
}

document.getElementById("tab-2").onclick = function(event) {
    openTab(event, 'tab2');
}
document.getElementById("tab-3").onclick = function(event) {
    openTab(event, 'tab3');
}
document.getElementById("tab-4").onclick = function(event) {
    openTab(event, 'tab4');
}
document.getElementById("tab-5").onclick = function(event) {
    openTab(event, 'tab5');
}

document.getElementById("tab-1").click();

//     var tablinks = document.getElementsByClassName('tablinks');
//     var contents = document.getElementsByClassName('tabcontent');
//     function showContent(id){
//         for (var i = 0; i < contents.length; i++) {
//             contents[i].style.display = 'none';
//         }
//         var content = document.getElementById(id);
//         content.style.display = 'block';
//     }
//     for (var i = 0; i < tablinks.length; i++) {
//         tablinks[i].addEventListener("click", function(){
//             var id = this.textContent;
//             for (var i = 0; i < tablinks.length; i++) {
//                 tablinks[i].classList.remove("active");
//             }
//             this.className += " active";
//             showContent(id);
//         });
//     }
//     showContent('tab1').click;
//     showContent('tab2').onclick;
//     showContent('tab3').onclick;
//     showContent('tab4').onclick;
//     showContent('tab5').onclick;
