<template>
    <div>
        <h2>Input</h2>
        <div>
            <h4>basic</h4>
            <rbt-input placeholder="请输入……" v-model="inputVal1"></rbt-input>
            <rbt-input placeholder="请输入……" v-model="inputVal1" size="small"></rbt-input>
            <rbt-input placeholder="请输入……" v-model="inputVal1" size="large"></rbt-input>
        </div>
        <div class="mt">
            <h4>prepend</h4>
            <rbt-input placeholder="请输入……">
                <template slot="prepend">http://</template>
            </rbt-input>
        </div>
        <div class="mt">
            <h4>append</h4>
            <rbt-input placeholder="请输入……">
                <template slot="append">.com</template>
            </rbt-input>
        </div>
        <div class="mt">
            <h4>prefix</h4>
            <rbt-input placeholder="请输入……">
                <template slot="prefix">
                    <rbt-icon type="error"></rbt-icon>
                </template>
            </rbt-input>
            <rbt-input placeholder="请输入……" size="small">
                <template slot="prefix">
                    <rbt-icon type="error"></rbt-icon>
                </template>
            </rbt-input>
            <rbt-input placeholder="请输入……" size="large">
                <template slot="prefix">
                    <rbt-icon type="error"></rbt-icon>
                </template>
            </rbt-input>
        </div>
        <div class="mt">
            <h4>suffix</h4>
            <rbt-input placeholder="请输入……">
                <template slot="suffix">
                    <rbt-icon type="error"></rbt-icon>
                </template>
            </rbt-input>
            <rbt-input placeholder="请输入……" size="small">
                <template slot="suffix">
                    <rbt-icon type="error"></rbt-icon>
                </template>
            </rbt-input>
            <rbt-input placeholder="请输入……" size="large">
                <template slot="suffix">
                    <rbt-icon type="error"></rbt-icon>
                </template>
            </rbt-input>
        </div>
        <div class="mt">
            <h4>suffix</h4>
            <rbt-input placeholder="请输入……">
                <template slot="suffix">
                    <rbt-icon type="error"></rbt-icon>
                </template>
            </rbt-input>
            <rbt-input placeholder="请输入……" size="small">
                <template slot="suffix">
                    <rbt-icon type="error"></rbt-icon>
                </template>
            </rbt-input>
            <rbt-input placeholder="请输入……" size="large">
                <template slot="suffix">
                    <rbt-icon type="error"></rbt-icon>
                </template>
            </rbt-input>
        </div>
        <div class="mt">
            <h4>disabled readonly</h4>
            <rbt-input placeholder="请输入……" disabled></rbt-input>
            <rbt-input placeholder="请输入……" readonly></rbt-input>
        </div>
        <div class="mt">
            <h4>clearable</h4>
            <rbt-input placeholder="请输入……" clearable v-model="clearVal"></rbt-input>
            <rbt-input placeholder="请输入……" clearable size="small"></rbt-input>
            <rbt-input placeholder="请输入……" clearable size="large"></rbt-input>
        </div>
        <div class="mt">
            <h4>event</h4>
            <rbt-tooltip content="这是input事件的tooltip" trigger="focus">
                <rbt-input placeholder="请输入……"></rbt-input>
            </rbt-tooltip>
        </div>
        <div class="mt">
            <h4>textarea</h4>
            <rbt-input placeholder="请输入……" textarea></rbt-input>
            <rbt-input placeholder="请输入……" textarea disabled></rbt-input>
            <rbt-input placeholder="请输入……" textarea resize></rbt-input>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputVal1: '',
            clearVal: '测试清空'
        };
    },
    watch: {
        inputVal1(cur) {
            console.log(cur);
        }
    }
};
</script>
