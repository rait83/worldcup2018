import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function getRouteLayout (name) {
  return () => import(`@/layouts/${name}`)
}

function getRouteComponent (name) {
  return () => import(`@/modules/${name}/${name}`)
}

function getRouteComponent2 (name) {
  return () => import(`@/modules/Personal/${name}`)
}

export default new Router({
  base: '/MM2018/',
  routes: [
    {
      path: '/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', alias: 'login', component: getRouteComponent('SignIn') }
      ]
    },
    {
      path: '/home/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent('Home') }
      ]
    },
    {
      path: '/make_preds/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent('MakePredictions') }
      ]
    },
    {
      path: '/my_preds/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent('MyPredictions') }
      ]
    },
    {
      path: '/preds/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent('Predictions') }
      ]
    },
    {
      path: '/rules/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent('Rules') }
      ]
    },
    {
      path: '/personal/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent('Personal') }
      ]
    },
    {
      path: '/Rait/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent2('Rait') }
      ]
    },
    {
      path: '/Rauno/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent2('Rauno') }
      ]
    },
    {
      path: '/Fred/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent2('Rait') }
      ]
    },
    {
      path: '/Siim/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent2('Rauno') }
      ]
    },
    {
      path: '/Karel/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent2('Rait') }
      ]
    },
    {
      path: '/Karl/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent2('Rauno') }
      ]
    },
    {
      path: '/Indrek/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent2('Rait') }
      ]
    },
    {
      path: '/Hanno/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent2('Rauno') }
      ]
    },
    {
      path: '/Slezin/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent2('Rait') }
      ]
    },
    {
      path: '/Ragnar/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent2('Rauno') }
      ]
    },
    {
      path: '/Kristo/',
      component: getRouteLayout('AppLayout'),
      children: [
        { path: '/', component: getRouteComponent2('Rait') }
      ]
    }
  ]
})
