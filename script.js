const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');

const button = document.querySelector('.btn');

// OBJECT

// SISTEM

function getId1(pic, name) {
  pic1.setAttribute('src', 'img/' + pic + '.jpg');
  pic1.nextElementSibling.firstChild.innerHTML = '' + name;
}
function getId2(pic, name) {
  pic2.setAttribute('src', 'img/' + pic + '.jpg');
  pic2.nextElementSibling.firstChild.innerHTML = '' + name;
}
function getId3(pic, name) {
  pic3.setAttribute('src', 'img/' + pic + '.jpg');
  pic3.nextElementSibling.firstChild.innerHTML = '' + name;
}

function system(get1) {
  let random = Math.floor(Math.random() * 25) + 1;

  if (random == 1) {
    get1('shani_indira_natio', 'Shani Indira Natio');
  } else if (random == 2) {
    get1('azizi_asadel', 'Azizi Asadel');
  } else if (random == 3) {
    get1('shania_gracia', 'Shania Gracia');
  } else if (random == 4) {
    get1('lulu_salsabila', 'Lulu Salsabila');
  } else if (random == 5) {
    get1('yessica_tamara', 'Yessica Tamara');
  } else if (random == 6) {
    get1('reva_fidela', 'Reva Fidela');
  } else if (random == 7) {
    get1('mutiara_azzahra', 'Mutiara Azzahra');
  } else if (random == 8) {
    get1('marsha_lenathea', 'Marsha Lenathea');
  } else if (random == 9) {
    get1('kathrina_irene', 'Kathrina Irene');
  } else if (random == 10) {
    get1('jinan_safa_safira', 'Jinan Safa Safira');
  } else if (random == 11) {
    get1('jesslyn_callista', 'Jesslyn Callista');
  } else if (random == 12) {
    get1('jessica_chandra', 'Jessica Chandra');
  } else if (random == 13) {
    get1('indah_cahya_nabilla', 'Indah Cahya Nabilla');
  } else if (random == 14) {
    get1('helisma_putri', 'Helisma Putri');
  } else if (random == 15) {
    get1('gita_sekar_andarini', 'Gita Sekar Andarini');
  } else if (random == 16) {
    get1('freya_jayawardana', 'Freya Jayawardana');
  } else if (random == 17) {
    get1('fransisca_saraswati_puspa_dewi', 'Fransisca Saraswati Puspa Dewi');
  } else if (random == 18) {
    get1('flora_shafiqa', 'Flora Shafiqa');
  } else if (random == 19) {
    get1('fiony_alveria', 'Fiony Alveria');
  } else if (random == 20) {
    get1('feni_fitriyanti', 'Feni Fitriyanti');
  } else if (random == 21) {
    get1('febriola_sinambela', 'Febriola Sinambela');
  } else if (random == 22) {
    get1('dhea_angelia', 'Dhea Angelia');
  } else if (random == 23) {
    get1('cornelia_vanisa', 'Cornelia Vanisa');
  } else if (random == 24) {
    get1('angelina_christy', 'Angelina Christy');
  } else if (random == 25) {
    get1('adzana_shaliha', 'Adzana Shaliha');
  }
}

button.addEventListener('click', function () {
  const interval = setInterval(function () {
    system(getId1);
    system(getId2);
    system(getId3);
  }, 100);

  setTimeout(function () {
    clearInterval(interval);
  }, 3000);

  system(getId1);
  system(getId2);
  system(getId3);

  if (pic1.getAttribute('src') == pic2.getAttribute('src') || pic1.getAttribute('src') == pic3.getAttribute('src') || pic2.getAttribute('src') == pic3.getAttribute('src')) {
    console.log('eror, ada yang sama');
  }
});

// button.addEventListener('click', function () {
//   system(getId1);
//   system(getId2);
//   system(getId3);
//   while (pic1.getAttribute('src') == pic2.getAttribute('src') || pic1.getAttribute('src') == pic3.getAttribute('src') || pic2.getAttribute('src') == pic3.getAttribute('src')) {
//     alert('error');
//     system(getId1);
//     system(getId2);
//     system(getId3);
//   }
// });
