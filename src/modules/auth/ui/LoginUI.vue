<template>
  <div class="login">
    <h1>This is a login page</h1>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div>
  <div v-if="auth_loading">some loading</div>
</template>

<script setup>
// vue
import { ref } from 'vue'

// store
import { useAuthStore } from '../store/auth.store'
import { storeToRefs } from 'pinia'

// define store
const store = useAuthStore()
const { auth_loading } = storeToRefs(store)

// initiate data
const form = ref({
  username: null,
  password: null,
});

/**
 * @description for hit example action store
 *
 * @returns {Promise}
 */
const loginMethod = async () => {
  try {
    return await store.auth_login(form.value)
  } catch (err) {
    return Promise.reject(err)
  }
}
</script>
