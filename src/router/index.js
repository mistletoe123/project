import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homes from '@/pages/homes'
import page01 from '@/pages/page01'
import page02 from '@/pages/page02'

//子路由
import homeChid from '@/pages/homeChid'
import addPage from '@/pages/addPage'


Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path: '/',
            name: 'homes',
            component: homes
        },
        
        { 
            path: '/homechid/:id',
            name: 'homechid',
            component: homeChid
//          components: {
//              default: PersonalContainer,
//              a: GuideContainer
//          },
//          beforeEnter: (to, from, next) => {
//              next();
//              console.log(to.name);
//              if(to.name=="homechid"){
//                  console.log('111'); 
//                  
//              }
//          }
           
            
        },
    
        {
            path: '/page01',
            name: 'page01',
            component:page01
        },
        {
          path: '/page02',
          name: 'page02',
          component:page02
        },
        {
          path: '/addpage',
          name: 'addpage',
          component:addPage
        }
    

    ],
    
});
