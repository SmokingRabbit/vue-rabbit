<template>
    <div>
        <h2>Tooltip</h2>
        <div>
            <h4>top</h4>
            <rbt-tooltip content="这是一个tooltip">
                <rbt-button @click="click">tooltip</rbt-button>
            </rbt-tooltip>
            <rbt-tooltip content="这是一个tooltip" placement="top-left">
                <rbt-button>tooltip top-left</rbt-button>
            </rbt-tooltip>
            <rbt-tooltip content="这是一个tooltip" placement="top-right">
                <rbt-button>tooltip top-right</rbt-button>
            </rbt-tooltip>
        </div>
        <div>
            <h4>bottom</h4>
            <rbt-tooltip content="这是一个tooltip" placement="bottom">
                <rbt-button>tooltip bottom</rbt-button>
            </rbt-tooltip>
            <rbt-tooltip content="这是一个tooltip" placement="bottom-left">
                <rbt-button>tooltip bottom-left</rbt-button>
            </rbt-tooltip>
            <rbt-tooltip content="这是一个tooltip" placement="bottom-right">
                <rbt-button>tooltip bottom-right</rbt-button>
            </rbt-tooltip>
        </div>
        <div class="mt">
            <h4>left</h4>
            <rbt-tooltip content="这是一个tooltip" placement="left">
                <rbt-button>tooltip left</rbt-button>
            </rbt-tooltip>
            <rbt-tooltip content="这是一个tooltip" placement="left-top">
                <rbt-button>tooltip left-top</rbt-button>
            </rbt-tooltip>
            <rbt-tooltip content="这是一个tooltip" placement="left-bottom">
                <rbt-button>tooltip left-bottom</rbt-button>
            </rbt-tooltip>
        </div>
        <div class="mt">
            <h4>right</h4>
            <rbt-tooltip content="这是一个tooltip" placement="right">
                <rbt-button>tooltip right</rbt-button>
            </rbt-tooltip>
            <rbt-tooltip content="这是一个tooltip" placement="right-top">
                <rbt-button>tooltip right-top</rbt-button>
            </rbt-tooltip>
            <rbt-tooltip content="这是一个tooltip" placement="right-bottom">
                <rbt-button>tooltip right-bottom</rbt-button>
            </rbt-tooltip>
        </div>
        <div class="mt">
            <h4>disabled</h4>
            <rbt-tooltip content="这是一个tooltip" disabled>
                <rbt-button>tooltip</rbt-button>
            </rbt-tooltip>
        </div>
        <div class="mt">
            <h4>slot.content</h4>
            <rbt-tooltip>
                <div slot="content">
                    <p>第一行内容</p>
                    <p>第二行内容</p>
                </div>
                <rbt-button>tooltip</rbt-button>
            </rbt-tooltip>
        </div>
        <div class="mt">
            <h4>trigger</h4>
            <rbt-tooltip content="click" trigger="click">
                <rbt-button>tooltip click</rbt-button>
            </rbt-tooltip>
            <rbt-tooltip content="hover" trigger="hover">
                <rbt-button>tooltip hover</rbt-button>
            </rbt-tooltip>
            <rbt-tooltip content="contextMenu" trigger="contextMenu">
                <rbt-button>tooltip contextMenu</rbt-button>
            </rbt-tooltip>
            <rbt-tooltip content="focus" trigger="focus">
                <input value="tooltip focus" />
            </rbt-tooltip>
        </div>
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
