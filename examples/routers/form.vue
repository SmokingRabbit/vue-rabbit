<template>
    <div>
        <rbt-form :model="model" :rules="rules" disabled label-position="left">
            <rbt-formitem prop="test" ></rbt-formitem>
        </rbt-form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: true,
                model: {
                    test: '',
                    testArr: [
                        '123',
                        '4455'
                    ]
                },
                rules: {
                    test: {
                        required: true
                    }
                }
            };
        }
    };
</script>
