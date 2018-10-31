<template>
    <div>
        <h2>Tooltip</h2>
        <p>This is Tooltip……</p>
        <rbt-tooltip content="这是一个tooltip">
            <rbt-button @click="click">tooltip</rbt-button>
        </rbt-tooltip>
    </div>
</template>

<script>
export default {
    methods: {
        click() {
            console.log('clicked');
        }
    }
};
</script>
