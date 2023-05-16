<template>
    <footer>
        <p class="footer-logo"><a href="#">Logo</a></p>
        <address>
            <br>
            &copy; 2023 ALL RIGHTS RESERVED By 김진운 <br>
            &copy; Design & Publishing By 이은규 | Developed By 이태랑
        </address>

        <ul class="sns-logo">
            <li>
                <a href="https://blog.naver.com/gray8501" target="_blank">
                    <i class="fab fa-blogger-b"></i>
                </a>
            </li>
            <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
        </ul>
    </footer>
</template>

<script>
import FooterItem from './footerItem'
import { useStore } from 'vuex'

export default {
    components: {
        FooterItem
    },
    setup(){
        const store = useStore()

        let { tree } = store.state.treeMenu

        return {
            tree,
        }
    }

    
}
</script>

<style scoped>


</style>