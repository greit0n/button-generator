<template>
    <div class="container">
        <ButtonPreview />
        <SettingsTabs />
    </div>
</template>

<script>
    import Text from './inputs/Text.vue';
    import SettingsTabs from './SettingsTabs.vue';
    import ButtonPreview from './ButtonPreview.vue';

    export default {
        name: 'ButtonGenerator',
        components: {
            Text,
            SettingsTabs,
            ButtonPreview
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/styles.scss";

    .container {
        display: flex;
    }
</style>