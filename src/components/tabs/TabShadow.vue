<template>
    <Range headline="Shift right"
           min="-350"
           max="350"
           store-label="boxShadowShiftRight"
    />
    <Range headline="Shift down"
           min="-350"
           max="350"
           store-label="boxShadowShiftDown"
    />
    <Range headline="Spread"
           min="-350"
           max="350"
           store-label="boxShadowSpread"
    />
    <Range headline="Blur"
           min="-350"
           max="350"
           store-label="boxShadowBlur"
    />
    <Range headline="Opacity"
           min="0"
           max="1"
           step="0.01"
           store-label="boxShadowOpacity"
    />
    <Color headline="Color"
           store-hex-color-label="boxShadowColorHex"
           store-rgb-color-label="boxShadowColorRgb"
    />
</template>

<script>
    import Range from '@/components/inputs/Range.vue';
    import Color from '@/components/inputs/Color.vue';

    export default {
        name: 'TabShadow',
        data: () => ({
        }),
        components: {
            Range,
            Color
        }
    }
</script>

<style lang="scss" scoped>

</style>