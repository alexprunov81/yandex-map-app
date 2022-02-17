import './scss/index.scss'
import {Sidebar} from './Navigation/Sidebar/Sidebar'
import {init} from './Map/yandex'

const sidebar = new Sidebar('div', 'div')
const map = document.querySelector('#map')
map.append(sidebar.menuToggle)
map.append(sidebar.sidebar)


ymaps.ready(init)


