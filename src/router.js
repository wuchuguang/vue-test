/**
 * Created by wuchuguang on 16-6-7.
 */

module.exports = function(router){
    router.map({
        '/home':{
            name: 'index',
            component: function(resove){
                return require(['./components/Home.vue'], resove)
            }
        },
        '/root':{
            name:'root',
            component: function(resove){
                return require(['./components/Root.vue'], resove)
            }
        }
    });
};
