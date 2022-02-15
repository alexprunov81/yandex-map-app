const links = [
    {to: '/', label: 'Карта'},
    {to: '/auth', label: 'Авторизация'}
]

const renderLinks = () => {
    return links.map((link, index) => {
        return `
                <li id=${index}>
                    <a href="${link.to}">
                        ${link.label}
                    </a>
                </li>
            `
    })
}

const sidebarTemplate = () => {
    return ` 
            <nav class="Drawer close" data-type="nav">
                <ul>
                    ${renderLinks().join('')}
                </ul>
            </nav>
`
}

class Sidebar {
    constructor(menuToggle, sidebar) {
        this.menuToggle = document.createElement(menuToggle)
        this.sidebar = document.createElement(sidebar)

        this.#render()
        this.#setup()
    }

    #render() {
        this.sidebar.innerHTML = sidebarTemplate()
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.menuToggle.addEventListener('click', this.clickHandler)
        this.toggleIcon = document.createElement('i')
        this.menuToggle.classList.add('MenuToggle')
        this.toggleIcon.classList.add('fa', 'fa-bars')
        this.menuToggle.append(this.toggleIcon)
        this.nav = this.sidebar.querySelector('[data-type="nav"]')

    }

    clickHandler(event) {
        this.onToggle()
    }

    get isOpen() {
        return this.menuToggle.classList.contains('open')
    }

    close() {
        this.nav.classList.add('close')
        this.menuToggle.classList.remove('open')
        this.toggleIcon.classList.remove('fa-times')
        this.toggleIcon.classList.add('fa-bars')
        console.log('close')
    }

    open() {
        this.nav.classList.remove('close')
        this.menuToggle.classList.add('open')
        this.toggleIcon.classList.remove('fa-bars')
        this.toggleIcon.classList.add('fa-times')
        console.log('open')
    }

    onToggle() {
        this.isOpen ? this.close() : this.open()
    }

}


const sidebar = new Sidebar('div', 'div')
const map = document.querySelector('#map')
map.append(sidebar.menuToggle)
map.append(sidebar.sidebar)
