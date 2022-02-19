import './scss/index.scss'
import {Sidebar} from './Navigation/Sidebar/Sidebar'
import {init} from './Map/yandex'
// import {start} from "../mongo/mongo"

const sidebar = new Sidebar('div', 'div')
const map = document.querySelector('#map')
map.append(sidebar.menuToggle)
map.append(sidebar.sidebar)

// start()
ymaps.ready(init)


