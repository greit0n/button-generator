<template>
    <div class="wrapper">
        <div v-for="(value, key) in options" :key="key" >
            <input :id="`checkbox-${key}`" class="checkbox-custom" type="checkbox" v-model="store[`font${capitalize(value)}`]">
            <label class="checkbox-custom-label" :for="`checkbox-${key}`"><span></span> {{ value }}</label>
        </div>
    </div>
</template>

<script>
import {useGeneralStore} from "@/stores/general.ts";

export default {
    name: 'Checkbox',
    props: {
        text: String,
        collection: Object,
        name: String,
        options: {
            type: Array,
            selected: Boolean
        }
    },
    methods: {
        capitalize(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
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
        justify-content: space-evenly;
        margin-top: 20px;
    }

    .wrapper:not(:last-of-type) {
        margin-bottom: 20px;
    }

    .checkbox-custom-label {
    }

    input[type="checkbox"] {
        display: none;
    }
    label {
        cursor: pointer;
        color: #555;
        font-size: $font-size-18;
    }

    input[type="checkbox"] + label span {
        display: inline-block;
        vertical-align: middle;
        width: 24px;
        height: 24px;
        background: url('@/components/icons/checkbox-blank-outline.svg') 0px center no-repeat;
    }

    input[type="checkbox"]:checked + label span {
        background: url('@/components/icons/checkbox-intermediate.svg') 0px center no-repeat;
    }
</style>