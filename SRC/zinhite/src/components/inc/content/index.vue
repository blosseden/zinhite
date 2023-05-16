<template>
    <pageHeader v-if="isMain"/>
    <router-view/>
</template>

<script>
import pageHeader from '@/components/inc/content/header'
import { useStore } from 'vuex'
import { computed } from 'vue'


export default {
    components: {
        pageHeader
    }, 
    setup(){
        const store = useStore();
        const isMain = computed(() => {
            return store.state.temp.isMain
        })
        
        return {
            isMain
        }
    }
}
</script>

<style scoped>

</style>