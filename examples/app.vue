<template>
    <section class="examples-container">
        <aside class="examples-nav">
            <ul>
                <li><router-link to="/button">Button</router-link></li>
                <li><router-link to="/layout">Layout</router-link></li>
            </ul>
        </aside>
        <section class="examples-content">
            <router-view></router-view>
        </section>
    </section>
</template>

<style lang="less">
.examples-container {
    min-height: 100vh;
    width: 100%;
    display: flex;
}
.examples-nav {
    width: 220px;
    flex: none;
    border-right: 1px solid #ddd;
    padding: 12px 0;

    >ul {
        > li {
            height: 34px;
            transition: all 0.2s ease-in;

            > a {
                transition: all 0.2s ease-in;
                display: block;
                padding: 0 10px;
                line-height: 34px;
                font-size: 16px;
                cursor: pointer;

                &.router-link-active,
                &:hover {
                    background-color: #2d8cf0;
                    color: #fff;
                }
            }
        }
    }
}
.examples-content {
    padding: 20px;
    flex: auto;
}
.mt {
    margin-top: 20px;
}
</style>
