



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

    const objectManager = new ymaps.RemoteObjectManager('https://map-app-ad56e-default-rtdb.europe-west1.firebasedatabase.app/0/data.json',{
        // Опции кластеров задаются с префиксом 'cluster'.
        clusterHasBalloon: false,
        // Опции геообъектов задаются с префиксом 'geoObject'.
        geoObjectOpenBalloonOnClick: false
    })



    myMap.geoObjects.add(objectManager)
    new ymaps.SuggestView('adress')
}


