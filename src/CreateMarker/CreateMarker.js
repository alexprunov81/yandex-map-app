export class Marker {
    constructor() {

    }

    submitHandler = () => {

    }

    addMarkerHandler = () => {

    }

    render() {
        return `

    <div class="Marker">
        <form id="marker" onsubmit="submitHandler()">
        
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        
        <selct></selct>
        
        <button onclick="">Добавить метку</button>
</form>
    </div>
`
    }
}

