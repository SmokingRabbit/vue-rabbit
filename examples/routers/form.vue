<template>
    <div>
        <rbt-form disabled label-position="left">
            <rbt-switch v-model="data"></rbt-switch>
        </rbt-form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: true
            };
        }
    };
</script>
