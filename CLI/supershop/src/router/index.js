import Hello from '../components/views/Hello'
import ItemDetails from '../components/views/ItemDetails'
import Inventory from '../components/views/Inventory'

export const routes = [
    {
        path: '',
        component: Inventory
    },
    // {
    //     path: '/test/',
    //     component: Test
    // }
    {
        path: '/ItemDetails/:id',
        component: ItemDetails
    }
]
