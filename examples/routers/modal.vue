<template>
    <div>
        <h2>Modal</h2>
        <div>
            <rbt-button @click="showModal1">显示modal</rbt-button>
            <rbt-modal :visible.sync="modal1"></rbt-modal>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modal1: false
        };
    },
    methods: {
        showModal1() {
            this.modal1 = true;
        }
    }
};
</script>
