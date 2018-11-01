<template>
    <div>
        <h2>Button</h2>
        <div>
            <h4>basic</h4>
            <rbt-button @click="testClick" class="test">按钮测试</rbt-button>
            <rbt-button type="primary">按钮测试</rbt-button>
            <rbt-button type="info">按钮测试</rbt-button>
            <rbt-button type="success">按钮测试</rbt-button>
            <rbt-button type="warning">按钮测试</rbt-button>
            <rbt-button type="danger">按钮测试</rbt-button>
        </div>
        <div class="mt">
            <h4>size-small</h4>
            <rbt-button size="small">按钮测试</rbt-button>
            <rbt-button size="small" type="primary">按钮测试</rbt-button>
            <rbt-button size="small" type="info">按钮测试</rbt-button>
            <rbt-button size="small" type="success">按钮测试</rbt-button>
            <rbt-button size="small" type="warning">按钮测试</rbt-button>
            <rbt-button size="small" type="danger">按钮测试</rbt-button>
        </div>
        <div class="mt">
            <h4>basic-large</h4>
            <rbt-button size="large">按钮测试</rbt-button>
            <rbt-button size="large" type="primary">按钮测试</rbt-button>
            <rbt-button size="large" type="info">按钮测试</rbt-button>
            <rbt-button size="large" type="success">按钮测试</rbt-button>
            <rbt-button size="large" type="warning">按钮测试</rbt-button>
            <rbt-button size="large" type="danger">按钮测试</rbt-button>
        </div>
        <div class="mt">
            <h4>link to</h4>
            <rbt-button to="www.baidu.com">按钮测试</rbt-button>
            <rbt-button to="www.baidu.com" type="primary">按钮测试</rbt-button>
            <rbt-button to="www.baidu.com" type="info">按钮测试</rbt-button>
            <rbt-button to="www.baidu.com" type="success">按钮测试</rbt-button>
            <rbt-button to="www.baidu.com" type="warning">按钮测试</rbt-button>
            <rbt-button to="www.baidu.com" type="danger">按钮测试</rbt-button>
        </div>
        <div class="mt">
            <h4>disabled</h4>
            <rbt-button disabled>按钮测试</rbt-button>
            <rbt-button disabled type="primary">按钮测试</rbt-button>
            <rbt-button disabled type="info">按钮测试</rbt-button>
            <rbt-button disabled type="success">按钮测试</rbt-button>
            <rbt-button disabled type="warning">按钮测试</rbt-button>
            <rbt-button disabled type="danger">按钮测试</rbt-button>
        </div>
        <div class="mt">
            <h4>loading</h4>
            <rbt-button loading>按钮测试</rbt-button>
            <rbt-button loading type="primary">按钮测试</rbt-button>
            <rbt-button loading type="info">按钮测试</rbt-button>
            <rbt-button loading type="success">按钮测试</rbt-button>
            <rbt-button loading type="warning">按钮测试</rbt-button>
            <rbt-button loading type="danger">按钮测试</rbt-button>
        </div>
        <div class="mt">
            <h4>block</h4>
            <rbt-button block>按钮测试</rbt-button>
            <rbt-button block type="primary">按钮测试</rbt-button>
            <rbt-button block type="info">按钮测试</rbt-button>
            <rbt-button block type="success">按钮测试</rbt-button>
            <rbt-button block type="warning">按钮测试</rbt-button>
            <rbt-button block type="danger">按钮测试</rbt-button>
        </div>
        <div class="mt">
            <h4>shape</h4>
            <rbt-button shape>按钮测试</rbt-button>
            <rbt-button shape type="primary">按钮测试</rbt-button>
            <rbt-button shape type="info">按钮测试</rbt-button>
            <rbt-button shape type="success">按钮测试</rbt-button>
            <rbt-button shape type="warning">按钮测试</rbt-button>
            <rbt-button shape type="danger">按钮测试</rbt-button>
        </div>
        <div class="mt">
            <h4>ghost</h4>
            <rbt-button ghost>按钮测试</rbt-button>
            <rbt-button ghost type="primary">按钮测试</rbt-button>
            <rbt-button ghost type="info">按钮测试</rbt-button>
            <rbt-button ghost type="success">按钮测试</rbt-button>
            <rbt-button ghost type="warning">按钮测试</rbt-button>
            <rbt-button ghost type="danger">按钮测试</rbt-button>
        </div>
        <div class="mt">
            <h4>dashed</h4>
            <rbt-button dashed>按钮测试</rbt-button>
            <rbt-button dashed ghost type="primary">按钮测试</rbt-button>
            <rbt-button dashed type="info">按钮测试</rbt-button>
            <rbt-button dashed type="success">按钮测试</rbt-button>
            <rbt-button dashed type="warning">按钮测试</rbt-button>
            <rbt-button dashed type="danger">按钮测试</rbt-button>
        </div>
        <div class="mt">
            <h4>text</h4>
            <rbt-button text>按钮测试</rbt-button>
            <rbt-button text type="primary">按钮测试</rbt-button>
            <rbt-button text type="info">按钮测试</rbt-button>
            <rbt-button text type="success">按钮测试</rbt-button>
            <rbt-button text type="warning">按钮测试</rbt-button>
            <rbt-button text type="danger">按钮测试</rbt-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        testClick() {
            console.log('this button is click');
        }
    }
};
</script>
