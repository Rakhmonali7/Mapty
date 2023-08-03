'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      const coords = [latitude, longitude];
      // following piece of code from Leaflet Library OVERVIEW  SECTION
      const map = L.map('map').setView(coords, 14); // 'map' in L.map is ID map div in html where map is displayed. coords is veriable where latitude and longitude is assigned and 13 is the scale of the map.
      console.log(map);
      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.googlemap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // T HE END OF CODE FROEM LEAFLET LIBRARY

      map.on('click', function (mapEvent) {
        form.classList.remove('hidden');
        inputDistance.focus();

      });
    },
    function () {
      alert('Could not get your position!'); // created two functions first one if location got successful, Second function if it's failed to get location
    }
  );
  form.addEventListener('submit', fumction(){

    const { lat, lng } = mapEvent.latlng;

    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
        L.popup({
            maxWidth: 250,
            maxHeight: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
        })
        )
        .setPopupContent('Workout')
        .openPopup();

  })
