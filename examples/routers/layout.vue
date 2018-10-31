<template>
    <div class="container">
        <h1>
            Layout
        </h1>

        <div class="basis-layout">
            <h2>
                Basis Layout.
            </h2>
            <rbt-layout class="center layout">
                <rbt-header class="header">
                    Header
                </rbt-header>
                <rbt-main class="main">
                    Main
                </rbt-main>
                <rbt-footer class="footer">
                    Footer
                </rbt-footer>
            </rbt-layout>
            <rbt-layout class="layout">
                <rbt-aside class="aside" style="line-height: 200px;">
                    Aside
                </rbt-aside>
                <rbt-main class="main">
                    Main
                </rbt-main>
            </rbt-layout>
            <rbt-layout class="layout">
                <rbt-header class="header">
                    Header
                </rbt-header>
                <rbt-layout>
                    <rbt-aside class="aside" style="line-height: 255px;">
                        Aside
                    </rbt-aside>
                    <rbt-layout>
                        <rbt-main class="main">
                            Main
                        </rbt-main>
                        <rbt-footer class="footer">
                            Footer
                        </rbt-footer>
                    </rbt-layout>
                </rbt-layout>
            </rbt-layout>
            <rbt-layout class="layout">
                <rbt-header class="header">
                    Header
                </rbt-header>
                <rbt-layout>
                    <rbt-aside class="aside" style="line-height: 200px;">
                        Aside
                    </rbt-aside>
                    <rbt-main class="main">
                        Main
                    </rbt-main>
                </rbt-layout>
            </rbt-layout>
            <rbt-layout class="layout">
                <rbt-aside class="aside" style="line-height: 255px;">
                    Aside
                </rbt-aside>
                <rbt-layout>
                    <rbt-header class="header">
                        Header
                    </rbt-header>
                    <rbt-main class="main">
                        Main
                    </rbt-main>
                </rbt-layout>
            </rbt-layout>


        </div>

    </div>

</template>
<style lang="less" scoped>
    @color: #a6d1ff;
    @color-: #bddeff;
    @color--: #cfe7ff;

    .layout {
        margin-bottom: 40px;
        text-align: center;
    }

    .header,
    .footer {
        background-color: @color;
        line-height: 55px;
    }

    .aside {
        background-color: @color-;
    }

    .main {
        background-color: @color--;
        line-height: 200px;
        padding: 0;
        height: 200px;
    }
</style>
