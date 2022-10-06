<template>
    <button class="code-switch">Code</button>
    <accordion class="controls-wrapper">
        <accordion-item>
            <template v-slot:accordion-trigger>
                General
            </template>
            <template v-slot:accordion-icon>
                <IconCogs />
            </template>
            <template v-slot:accordion-content>
                <TabGeneral />
            </template>
        </accordion-item>

        <accordion-item>
            <template v-slot:accordion-trigger>
                Text
            </template>
            <template v-slot:accordion-icon>
                <IconText />
            </template>
            <template v-slot:accordion-content>
                <TabText />
            </template>
        </accordion-item>

        <accordion-item>
            <template v-slot:accordion-trigger>
                Size
            </template>
            <template v-slot:accordion-icon>
                <IconResize />
            </template>
            <template v-slot:accordion-content>
                <TabSize />
            </template>
        </accordion-item>

        <accordion-item>
            <template v-slot:accordion-trigger>
                Border
            </template>
            <template v-slot:accordion-icon>
                <IconBorderRadius />
            </template>
            <template v-slot:accordion-content>
                <TabBorder />
            </template>
        </accordion-item>

        <accordion-item>
            <template v-slot:accordion-trigger>
                Shadow
            </template>
            <template v-slot:accordion-icon>
                <IconBoxShadow />
            </template>
            <template v-slot:accordion-content>
                <TabShadow />
            </template>
        </accordion-item>
    </accordion>
</template>

<script>
    import TabGeneral from "./tabs/TabGeneral.vue";
    import TabText from "./tabs/TabText.vue";
    import Accordion from "./accordion.vue";
    import AccordionItem from "./accordion-item.vue";
    import TabBorder from "@/components/tabs/TabBorder.vue";
    import TabSize from "@/components/tabs/TabSize.vue";
    import TabShadow from "@/components/tabs/TabShadow.vue";

    import IconCogs from "@/components/icons/IconCogs.vue";
    import IconBorderRadius from "@/components/icons/IconBorderRadius.vue";
    import IconBoxShadow from "@/components/icons/IconBoxShadow.vue";
    import IconResize from "@/components/icons/IconResize.vue";
    import IconText from "@/components/icons/IconText.vue";

    export default {
        name: 'SettingsTabs',
        components: {
            IconBoxShadow,
            IconBorderRadius,
            TabBorder,
            Accordion,
            AccordionItem,
            TabGeneral,
            TabText,
            TabSize,
            TabShadow,
            IconCogs,
            IconResize,
            IconText
        }
    }
</script>

<style lang="scss">
    @import "@/assets/scss/styles.scss";

    .controls-wrapper {
        width: 350px;
        min-height: 100vh;
        border-left: 1px solid $primary;
        position: absolute;
        right: 0;
        overflow-y: auto;
        max-height: 100vh;
        background-color: white;
    }

    .content-wrapper {
        padding: 20px 20px 30px 20px;
    }

    .code-switch {
        position: fixed;
        right: 297px;
        height: 40px;
        width: 150px;
        top: 103px;
        transform: rotate(-90deg);
        background-color: $secondary-dark;
        color: $text-primary;
        font-size: $font-size-24;
        border: 0;
        outline: 0;
        cursor: pointer;
    }
</style>