import {objects} from '../geoobject'

export function init() {

    const searchControls = new ymaps.control.SearchControl({
        options: {
            float: 'right',
            noPlacemark: true
        }
    })

    const myMap = new ymaps.Map('map', {
        center: [55.7522, 37.6156],
        zoom: 10,
        controls: [searchControls]
    })

    const removeControls = [
        'geolocationControl',
        'trafficControl',
        'fullscreenControl',
        'zoomControl', 'rulerControl',
        'typeSelector'
    ]

    const clearTheMap = myMap => {
        removeControls
            .forEach(controls => myMap.controls.remove(controls))
    }

    clearTheMap(myMap)

    const objectManager = new ymaps.ObjectManager({
        clusterize:!0,
        geoObjectOpenBalloonOnClick:!0,
        clusterIconLayout:"default#pieChart"
    })

    objectManager.add(objects)
    myMap.geoObjects.add(objectManager)
}
