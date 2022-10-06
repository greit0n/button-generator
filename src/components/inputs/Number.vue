<template>
    <div class="wrapper">
        <span>{{ headline }}</span>
        <input type="number" :placeholder="placeHolder" v-model="store[`${storeLabel}`]" min="0"/>
    </div>
</template>

<script>
    import {useGeneralStore} from "@/stores/general.ts";

    export default {
        name: 'Number',
        props: {
            headline: String,
            placeHolder: String,
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

    span {
        display: block;
        font-size: $font-size-18;
        color: $primary-light;
        width: 100%;
    }

    input {
        border: none;
        outline: none;
        border-bottom: 1px solid $gray-300;
        padding: 10px 10px;
        font-size: $font-size;
        color: $primary-light;
        width: 100%;
        box-sizing: border-box;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        &::placeholder {
            color: $gray-300;
        }

        &:focus {
            border-bottom: 1px solid $gray-400;
        }
    }
</style>