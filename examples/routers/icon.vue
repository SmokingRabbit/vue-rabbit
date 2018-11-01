<template>
    <div>
        <h2>Icon</h2>
        <h4>basic</h4>
        <ul class="icon-list">
            <li>
                <rbt-icon type="top"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="down"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="left"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="right"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="spin"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="close"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="success"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="success-f"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="info"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="info-f"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="error"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="error-f"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="warning"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="warning-f"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="paging-left"></rbt-icon>
            </li>
            <li>
                <rbt-icon type="paging-right"></rbt-icon>
            </li>
        </ul>

        <h4>size</h4>
        <ul class="icon-list">
            <li>
                <rbt-icon type="top" size=50></rbt-icon>
            </li>
        </ul>

        <h4>color</h4>
        <ul class="icon-list">
            <li>
                <rbt-icon type="top" color="#f00"></rbt-icon>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
.icon-list {
    overflow: hidden;

    > li {
        width: 80px;
        height: 100px;
        float: left;
        font-size: 28px;
        text-align: center;
        line-height: 100px;
    }
}
</style>
