function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(" #partner_tab-1 .tab_item");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll("#partner_tab-1 .tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("loi-ich-tab1").onclick = function(event) {
    openTab(event, 'loi-ich-content-1');
}

document.getElementById("loi-ich-tab2").onclick = function(event) {
    openTab(event, 'loi-ich-content-2');
}
document.getElementById("loi-ich-tab3").onclick = function(event) {
    openTab(event, 'loi-ich-content-3');
}
document.getElementById("loi-ich-tab1").click();
// tab-loi-ich

function openTab1(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(" #partner_tab-2 .tab_item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll("#partner_tab-2 .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].style.backgroundColor = tablinks[i].style.backgroundColor.replace("red","");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("show-all").onclick = function(event) {
    openTab1(event, 'tab_content-item-1');
}
document.getElementById("tai-chinh").onclick = function(event) {
    openTab1(event, 'tab_content-item-2');
}
document.getElementById("hang-hoa").onclick = function(event) {
    openTab1(event, 'tab_content-item-3');
}
document.getElementById("to-chuc").onclick = function(event) {
    openTab1(event, 'tab_content-item-4');
}
document.getElementById("dong-hanh").onclick = function(event) {
    openTab1(event, 'tab_content-item-5');
}
document.getElementById("truyen-thong").onclick = function(event) {
    openTab1(event, 'tab_content-item-6');
}
document.getElementById("khac").onclick = function(event) {
    openTab1(event, 'tab_content-item-7');
}
document.getElementById("show-all").click();


function partnerbtntab(){
    let btns = document.querySelectorAll("#partner_tab-2 .tablinks");
    for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("partner_tab2-active");
  current[0].className = current[0].className.replace(" partner_tab2-active", "");
  this.className += " partner_tab2-active";
  });
}
}
partnerbtntab();
