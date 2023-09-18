<template>
  <div>
    <h1>Not Auhtorized</h1>
    <button @click="onBack">Back</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
const onBack = () => {
  router.push('/')
}
</script>
