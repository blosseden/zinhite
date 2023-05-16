<template>
    <Header />
    <Side v-if="isMain" />
    <Content />
    <Footer />
</template>

<script>
import Header from '@/components/inc/header'
import Footer from '@/components/inc/footer'
import Side from '@/components/inc/side'
import Content from '@/components/inc/content'
import { useStore } from 'vuex'
import { computed } from 'vue'
 
export default {

    components : {
        Header,
        Side,
        Content,
        Footer
    }, 
    setup() {
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

<style>

</style>