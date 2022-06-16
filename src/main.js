import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
const app = createApp(App)
app.use(store).use(router).mount('#app')
// 全局过滤器
app.config.globalProperties.$filters={
    prefix(url){
     if (url&&url.startWith('http')) {
         return url
     } else {
         url=`http://backend-api-01.newbee.ltd${url}`
         return url
     }
    }
}
