<template>
    <Text headline="Class name" placeHolder="Enter your class name here ..." store-label="className"/>
    <Text headline="Text" placeHolder="Enter your text here ..." store-label="btnText"/>
    <Color headline="Button background" store-hex-color-label="btnBgColorHex" store-rgb-color-label="btnBgColorRgb"/>
    <Color headline="Container background" store-hex-color-label="containerBgColorHex" store-rgb-color-label="containerBgColorRgb"/>
</template>

<script>
    import Text from '@/components/inputs/Text.vue';
    import Color from '@/components/inputs/Color.vue';

    export default {
        name: 'TabGeneral',
        components: {
            Text,
            Color
        },
    }
</script>

<style lang="scss" scoped>

</style>