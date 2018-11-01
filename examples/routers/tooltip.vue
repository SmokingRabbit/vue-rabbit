<template>
    <div>
        <h2>Tooltip</h2>
        <p>This is Tooltip……</p>
        <rbt-tooltip content="这是一个tooltip">
            <rbt-button @click="click">tooltip</rbt-button>
        </rbt-tooltip>
        <rbt-tooltip content="这是一个tooltip" placement="top-left">
            <rbt-button>tooltip top-left</rbt-button>
        </rbt-tooltip>
        <rbt-tooltip content="这是一个tooltip" placement="top-right">
            <rbt-button>tooltip top-right</rbt-button>
        </rbt-tooltip>
        <rbt-tooltip content="这是一个tooltip" placement="bottom">
            <rbt-button>tooltip bottom</rbt-button>
        </rbt-tooltip>
        <rbt-tooltip content="这是一个tooltip" placement="bottom-left">
            <rbt-button>tooltip bottom-left</rbt-button>
        </rbt-tooltip>
        <rbt-tooltip content="这是一个tooltip" placement="bottom-right">
            <rbt-button>tooltip bottom-right</rbt-button>
        </rbt-tooltip>
        <rbt-tooltip content="这是一个tooltip" placement="left">
            <rbt-button>tooltip left</rbt-button>
        </rbt-tooltip>
        <rbt-tooltip content="这是一个tooltip" placement="left-top">
            <rbt-button>tooltip left-top</rbt-button>
        </rbt-tooltip>
        <rbt-tooltip content="这是一个tooltip" placement="left-bottom">
            <rbt-button>tooltip left-bottom</rbt-button>
        </rbt-tooltip>
        <rbt-tooltip content="这是一个tooltip" placement="right">
            <rbt-button>tooltip right</rbt-button>
        </rbt-tooltip>
        <rbt-tooltip content="这是一个tooltip" placement="right-top">
            <rbt-button>tooltip right-top</rbt-button>
        </rbt-tooltip>
        <rbt-tooltip content="这是一个tooltip" placement="right-bottom">
            <rbt-button>tooltip right-bottom</rbt-button>
        </rbt-tooltip>
        <br />
        <rbt-tooltip content="这是一个tooltip" disabled>
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
