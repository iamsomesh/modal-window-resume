'use strict';

const modal = document.querySelector('.modal');
const modal1 = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const showBtn = document.querySelectorAll('.btn');
const closeBtn = document.querySelector('.close-modal');
const closeBtn1 = document.querySelector('.close-modal1');
const closeBtn2 = document.querySelector('.close-modal2');
const closeBtn3 = document.querySelector('.close-modal3');
const overlayBtn = document.querySelector('.overlay');

//show modal when we click
const showModal = function () {
    modal.classList.remove('hidden');
    overlayBtn.classList.remove('hidden');
}
const showModal1 = function () {
    modal1.classList.remove('hidden');
    overlayBtn.classList.remove('hidden');
}
const showModal2 = function () {
    modal2.classList.remove('hidden');
    overlayBtn.classList.remove('hidden');
}
const showModal3 = function () {
    modal3.classList.remove('hidden');
    overlayBtn.classList.remove('hidden');
}

for (let i = 0; i < showBtn.length; i++){
    if (i === 0) {
        showBtn[i].addEventListener('click', showModal)
    }
    if (i === 1) {
        showBtn[i].addEventListener('click', showModal1)
    }
    if (i === 2) {
        showBtn[i].addEventListener('click', showModal2)
    }
    if (i === 3) {
        showBtn[i].addEventListener('click', showModal3)
    }
    //     modal.classList.remove('hidden');
    //     overlayBtn.classList.remove('hidden');
    // })
}

//close button x
// closeBtn.addEventListener('click', function () {
//         modal.classList.add('hidden');
//         overlayBtn.classList.add('hidden');
    
// });

// overlayBtn.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlayBtn.classList.add('hidden');
// })
const closeModal = function () {
    modal.classList.add('hidden');
    overlayBtn.classList.add('hidden');
}
const closeModal1 = function () {
    modal1.classList.add('hidden');
    overlayBtn.classList.add('hidden');
}

// const closeModal1 = function () {
//     modal1.classList.add('hidden');
//     overlayBtn.classList.add('hidden');
// }

const closeModal2 = function () {
    modal2.classList.add('hidden');
    overlayBtn.classList.add('hidden');
}

const closeModal3 = function () {
    modal3.classList.add('hidden');
    overlayBtn.classList.add('hidden');
}


closeBtn.addEventListener('click', closeModal);
overlayBtn.addEventListener('click', closeModal);

closeBtn1.addEventListener('click', closeModal1);
overlayBtn.addEventListener('click', closeModal1);

closeBtn2.addEventListener('click', closeModal2);
overlayBtn.addEventListener('click', closeModal2);

closeBtn3.addEventListener('click', closeModal3);
overlayBtn.addEventListener('click', closeModal3);

// closeBtn.addEventListener('click', function () {
//     addHidden();

// })^ upper line we use function() -- instant of closemodal 

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
        //if the modaldoes not conatain hidden class means modal is visible 
        //then we call close modal when we press escape
        // if (!modal.classList.contains('hidden')) {
        //     closeModal();
        // }
        
    }
})
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal1.classList.contains('hidden')) {
        closeModal1();
    }
})
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal2.classList.contains('hidden')) {
        closeModal2();
    }
})
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal3.classList.contains('hidden')) {
        closeModal3();
    }
})