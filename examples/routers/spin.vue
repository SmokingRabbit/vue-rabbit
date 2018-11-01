<template>
    <div>
        <h2>Spin</h2>
        <h4>basic</h4>
        <rbt-spin></rbt-spin>

        <h4>wrap</h4>
        <rbt-button @click="click">{{visible ? '停止加载' : '开始加载'}}</rbt-button>
        <rbt-spin :visible="visible" text="正在加载">
            <p>人生得意须尽欢，莫使金樽空对月。</p>
            <p>天生我材必有用，千金散尽还复来。</p>
            <p>烹羊宰牛且为乐，会须一饮三百杯。</p>
            <p>岑夫子，丹丘生，将进酒，杯莫停。</p>
        </rbt-spin>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    },
    methods: {
        click() {
            this.visible = !this.visible;
        }
    }
};
</script>
