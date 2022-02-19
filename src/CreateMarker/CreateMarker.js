export class Marker {
    constructor() {

    }

    submitHandler = () => {

    }

    addMarkerHandler = () => {

    }

    render() {
        return `

    <div class="Input">

        <form id="marker" onsubmit="submitHandler()">
        
        <label for="adress">Адрес</label>
        <input id="adress" type="text"/>
        
        <label for="name">Компания</label>
        <input id="name" type="text"/>
        
        <label for="result">Результат</label>
        <input id="result" type="text"/>
        
        <label for="color">Цвет метки</label>
        <input id="color" type="color" value="#FFFFFF"/>
        
        <button class="Button primary" onclick="">Добавить метку</button>
</form>
    </div>
`
    }
}

