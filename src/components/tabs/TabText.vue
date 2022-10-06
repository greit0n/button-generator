<template>
    <Color headline="Color" store-hex-color-label="fontColorHex" store-rgb-color-label="fontColorRgb"/>
    <Number headline="Size" placeHolder="Enter your size here ..." store-label="fontSize"/>
    <Radio :options="radioOptions" name="textSize" store-label="fontSizeType"/>
    <Dropdown headline="Family" :options="familyOptions" store-label="fontFamily"/>
    <Checkbox :options="checkBoxOptions"/>
    <Switch store-label="showTextShadow" label="Shadow"/>
    <div v-if="store.showTextShadow">
        <Range headline="Snift right"
               min="-350"
               max="350"
               store-label="textShadowShiftRight"
        />
        <Range headline="Snift down"
               min="-350"
               max="350"
               store-label="textShadowShiftDown"
        />
        <Range headline="Spread"
               min="-350"
               max="350"
               store-label="textShadowSpread"
        />
        <Range headline="Blur"
               min="-350"
               max="350"
               store-label="textShadowBlur"
        />
        <Range headline="Opacity"
               min="0"
               max="1"
               step="0.01"
               store-label="textShadowOpacity"
        />
        <Color headline="Color"
               store-hex-color-label="textShadowColorHex"
               store-rgb-color-label="textShadowColorRgb"
        />
    </div>
</template>

<script>
    import Text from '@/components/inputs/Text.vue';
    import Color from '@/components/inputs/Color.vue';
    import Number from '@/components/inputs/Number.vue';
    import Radio from '@/components/inputs/Radio.vue';
    import Dropdown from '@/components/inputs/Dropdown.vue';
    import Checkbox from '@/components/inputs/Checkbox.vue';
    import Switch from '@/components/inputs/Switch.vue';
    import Range from '@/components/inputs/Range.vue';
    import {useGeneralStore} from "@/stores/general.ts";

    export default {
        name: 'TabText',
        data: () => ({
            radioOptions: ['px', 'rem', 'em'],
            familyOptions: ['Arial', 'Montserrat'],
            checkBoxOptions: ['bold', 'italic']
        }),
        components: {
            Text,
            Color,
            Number,
            Radio,
            Dropdown,
            Checkbox,
            Switch,
            Range,
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