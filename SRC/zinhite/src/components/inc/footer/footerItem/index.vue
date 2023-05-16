<template>
  <li>
    <a href="#none" @click="menuClick">
        {{ menu }}
    </a>
  </li>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  props: {
    index : Number,
    menu : String, 
    routeUrl : String
  },
  setup(props) {

    const store = useStore()
    const router = useRouter()
    const tree = store.state.treeMenu.tree

    const menuClick = () => {

      const pathName = props.routeUrl.split('-')[2]

      store.commit('temp/setIsMain', true)
      store.commit('treeMenu/setClear')
      store.commit('treeMenu/setSelected', props.index)
      store.commit("treeMenu/setCurrentKey", pathName)
      store.commit("treeMenu/setParentIndex", 0)
      store.commit("treeMenu/setCurrentIndex", 1)
      store.commit("treeMenu/setCurrentKeys", tree[props.index].child[0].child[1].name)

      router.push({
          name: pathName
      })
      
    }

    return {
      menuClick
    }

  }
}
</script>

<style scoed>

</style>