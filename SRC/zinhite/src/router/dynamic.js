import staticRouter from './static'

export default(store) => {

    const pathMap = store.state.treeMenu.pathMap
    const routes = staticRouter

    for (const [path, { name, params, keys }] of pathMap) {
        console.log("router name :", name)
        routes.push({
            path: (params) ? `${path}${params}` : path,
            name,
            component: () => import(`../pages/${keys[0]}/${keys[1]}/${keys[2]}/index.vue`)
        });
    }

    console.log("dynamic router list :", routes)

    return routes
}