import Home from "@views/admin/index.vue"
import User from "@views/admin/users/index.vue";
import ProductIndex from "@views/admin/product/index.vue";
import ProdutCreate from "@views/admin/product/create.vue";
import ProductShow from "@views/admin/product/show.vue";
import ProductList from "@views/admin/product/list.vue";
import ProductCategoryCreate from "@views/admin/productCategory/create.vue"

const routes = [
    {
        path:"/admin",
        component:Home
    },
    {
        path:"/users",
        name:"users.index",
        component:User
    },
    {
        path: '/admin/products',
        // component: ProductIndex,
        // name:"products.index",
        children: [
          {
            path: '',
            component: ProductIndex,
            name:"products.index",
          },
          {
            path: 'home',
            component: ProductList,
            name:"products.list",
          },
          {
            path: 'create',
            component: ProdutCreate,
            name:"products.create",
          },
          {
            path: 'show',
            component: ProductShow,
            name:"products.shpw",
          },
          {
            path: 'edit/:id',
            component: ProductShow,
            name:"products.edit",
          },
        ]
    },
    {
        path: '/admin/product-category/create',
        component:ProductCategoryCreate,
        name:"productCategory.create"
    }
]

export default routes;