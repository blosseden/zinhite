<template>
    <header>
        <h1 class="sr-only">New Seoul Train</h1>
        <p class="logo"><a href="#" @click="homeClick">Logo</a></p>

        <nav>
            <ul class="gnb">
                <li><a href="./하이퍼링크.html">철도 도트</a></li>
                <li><a href="./공지사항.html">공지 사항</a></li>
                <li><a href="./홈소개.html">홈소개</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
import HeaderItem from './headerItem'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    components: {
        HeaderItem
    },
    setup(){
        const store = useStore()
        const router = useRouter()         

        let { tree } = store.state.treeMenu

        // let { selectArea } = store.state.officeInfo

        const homeClick = () => {
            store.commit('temp/setIsMain', false)
            router.push({
                name: 'Home'
            }) 
        }

        return {
            tree,
            homeClick
        }
    }

    
}
</script>

<style scoped>


</style>