import Vue from 'vue';
import Router from 'vue-router';
import CoinList from '@/components/CoinList';
import CoinTree from '@/components/coinTree';
import NetworkMap from '@/components/networkMap';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CoinList',
            component: CoinList
        },
        {
            path: '/tree',
            name: 'coinTree',
            component: CoinTree
        },
        {
            path: '/forkMap',
            name: 'forkMap',
            component: NetworkMap
        }
    ]
});
