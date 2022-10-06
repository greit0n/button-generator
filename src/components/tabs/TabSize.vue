<template>
    <Range headline="Horizontal size"
           min="0"
           max="350"
           step="1"
           store-label="sizeHorizontal" />
    <Range headline="Vertical size"
           min="0"
           max="350"
           step="1"
           store-label="sizeVertical"/>
</template>

<script>
    import Range from '@/components/inputs/Range.vue';

    export default {
        name: 'TabSize',
        data: () => ({
        }),
        components: {
            Range
        }
    }
</script>

<style lang="scss" scoped>

</style>