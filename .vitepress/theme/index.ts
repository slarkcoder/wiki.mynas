import { h } from 'vue';
import Theme from "vitepress/theme";
import GiscusComment from "./components/GiscusComment.vue";
import BottomInfoComment from "./components/BottomInfoComment.vue";
import './style/var.css';
 
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default {
	...Theme,
	Layout() {
        return h(Theme.Layout, null, {
            'doc-after': () => [
                h(GiscusComment)
            ],
            'doc-footer-before': () => [
                h(BottomInfoComment)
            ],
        });
    },
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from createApp()
        // router is VitePress' custom router (see `lib/app/router.js`)
        // siteData is a ref of current site-level metadata.
        app.use(ElementPlus);
      },
}