<template>
    <div>
        <h1>Layout</h1>
        <p>
            This is Layouts .....
        </p>

        <div class="basic-line">
            <h2>
                Basic
            </h2>
            <rbt-row>
                <!--// full row-->
                <rbt-col class="rbt-col" :span="24">
                    <div class="col-box l3">
                        24
                    </div>
                </rbt-col>

            </rbt-row>
            <rbt-row>
                <!--// Span 12-->
                <rbt-col class="rbt-col" :span="item" :key="index" v-for="(item , index) in range(12)">
                    <div class="col-box l3">
                        12
                    </div>
                </rbt-col>

            </rbt-row>

            <rbt-row>
                <!--// Span 8-->
                <rbt-col class="rbt-col" :span="item" :key="index" v-for="(item , index) in range(8)">
                    <div class="col-box l3">
                        {{item}}
                    </div>
                </rbt-col>

            </rbt-row>
        </div>

        <div class="spacing-line">
            <h2>
                spacing
            </h2>
            <rbt-row :gutter="10">
                <rbt-col class="rbt-col" :span="item" :key="index" v-for="(item , index) in range(12)">
                    <div class="col-box l3">
                        {{item}}
                    </div>
                </rbt-col>
            </rbt-row>
            <rbt-row :gutter="10">
                <rbt-col class="rbt-col" :span="item" :key="index" v-for="(item , index) in range(4)">
                    <div class="col-box l3">
                        {{item}}
                    </div>
                </rbt-col>
            </rbt-row>
        </div>

        <div class="hybrid-line">
            <h2>
                hybrid
            </h2>
            <rbt-row :gutter="10">
                <rbt-col class="rbt-col" :span="item" :key="index" v-for="(item , index) in [14,10]">
                    <div class="col-box l3">
                        {{item}}
                    </div>
                </rbt-col>
            </rbt-row>

            <rbt-row :gutter="10">
                <rbt-col class="rbt-col" :span="item" :key="index" v-for="(item , index) in [5,5,10,4]">
                    <div class="col-box l3">
                        {{item}}
                    </div>
                </rbt-col>
            </rbt-row>

            <rbt-row :gutter="10">
                <rbt-col class="rbt-col" :span="item" :key="index" v-for="(item , index) in [4,16,4]">
                    <div class="col-box l3">
                        {{item}}
                    </div>
                </rbt-col>
            </rbt-row>

        </div>

        <div class="offset-line">
            <h2>
                Offset
            </h2>
            <rbt-row>
                <rbt-col class="rbt-col" :span="6">
                    <div class="col-box l3">
                        6
                    </div>
                </rbt-col>
            </rbt-row>
            <rbt-row>
                <rbt-col class="rbt-col" :span="6" :offset="6">
                    <div class="col-box l3">
                        6
                    </div>
                </rbt-col>
            </rbt-row>
            <rbt-row>
                <rbt-col class="rbt-col" :span="item" :offset="item" :key="index" v-for="(item , index) in [6 , 6]">
                    <div class="col-box l3">
                        {{item}}
                    </div>
                </rbt-col>
            </rbt-row>
            <rbt-row>
                <rbt-col class="rbt-col" :span="12" :offset="6">
                    <div class="col-box l3">
                        12
                    </div>
                </rbt-col>
            </rbt-row>

        </div>

        <div class="flex-line">
            <h2>
                Flex
            </h2>
            <rbt-row type="flex">
                <rbt-col class="rbt-col" :span="item" :key="index" v-for="(item , index) in [6,6,6]">
                    <div class="col-box l3">
                        {{item}}
                    </div>
                </rbt-col>
            </rbt-row>
            <rbt-row type="flex" justify="center">
                <rbt-col class="rbt-col" :span="item" :key="index" v-for="(item , index) in [6,6,6]">
                    <div class="col-box l3">
                        {{item}}
                    </div>
                </rbt-col>
            </rbt-row>
            <rbt-row type="flex" justify="between">
                <rbt-col class="rbt-col" :span="item" :key="index" v-for="(item , index) in [6,6,6]">
                    <div class="col-box l3">
                        {{item}}
                    </div>
                </rbt-col>
            </rbt-row>
            <rbt-row type="flex" justify="around">
                <rbt-col class="rbt-col" :span="item" :key="index" v-for="(item , index) in [6,6,6]">
                    <div class="col-box l3">
                        {{item}}
                    </div>
                </rbt-col>
            </rbt-row>
        </div>

        <div class="breakpoints-line">
            <h2>
                Breakpoints
            </h2>
            <p>
                xs , sm , md , lg , xl
            </p>
            <rbt-row :gutter="10">
                <rbt-col class="rbt-col" :xl="4" :md="6" :sm="12" :xs="24">
                    <div class="col-box l3">
                    </div>
                </rbt-col>
                <rbt-col class="rbt-col" :xl="8" :md="6" :sm="12" :xs="24">
                    <div class="col-box l3">
                    </div>
                </rbt-col>
                <rbt-col class="rbt-col" :xl="8" :md="6" :sm="12" :xs="24">
                    <div class="col-box l3">
                    </div>
                </rbt-col>
                <rbt-col class="rbt-col" :xl="4" :md="6" :sm="12" :xs="24">
                    <div class="col-box l3">
                    </div>
                </rbt-col>
            </rbt-row>


        </div>

        <div class="push-line">
            <h2>
                Breakpoints Push
            </h2>
            <p>
                need reset push : 0
            </p>
            <rbt-row :gutter="10">
                <rbt-col class="rbt-col" :xl="{span:14,push:0}"  :sm="{span:14,push:0}"  :md="{span:14 ,push:10}">
                    <div class="col-box l3">
                        I'm Mr.Left
                    </div>
                </rbt-col>
                <rbt-col class="rbt-col" :xl="{span:10,pull:0}"  :sm="{span:10,pull:0}"  :md="{span:10 ,pull:14}">
                    <div class="col-box l3">
                        I'm Mr.Right
                    </div>
                </rbt-col>
            </rbt-row>
        </div>

        <div class="hidden-line">
            <h2>
                Breakpoints Hidden
            </h2>
            <p>
                .hidden-{xs , sm , md , lg , xl }-{only , and-down , and-up}
            </p>
            <h3>
                left md and down hidden . Right alway display
            </h3>
            <rbt-row :gutter="10">
                <rbt-col class="rbt-col" :xl="{span:14}"  :md="{span:14,hide:'down'}" align="middle" >
                    <div class="col-box l3">
                        I'm md down Hidden.
                    </div>
                </rbt-col>
                <rbt-col class="rbt-col" :span="10" >
                    <div class="col-box l3">
                        I'm alway display.
                    </div>
                </rbt-col>



            </rbt-row>
        </div>
    </div>

</template>
<script>
    export default {
        methods: {
            range (column) {
                const arr = [];
                const count = 24 / column;
                for (let i = 1; i <= count; i++) {
                    arr.push(column);
                }
                return arr;
            }
        }

    };
</script>

<style scoped lang="less">

    .rbt-col {
        padding-bottom: 12px;
    }

    .col-box {
        line-height: 36px;
        height: 36px;
        text-align: center;
        border-radius: 5px;
        color: #8c8989;

        &.l3 {
            background-color: #9aa9bf;
            color: #f5f5f5;
        }
    }

    [class*="-line"] p {
        color: #777;
        font-size: 14px;
        padding-bottom: 10px;
        padding-top: 2px;
        padding-left: 2px;
    }
</style>
