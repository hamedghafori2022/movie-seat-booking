const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelected = document.getElementById('movie');
let ticketPrice = +movieSelected.value;

// set movie selected and price to storage
function setMovieDate(movieIndex,moviePrice){
  localStorage.setItem('selectedMovieIndex',movieIndex);
  localStorage.setItem('selectedMoviePrice',moviePrice);
}

// add event to pick movie
movieSelected.addEventListener('change', (e)=>{
  ticketPrice = +e.target.value;
  setMovieDate(e.target.selectedIndex,e.target.value);
  updateSelectedCount();
})

// update count and total
function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat)=>{
    return [...seats].indexOf(seat);
  })
  localStorage.setItem('seatSelected', JSON.stringify(seatsIndex));


  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener('click',function(e){
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
})