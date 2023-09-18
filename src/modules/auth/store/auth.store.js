// pinia
import { defineStore } from 'pinia'

// axios
import http from '@/plugins/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth_loading: false,
    auth_token: null,
    auth_user: null
  }),
  actions: {
    /**
     * @description Some Example Action
     *
     * @method GET
     * @url /some_url
     * @access public
     *
     * @return {any}
     */
    async auth_login(options = {}) {
      this.auth_loading = true

      try {
        const data = await http.get('some_endpoint', options)
        this.auth_token = '' // set token
        this.auth_user = '' // set user
        return Promise.resolve(data)
      } catch (err) {
        return Promise.reject(err)
      } finally {
        this.auth_loading = false
      }
    }
  }
})
