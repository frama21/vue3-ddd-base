import { createApp } from "vue"
import App from "./App.vue"
import pinia from "@/modules/app/store"
import autoLoadRoute from "@/modules/app/router"
import BaseComponentRegister from "@/modules/app/ui/components"

import '@/modules/app/assets/styles/main.css'

const AppInit = async (callback = null) => {
    const app = createApp(App)
  
    // Autoload Route
    const router = await autoLoadRoute()
  
    // Libraries
    app.use(pinia)
    app.use(router)
  
    // Base Components
    BaseComponentRegister(app)
  
    // Custom callback
    callback && callback(app)
  
    // Mount
    app.mount("#app")
  }
  
  ;(async function () {
    await AppInit()
  })()
  