<template>
    <div class="wrapper">
        <div v-for="(value, key) in options" :key="key">
            <input :id="`radio-${key}`" class="radio-custom" type="radio" :name="name" :checked="key === 0" @change="store[`${storeLabel}`] = value">
            <label class="radio-custom-label" :for="`radio-${key}`"><span></span> {{ value }}</label>
        </div>
    </div>
</template>

<script>
    import {useGeneralStore} from "@/stores/general.ts";

    export default {
        name: 'Radio',
        props: {
            collection: Object,
            name: String,
            options: {
                type: Array,
                selected: Boolean
            },
            storeLabel: String
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
        justify-content: space-evenly;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid $gray-300;
    }

    .wrapper:not(:last-of-type) {
        margin-bottom: 20px;
    }

    .radio-custom-label {
    }

    input[type="radio"] {
        display: none;
    }
    label {
        cursor: pointer;
        color: #555;
        font-size: $font-size-18;
        text-transform: uppercase;
    }

    input[type="radio"] + label span {
        display: inline-block;
        vertical-align: middle;
        width: 24px;
        height: 24px;
        background: url('@/components/icons/radiobox-blank.svg') 0px center no-repeat;
    }

    input[type="radio"]:checked + label span {
        background: url('@/components/icons/radiobox-marked.svg') 0px center no-repeat;
    }
</style>