let elCls = (cls) => document.getElementsByClassName(cls);
let elId = (id) => document.getElementById(id);

let lang = elCls('lang-parent')[0];
let lang_drpdwn = elCls('language-dropdown')[0];

function toggleVisibility(elem) {
    elem.classList.toggle('show');
}
lang.addEventListener('click', function() {
    toggleVisibility(lang_drpdwn);
});

let dropbtn = elId('dropbtn');
let menuDropdown = elCls('menu-dropdown')[0];

function closeMenu() {
    menuDropdown.classList.add('hde');
    menuDropdown.ariaHidden = "true";
}
let menu_list = document.querySelectorAll('.main-menu > ul > li > a');
function showMenu(elem) {
    if(!elem.classList.contains('hide')) {
        for(let key of menu_list) {
            let next = key.nextElementSibling;
            if(elem == next) continue;
            if(key.dataset.ml == '' && !key.classList.contains('hide')) {
                next.classList.add('hide');
                next.ariaHidden = 'true';
            }
        }
    }
    elem.classList.toggle('hide');
    if (elem.ariaHidden = "true") {
        elem.ariaHidden = "false";
    } else {
        elem.ariaHidden = "true";
    }
}
dropbtn.onclick = () => {
    menuDropdown.classList.remove('hde');
    menuDropdown.ariaHidden = "false";
};

// window.addEventListener('load', ()=> addResize());
// // window.addEventListener('resize', ()=> resize());

// function addResize() {
//     if(window.innerWidth < 995) {
//         for (let list of menu_list) {
//             if(list.dataset.ml == '') {
//                 let nextElem = list.nextElementSibling;
//                 list.addEventListener('click', ()=> {
//                     showMenu(nextElem);
//                 });
//             }
//         }
//     // }else {
//     //     // if(nextElem.classList.contains('hde')) {
//     //     //     nextElem.classList.add('hide');
//     //     // }
//     }
// }
// function resize() {
//     let width = window.innerWidth;
//     if(width >= 995) {
//         for (let list of menu_list) {
//             if(list.dataset.ml == '') {
//                 let nextElem = list.nextElementSibling;
//                 list.removeEventListener('click', ()=> {
//                     showMenu(nextElem);
//                 });
//                 if(!nextElem.classList.contains('hde')) {
//                     nextElem.classList.add('hde');
//                 }
//             }
//         }
//     }else {
//         if(window.innerWidth < 995) {
//             for (let list of menu_list) {
//                 if(list.dataset.ml == '') {
//                     let nextElem = list.nextElementSibling;
//                     list.addEventListener('click', ()=> {
//                         showMenu(nextElem);
//                     });
//                 }
//             }
//         }
//     }
// }


function newFunction() {
    let glb_navs = elCls('navs-glb')[0].children;
    Array.from(glb_navs).forEach(function (navs) {
        navs.addEventListener('click', function () {
            for (let elem of glb_navs) {
                if (elem.style.borderBottomColor == 'rgb(190, 0, 0)') {
                    elem.style.borderBottom = 'none';
                }
            }
            this.style.borderBottom = 'solid';
            this.style.borderBottomColor = 'rgb(190, 0, 0)';
            this.style.borderBottomWidth = '2px';
        });
    });
    glb_navs[0].style.borderBottom = 'solid';
    glb_navs[0].style.borderBottomColor = 'rgb(190, 0, 0)';
    glb_navs[0].style.borderBottomWidth = '2px';
}

newFunction();



let main_img_Arr = [...elCls('main-background')];
let currentSwitch = 0;
let switch_btns_Arr = [...elCls('switch')];
let left_navigator = elId('left-navigator');
let right_navigator = elId('right-navigator');


for(let val of switch_btns_Arr) {
    val.addEventListener('click', function() {
        for(let value of switch_btns_Arr) {
            if(value.classList.contains('switch-color')) {
                value.classList.remove('switch-color');
            }
        }
        val.classList.add('switch-color');
        changeImg();
    })
}
function showImg(num) {
    let i = 0;
    for(let img of main_img_Arr) {
        switch_btns_Arr[i].classList.remove('switch-color');
        if(!img.classList.contains('hide')) {
            img.classList.add('hide');
        }
        i++;
    }
    main_img_Arr[num].classList.remove('hide');
    switch_btns_Arr[num].classList.add('switch-color');
}
function changeImg(num = false) {
    if(num) {
        showImg(currentSwitch);
        return;
    }
    Array.from(switch_btns_Arr).forEach(function(switches) {
        if(switches.classList.contains('switch-color')) {
            let index = switch_btns_Arr.indexOf(switches);
            currentSwitch = index;
            showImg(index);
        }
    });
}
function timedChangeImg(flag = false) {
    if(flag) { 
        if(currentSwitch == 0) { 
            currentSwitch = 5; 
        }else {
            currentSwitch--;
        }
    }else {
        currentSwitch++;
    }
    if(currentSwitch > 5) {
        currentSwitch = 0;
    }
    changeImg(true);
}
left_navigator.onclick = () => timedChangeImg(true);
right_navigator.onclick = () => timedChangeImg();

// setInterval(timedChangeImg, 10000);
