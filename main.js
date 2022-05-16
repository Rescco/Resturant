let slider = document.getElementById('slider');
let item = slider.getElementsByClassName('row-img');
let btn = document.getElementsByClassName('btn-order');
//next item in the slider 
function next() {
    slider.append(item[0]);

    for (let i = 0; i < btn.length; i++) {
        if (i == 2) {
            btn[i].style.display = 'block';
        } else {
            btn[i].style.display = 'none';
        }
    }

}

//prev item in the slider 

function prev() {
    slider.prepend(item[item.length - 1]);

    for (let i = 0; i < btn.length; i++) {
        if (i == 2) {
            btn[i].style.display = 'block';
        } else {
            btn[i].style.display = 'none';
        }
    }

}