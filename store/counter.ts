import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', () => {
    const n = ref(5)
    const myRef = ref('hello')

    function increment() {
        n.value++
    }

    return { n, myRef, increment }
})
