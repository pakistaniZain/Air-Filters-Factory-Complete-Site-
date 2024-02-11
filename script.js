// js to decrease value in item pagination 
document.querySelector('.clicktominus').addEventListener('click', function () {
  let getvaltodecrease = document.querySelector('#numberhaitierka').innerHTML;
  getvaltodecrease = parseInt(getvaltodecrease) - 1;
  document.querySelector('#numberhaitierka').innerHTML = getvaltodecrease; // Update the HTML content

  if (getvaltodecrease <= 0) {
    document.querySelector('#numberhaitierka').innerHTML = 1;
  }
}

);


document.querySelector('.clicktodecrease').addEventListener('click', function () {
  let getvaltoincrease = document.querySelector('#numberhaitierka').innerHTML;
  getvaltoincrease = parseInt(getvaltoincrease) + 1;
  document.querySelector('#numberhaitierka').innerHTML = getvaltoincrease;

})


