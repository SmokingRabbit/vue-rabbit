import Vue, { VNode } from 'vue';

declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

declare global {
    namespace JSX {
        interface Element extends VNode { }
        interface ElementClass extends Vue { }
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}

declare global {
    interface Emitter extends Vue {
        $children: any;
    }
}
