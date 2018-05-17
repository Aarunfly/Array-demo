var person = [
    { name: '刘小华', src: '1.jpg', sex: 'male', des: '漂亮的女孩子' },
    { name: '王花', src: '2.jpg', sex: 'male', des: '漂亮的程序猿' },
    { name: '陈军', src: '3.jpg', sex: 'female', des: '我是一个学霸' },
    { name: '王华', src: '4.jpg', sex: 'female', des: '我喜欢游泳' },
    { name: '陈思思', src: '5.jpg', sex: 'male', des: '我喜欢看电影' },
    { name: '张金阳', src: '5.jpg', sex: 'male', des: '我最帅' },
    { name: '陈学习', src: '6.jpg', sex: 'female', des: '我爸我妈爱学习' },
    { name: '王美丽', src: '7.jpg', sex: 'male', des: '我妈是美丽得妈妈' }
];
var listUl = document.getElementById('list');
var oInp = document.getElementById('input');
var sUl = document.getElementById('searchUl');
function render(list) {
    var str = "";
    list.forEach(function (ele, index) {
        str += ' <li>\
                    <img src="./img/'+ ele.src + '" alt="头像">\
                    <span class = "name">'+ ele.name + '</span>\
                    <span class = "des">'+ ele.des + '</span>\
              </li>';
        listUl.innerHTML = str;
    });
    listUl.innerHTML = str;
}
render(person);
oInp.oninput = function (text) {

    // console.log(this.value);
     state.text = this.value;
    // console.log(filtertext(text, person));
    // render(filtertext(text, person));
    render(addFn(objFilter,person));

}
function filterText(text, arr) {
    return arr.filter(function (ele, index) {
        if (ele.name.indexOf(text) !== -1 || ele.des.indexOf(text) !== -1) {
            return true;
        }
    })
}
sUl.addEventListener('click', function (e) {
    if (e.target.tagName == 'LI') {
        state.sex = e.target.getAttribute('sex');
        document.getElementsByClassName('active')[0].className = '';
        e.target.className = 'active';
        // render(filterSex(sex, person));
        render(addFn(objFilter,person));
    }
})
function filterSex(sex, arr) {
    if (sex == 'All') {
        return arr;
    } else {
        return arr.filter(function (ele, index) {
            if (sex == ele.sex) {
                return true;
            }
        })
    }

}
var state = { 
    text: '',
    sex: 'All'
}
var objFilter = {
    text:filterText,
    sex: filterSex
}

function addFn(obj, arr) {
    var lastArr = arr;
    for (var prop in obj) {
       lastArr = obj[prop](state[prop], lastArr);
    }
    return lastArr;
}
addFn(objFilter, person);

