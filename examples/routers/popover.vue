<template>
    <div>
        <h2>popover</h2>
        <div>
            <h4>top</h4>
            <rbt-popover title="这是一个popover" content="这是popover-content">
                <rbt-button>popover</rbt-button>
            </rbt-popover>
            <rbt-popover title="这是一个popover" content="这是popover-content" placement="top-left">
                <rbt-button>popover top-left</rbt-button>
            </rbt-popover>
            <rbt-popover title="这是一个popover" content="这是popover-content" placement="top-right">
                <rbt-button>popover top-right</rbt-button>
            </rbt-popover>
        </div>
        <div>
            <h4>bottom</h4>
            <rbt-popover title="这是一个popover" content="这是popover-content" placement="bottom">
                <rbt-button>popover bottom</rbt-button>
            </rbt-popover>
            <rbt-popover title="这是一个popover" content="这是popover-content" placement="bottom-left">
                <rbt-button>popover bottom-left</rbt-button>
            </rbt-popover>
            <rbt-popover title="这是一个popover" content="这是popover-content" placement="bottom-right">
                <rbt-button>popover bottom-right</rbt-button>
            </rbt-popover>
        </div>
        <div class="mt">
            <h4>left</h4>
            <rbt-popover title="这是一个popover" content="这是popover-content" placement="left">
                <rbt-button>popover left</rbt-button>
            </rbt-popover>
            <rbt-popover title="这是一个popover" content="这是popover-content" placement="left-top">
                <rbt-button>popover left-top</rbt-button>
            </rbt-popover>
            <rbt-popover title="这是一个popover" content="这是popover-content" placement="left-bottom">
                <rbt-button>popover left-bottom</rbt-button>
            </rbt-popover>
        </div>
        <div class="mt">
            <h4>right</h4>
            <rbt-popover title="这是一个popover" content="这是popover-content" placement="right">
                <rbt-button>popover right</rbt-button>
            </rbt-popover>
            <rbt-popover title="这是一个popover" content="这是popover-content" placement="right-top">
                <rbt-button>popover right-top</rbt-button>
            </rbt-popover>
            <rbt-popover title="这是一个popover" content="这是popover-content" placement="right-bottom">
                <rbt-button>popover right-bottom</rbt-button>
            </rbt-popover>
        </div>
        <div class="mt">
            <h4>disabled</h4>
            <rbt-popover title="这是一个popover" content="这是popover-content" disabled>
                <rbt-button>popover</rbt-button>
            </rbt-popover>
        </div>
        <div class="mt">
            <h4>slot.title</h4>
            <rbt-popover>
                <div slot="content">
                    <p>第一行内容</p>
                    <p>第二行内容</p>
                </div>
                <rbt-button>popover</rbt-button>
            </rbt-popover>
        </div>
        <div class="mt">
            <h4>trigger</h4>
            <rbt-popover title="click" trigger="click">
                <div slot="content">
                    <p>第一行内容</p>
                    <p>第二行内容</p>
                </div>
                <rbt-button>popover click</rbt-button>
            </rbt-popover>
            <rbt-popover title="hover" trigger="hover">
                <rbt-button>popover hover</rbt-button>
            </rbt-popover>
            <rbt-popover title="contextMenu" trigger="contextMenu">
                <rbt-button>popover contextMenu</rbt-button>
            </rbt-popover>
            <rbt-popover title="focus" trigger="focus">
                <input value="popover focus" />
            </rbt-popover>
        </div>
    </div>
</template>

<script>
export default {

};
</script>
