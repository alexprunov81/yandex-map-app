import {obj} from '../../object'



export const init = () => {



    const removeControls = [
        'geolocationControl',
        // 'searchControl',
        'trafficControl',
        'fullscreenControl',
        'zoomControl', 'rulerControl',
        'typeSelector'
    ]

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


    const clearTheMap = myMap => {
        removeControls
            .forEach(controls => myMap.controls.remove(controls))
    }
    clearTheMap(myMap)

    const objectManager = new ymaps.ObjectManager({
        clusterize: true,
        // clusterDisableClickZoom: true,
        geoObjectOpenBalloonOnClick: true,
        clusterIconLayout: 'default#pieChart'
    })
    objectManager.add(obj)
    myMap.geoObjects.add(objectManager)
    new ymaps.SuggestView('adress')
}


