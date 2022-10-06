<template>
    <div class="wrapper">
        <span>{{ headline }}: {{ store[storeLabel] }}px</span>
        <input type="range" :min="min" :max="max" :step="step" v-model="store[`${storeLabel}`]" @input="updateSize"/>
    </div>
</template>

<script>
    import {useGeneralStore} from "@/stores/general.ts";

    export default {
        name: 'Range',
        props: {
            min: Number,
            max: Number,
            step: Number,
            headline: String,
            storeLabel: String
        },
        methods: {
          updateSize(e) {
              let element = document.querySelector('.preview-button');

              this.store.btnWidth = parseInt(element.getBoundingClientRect().width);
              this.store.btnHeight = parseInt(element.getBoundingClientRect().height);
          }
        },
        setup() {
            const store = useGeneralStore()

            return {
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/styles.scss";

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .wrapper:not(:last-of-type) {
        padding-bottom: 20px;
    }

    span {
        display: block;
        font-size: $font-size-18;
        color: $primary-light;
        width: 100%;
    }

    input {
        width: 250px;
        margin-top: 20px;
        cursor: pointer;
    }
</style>