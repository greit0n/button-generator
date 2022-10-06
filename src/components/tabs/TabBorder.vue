<template>
    <Number headline="Size" placeHolder="Enter your size here ..." store-label="borderSize"/>
    <Dropdown headline="Type" :options="borderTypeOptions" store-label="borderType"/>
    <Color headline="Color" store-hex-color-label="borderColorHex" store-rgb-color-label="borderColorRgb"/>
    <Number headline="Radius" placeHolder="Enter your radius here ..." store-label="borderRadius"/>
    <Switch store-label="showAdvancedBorder" label="Advanced"/>
    <div v-if="store.showAdvancedBorder">
        <AdvancedBorder />
    </div>
</template>

<script>
    import Text from '@/components/inputs/Text.vue';
    import Color from '@/components/inputs/Color.vue';
    import Number from '@/components/inputs/Number.vue';
    import Dropdown from '@/components/inputs/Dropdown.vue';
    import AdvancedBorder from '@/components/AdvancedBorder.vue';
    import {useGeneralStore} from "@/stores/general";
    import Switch from "@/components/inputs/Switch.vue";

    export default {
        name: 'TabBorder',
        data: () => ({
            borderTypeOptions: ['solid', 'dotted', 'dashed']
        }),
        components: {
            Text,
            Color,
            Number,
            Dropdown,
            AdvancedBorder,
            Switch
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

</style>