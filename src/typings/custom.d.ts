import Vue, { VNode } from 'vue';
import { AlertModal } from '../components';

declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

declare module 'vue/types/vue' {
    interface Vue {
        $alert: AlertModal
    }
}

declare global {
    namespace JSX {
        interface Element extends VNode { }
        interface ElementClass extends Vue { }
        interface IntrinsicElements {
            [elem: string]: any
        }
    }
}
