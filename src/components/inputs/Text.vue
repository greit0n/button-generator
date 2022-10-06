<template>
    <div class="wrapper">
        <span>{{ headline }}</span>
        <input type="text" :placeholder="placeHolder"
               v-model="store[`${storeLabel}`]"
               :key="storeLabel"
        />
    </div>
</template>

<script>
    import { useGeneralStore } from '@/stores/general.ts';

    export default {
        name: 'Text',
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

    .wrapper:not(:last-of-type) {
        margin-bottom: 20px;
    }

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