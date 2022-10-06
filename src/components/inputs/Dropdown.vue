<template>
    <div class="wrapper">
        <span>{{ headline }}</span>
        <select name="" id="" @change="(e)=>{ store[`${storeLabel}`] = e.target.value }">
            <option v-for="(value, key) in options" :key="key">
                {{ value }}
            </option>
        </select>
    </div>
</template>

<script>
    import {useGeneralStore} from "@/stores/general.ts";

    export default {
        name: 'Dropdown',
        props: {
            headline: String,
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

    .wrapper:not(:first-of-type) {
        margin-bottom: 20px;
    }

    .wrapper {
        margin-top: 20px;
    }

    span {
        display: block;
        font-size: $font-size-18;
        color: $primary-light;
        width: 100%;
    }

    select {
        border: none;
        outline: none;
        border-bottom: 1px solid $gray-300;
        padding: 10px 10px;
        font-size: $font-size;
        color: $secondary-dark;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        &:focus {
            border-bottom: 1px solid $gray-400;
        }
    }
</style>