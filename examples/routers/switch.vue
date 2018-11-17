<template>
    <div>
        <h1>
            I am live
        </h1>
        <rbt-switch text-position="inner" height="122" v-model="data">
            <span slot="open">
                short
            </span>
            <span slot="close">
                this is long long long text.
            </span>
        </rbt-switch>
        <h1>
            {{data}}
        </h1>
        <rbt-switch text-position="outer" active-color="#f5f5f5" close-color="#dbdfe6" core-color="#2ab6f6" height="80" v-model="data">
            <span slot="open">
                short
            </span>
            <span slot="close">
                this is long long long text.
            </span>
        </rbt-switch>
        <h1>
            {{data}}
        </h1>
        <rbt-switch v-model="data" :disabled="true">
        </rbt-switch>
        <h1>
            {{data}}
        </h1>
        <rbt-switch v-model="data" height="40" :loading="true">
        </rbt-switch>
        <h1>
            {{data}}
        </h1>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: false,
                data1: true
            };
        }
    };
</script>
