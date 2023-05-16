export default {
    namespaced: true, 
    state: {
         isMain                 : false
    },
    mutations: {
        setIsMain(state, payload){
            state.isMain = payload
        },        
    }
}