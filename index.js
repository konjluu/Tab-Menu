const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const tabs=$$(".tab-item");
const panes=$$(".tab-pane");

const tabActive= $(".tab-item.tab-item--active");
const line=$(".tab-menu .line");

line.style.left=tabActive.offsetLeft + "px"
line.style.width=tabActive.offsetWidth + "px"

tabs.forEach((tab,index) => {
    const pane= panes[index];

    tab.onclick =function(){
        $(".tab-item.tab-item--active").classList.remove("tab-item--active")
        $(".tab-pane.tab-pane--active").classList.remove("tab-pane--active")

        line.style.left=tab.offsetLeft + "px"
        line.style.width=tab.offsetWidth + "px"

        tab.classList.add("tab-item--active");
        pane.classList.add("tab-pane--active");

    
    }
});
