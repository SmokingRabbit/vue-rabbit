<template>
    <div>
        <rbt-form ref="form1" :model="model" :rules="rules" disabled>
            <h1>
                Basis
            </h1>
            <rbt-formitem prop="test" label="Your Name : " >
                <rbt-input v-model="model.test" />
            </rbt-formitem>
            <rbt-formitem prop="test" label="Your Name : " >
                <rbt-input v-model="model.test" fillet />
            </rbt-formitem>
            <rbt-formitem prop="test" label="Your Name : " >
                <rbt-input v-model="model.test" fillet text-right />
            </rbt-formitem>


            <rbt-formitem prop="test" label="Your Email : " label-position="outside" >
                <rbt-input v-model="model.test" fillet text-right />
            </rbt-formitem>
            <rbt-formitem prop="test" >
                <rbt-input v-model="model.test" fillet text-right />
            </rbt-formitem>


            <rbt-formitem prop="test" label="This is : " label-position="inside">
                <rbt-input v-model="model.test" fillet text-right />
            </rbt-formitem>

            <rbt-formitem prop="test" label-position="inside" label-align="right" label="this is your ppt :">
                <rbt-input v-model="model.test" />
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
