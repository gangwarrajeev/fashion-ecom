import HomeView from "@views/frontend/home/Home.vue";
import CartView from "@views/frontend/cart/Cart.vue";
import Checkout from "@views/frontend/checkout/Checkout.vue";
import ProductDetails from "@views/frontend/product/ProductDetails.vue";
import ProductCategories  from "@views/frontend/product/ProductData.vue"
import ContactUs from "@views/frontend/contact/ContactUs.vue";
const routes = [
    {
        path: "/",
        component: HomeView
    },
    {
        path: "/cart",
        component: CartView
    },
    {
        path: "/checkout",
        component: Checkout
    },
    {
        path: "/product-details",
        component: ProductDetails
    },
    {
        path: "/product-categories",
        component: ProductCategories
    },
    {
        path: "/contact-us",
        component: ContactUs
    }
]

export default routes;