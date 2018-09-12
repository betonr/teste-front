//layouts
import Default from '@/views/layouts/Default'

//pages
import Characters from '@/views/pages/Characters'

//routes
const routes = [
  {
    path: '',
    redirect: '/characters'
  },
  {
    path: '/',
    name: 'Default',
    component: Default,
    children: [
      {
        path: '/characters',
        name: 'Characters',
        component: Characters
      }
    ]
  }  
]

export default routes
