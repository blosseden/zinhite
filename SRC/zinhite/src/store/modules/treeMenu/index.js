/**
 * @namespace treeMenu
 * @description 메뉴 트리 데이터 모듈
 * @memberof store#
 */

export default {
    namespaced: true, 
    state: {
        tree: [],
        pathMap: new Map(),
        selected: -1, 
        parentIndex: -1,
        currentPath: '',
        currentIndex: -1,
        currentkeys: '', //name으로 이름 변경 예정
        currentKey: '',
        tabKey: '',
        searchData : {},
        pagingBean : {}
    },
    mutations: {
        setTree(state, payload){
            state.tree = payload
            state.pathMap.clear()

        // depth 1
          for (let a = 0; a < payload.length; a++) {
              
            if (payload[a].child) {
               const aChild = payload[a].child;
               // depth 2
               for (let b = 0; b < aChild.length; b++) {
                  
                  if (aChild[b].child) {
                     const bChild = aChild[b].child;

                     // depth 3
                     for (let c = 0; c < bChild.length; c++) {
                         
                        if (bChild[c].component) {
                           state.pathMap.set(`/${payload[a].key}/${aChild[b].key}/${bChild[c].key}`, {
                              indexes: [a, b, c],
                              keys: [payload[a].key, aChild[b].key, bChild[c].key],
                              printNames: [payload[a].name, aChild[b].name, bChild[c].name],
                              lastKey: bChild[c].key,
                            //   name: `${payload[a].key}-${aChild[b].key}-${bChild[c].key}`,
                              name: `${bChild[c].key}`,
                              parentsName: (aChild[b].component) ? `${payload[a].key}-${aChild[b].key}` : undefined,
                              childPath: (aChild[b].component) ? bChild[c].key : undefined,
                              component: bChild[c].component
                           });
                        }
                     }
                  }
               }
            }
         }

            state.selected = -1
            state.currentPath = ''
            state.currentIndex = -1
            state.currentkeys = ''
            state.parentIndex = 0,
            state.currentKey = ''
        },
        setSelected(state, payload){
            state.selected = payload
        }, 
        setCurrentKeys(state, payload){
            state.currentKeys = payload
        }, 
        setCurrentIndex(state, payload){
            state.currentIndex = payload
        },
        setParentIndex(state, payload){
            state.parentIndex = payload
        },
        setCurrentKey(state, payload){
            state.currentKey = payload
        },
        setTabKey(state, payload) {
            state.tabKey = payload
        },
        setSearchData(state, payload) {
            state.searchData = payload
        },
        setUpdateSearchData(state, payload) {
            console.log("update Search Data : ", payload)
            for(let t in payload) {
                console.log("update Search Data : ", payload[t].type)
                console.log("update Search Data : ", payload[t].value)
                state.searchData[payload[t].type] = payload[t].value
            }
        },
        setPagingBean(state, payload) {
            console.log("set Page Bean :", payload)
            state.pagingBean = payload
        },
        setClear(state){
            state.selected = -1
            state.currentPath = ''
            state.currentIndex = -1
            state.currentkeys = ''
            state.parentIndex = 0
            state.currentKey = ''
            state.tabKey = ''
        },
        clearSearchData(state) {
            state.searchData = {}
        },
        clearPagingBean(state) {
            state.pagingBean = {}
        }
    },
    actions: {
        async fetch({ commit }){
            const data = require('../../../models/treeMenu/treeMenu.json').tree
            commit('setTree', data)
            return true
        },
        async fetchPaging({commit}, payload) {
            commit('clearPagingBean')

            console.log("fetchPaging payload", payload.payload.pagingBean)

            let tempPagingBean = {
                countPerRecordTypeCd : payload.payload.pagingBean.countPerRecordTypeCd,
                totalRecordCount : payload.payload.pagingBean.totalRecordCount,
                totalPageCount : payload.payload.pagingBean.totalPageCount,
                pageNo : payload.payload.pagingBean.pageNo,
                endRow : payload.payload.pagingBean.endRow,
                totalGroupCount : payload.payload.pagingBean.totalGroupCount,
                groupNo : payload.payload.pagingBean.groupNo,
                pageStartNo : payload.payload.pagingBean.pageStartNo,
                pageEndNo : payload.payload.pagingBean.pageEndNo
            }

            commit('setPagingBean', tempPagingBean)
            // console.log("set tree paging payload :", payload)
        },
        async fetchSeachData({state, commit}, payload){
            commit('clearSearchData')
            state.searchData = Object.assign({}, payload['payload'])
        }
    },
}
