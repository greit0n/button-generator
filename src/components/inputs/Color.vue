<template>
    <div class="wrapper">
        <span>{{ headline }}</span>
        <input type="color" v-model="store[`${storeHexColorLabel}`]"/>
        <div class="colors-wrapper">
            <span class="hex">{{ store[`${storeHexColorLabel}`] }}</span>
            <span class="rgb">{{ store[`${storeRgbColorLabel}`] }}</span>
        </div>
    </div>
</template>

<script>
    import {useGeneralStore} from "@/stores/general.ts";

    export default {
        name: 'Color',
        props: {
            headline: String,
            storeHexColorLabel: String,
            storeRgbColorLabel: String
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
        position: relative;
        border-bottom: 1px solid $gray-300;
        height: 70px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .wrapper:not(:last-of-type) {
        margin-bottom: 20px;
    }

    .colors-wrapper {
        display: flex;

        span:first-of-type {
            border-right: 1px solid $gray-300;
        }

        .rgb {
            width: 170px;
            margin: 10px 10px 10px 0;
            color: $secondary-dark;

        }

        .hex {
            width: 80px;
            margin: 10px;
            color: $secondary-dark;
        }
    }

    span {
        display: block;
        font-size: $font-size;
        color: $primary-light;
        width: 100%;
    }

    input[type="color"] {
        -webkit-appearance: none;
        border: none;
        width: 50px;
        height: 50px;
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
        border: none;
    }
</style>