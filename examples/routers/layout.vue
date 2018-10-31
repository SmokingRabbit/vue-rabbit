<template>
    <div class="container">
        <h1>
            Layout
        </h1>

        <div class="basis-layout">
            <h2>
                Basis Layout.
            </h2>
            <rbt-layout class="center">
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
        </div>

        <div class="side-layout">
            <h2>
                Aside Layout.
            </h2>
            <rbt-layout>
                <rbt-aside class="aside">
                    Aside
                </rbt-aside>
                <rbt-main class="main">
                    Main

                </rbt-main>
            </rbt-layout>
        </div>
    </div>

</template>
<style lang="less" scoped>
    .center {
        text-align: center;
    }

    .line-height-55 {
        line-height: 55px;
        color: #fff;
    }

    .footer,
    .aside,
    .header {
        background-color: #2d8cf0;
        .line-height-55;
    }

    .main {
        background-color: #ccc;
    }

    .footer {
        background-color: #2d8cf0;
        .line-height-55;
    }
</style>
