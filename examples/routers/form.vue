<template>
    <div>
        <rbt-form ref="form1" :model="model" :rules="rules" disabled label-position="left">
            <rbt-formitem prop="test" >
                <input type="text" v-model="model.test">
            </rbt-formitem>
        </rbt-form>
        <rbt-button @click="resetForm('form1')">reset</rbt-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: true,
                model: {
                    test: '23',
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
        },
        methods: {
            resetForm(name) {
                this.$refs[name].resetFields();
            }
        }
    };
</script>
