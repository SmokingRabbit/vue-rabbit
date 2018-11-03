<template>
    <div>
        <h2>Modal</h2>
        <div>
            <rbt-button @click="showmodalVisible">modal</rbt-button>
            <rbt-modal :visible.sync="modalVisible" bordered>
                <rbt-modal-header>对话框标题</rbt-modal-header>
                <rbt-modal-body>
                    <p>人生得意须尽欢，莫使金樽空对月。</p>
                    <p>天生我材必有用，千金散尽还复来。</p>
                    <p>烹羊宰牛且为乐，会须一饮三百杯。</p>
                    <p>岑夫子，丹丘生，将进酒，杯莫停。</p>
                </rbt-modal-body>
                <rbt-modal-footer>
                    <rbt-button @click="closemodalVisible" text>关闭</rbt-button>
                    <rbt-button type="primary">确定</rbt-button>
                </rbt-modal-footer>
            </rbt-modal>
        </div>
        <div class="mt">
            <rbt-button @click="showAlert">alert</rbt-button>
            <rbt-alert-modal message="这是一个alert" :visible.sync="alertVisible"></rbt-alert-modal>
        </div>
        <div class="mt">
            <rbt-button @click="show$Alert">$alert</rbt-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modalVisible: false,
            alertVisible: false
        };
    },
    methods: {
        showmodalVisible() {
            this.modalVisible = true;
        },
        closemodalVisible() {
            this.modalVisible = false;
        },
        showAlert() {
            this.alertVisible = true;
        },
        show$Alert() {
            this.$alert({
                message: '这是$alert'
            });
        }
    }
};
</script>
