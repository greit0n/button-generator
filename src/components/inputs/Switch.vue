<template>
    <div class="wrapper">
        <label :for="`switch-${storeLabel}`">{{ label }}</label>
        <div class="button-cover">
            <div class="button">
                <input :id="`switch-${storeLabel}`" class="checkbox" type="checkbox" v-model="store[`${storeLabel}`]">
                <div class="knobs"></div>
                <div class="layer"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {useGeneralStore} from "@/stores/general.ts";

export default {
    name: 'Switch',
    props: {
        storeLabel: String,
        label: String,
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
        margin-top: 20px;
        position: relative;
    }

    .wrapper:not(:last-of-type) {
        margin-bottom: 20px;
    }

    .layer
    {
        width: 100%;
        background-color: #fcebeb;
        transition: 0.3s ease all;
        z-index: 1;
    }

    label {
        color: #ff2d95;
        text-transform: uppercase;
        font-weight: 600;
    }


    /* Button 1 */
    .button .knobs:before
    {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 20px;
        height: 10px;
        color: #fff;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        line-height: 1;
        padding: 9px 4px;
        background-color: #C55526;
        border-radius: 50%;
        transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
    }

    .button .checkbox:checked + .knobs:before
    {
        content: '';
        left: 42px;
        background-color: #03A9F4;
    }

    .button .checkbox:checked ~ .layer
    {
        background-color: #ebf7fc;
    }

    .button .knobs, .button .knobs:before, .button .layer
    {
        transition: 0.3s ease all;
    }

    .knobs
    {
        z-index: 2;
    }

    .button-cover, .knobs, .layer
    {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .button
    {
        position: relative;
        top: 50%;
        width: 74px;
        height: 36px;
        margin: -20px auto 0 auto;
        overflow: hidden;
        border-radius: 100px;
    }

    .checkbox
    {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        cursor: pointer;
        z-index: 3;
    }
</style>