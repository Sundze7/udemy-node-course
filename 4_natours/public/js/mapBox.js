const locations = JSON.parse(document.getElementById('map').dataset.locations)

mapboxgl.accessToken = 
'pk.eyJ1Ijoic3VuZHplIiwiYSI6ImNsa3kzZnRreDAzdHozb3MxeTJudHh1bGEifQ.UeKFXs9SqeOqqM0PD4Y-pA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/sundze/cll1s7qij00be01qp8f3db4wt',
  scrollZoom: false
//   center: [-118.113491, 34.111745], 
//   zoom: 10,

});

const bounds = new mapboxgl.LngLatBounds()

locations.forEach(loc => {
    //create marker
    const el = document.createElement('div')
    el.className = 'marker'

    //add marker
    new mapboxgl.Marker({
        element: el,
        anchor:'bottom'
    })
    .setLngLat(loc.coordinates)
    .addTo(map)

    //add popup
    new mapboxgl.Popup({
        offset: 30
    })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
        .addTo(map)

    //extend map bounds to include current location
    bounds.extend(loc.coordinates)
})

map.fitBounds(bounds, {
    padding: {
        top: 200,
        bottom: 200,
        left: 100,
        right: 100
    }
})