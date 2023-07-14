let weather = {}

$(document).ready(function () {
    get_weather();
   
})

function render_elements() {
   $.ajax({
    url: `https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates.source_lon}%2C${coordinates.source_lat}%3B${coordinates.destination_lon}%2C${coordinates.destination_lat}?alternatives=true&geometries=polyline&steps=true&access_token=pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA`,
    type:"get",
    sucess:function(response){
        let name = response.name 
        let weather = response.weather[0].main

        $("#scene_container").append(
            <a-entity gps-entity-place = "latitude:${steps[i].maneuver.location[1}; longtiude:${steps[i].maneuver.location[0]}">
                <a-text height="50" value="Weather forcast is $(weather) at $(name)"></a-text>
            </a-entity>
        )

   
    }
   })
}
