<template>
    <li class="accordion__item">
        <div
            class="accordion__trigger"
            :class="{ accordion__trigger_active: visible }"
            @click="open"
        >
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <slot name="accordion-trigger"></slot>
            <span class="icon"><slot name="accordion-icon"></slot></span>
        </div>

        <transition
            name="accordion"
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
        >
            <div class="accordion__content" v-show="visible">
                <ul>
                    <!-- This slot will handle all the content that is passed to the accordion -->
                    <div class="content-wrapper">
                        <slot name="accordion-content"></slot>
                    </div>
                </ul>
            </div>
        </transition>
    </li>
</template>

<script>
import {useGeneralStore} from "@/stores/general";

export default {
    props: {},
    inject: ["Accordion"],
    data() {
        return {
            index: null,
        };
    },
    computed: {
        visible() {
            return this.index == this.Accordion.active;
        },
    },
    methods: {
        open() {
            if (this.visible) {
                this.Accordion.active = null;
            } else {
                this.Accordion.active = this.index;
            }
        },
        beforeEnter: function (el) {
            el.style.height = "0";
        },
        enter: function (el) {
            el.style.height = "auto";
        },
        beforeLeave: function (el) {
            el.style.height = "auto";
        },
        leave: function (el) {
            el.style.height = "0";
        },
    },
    watch: {
        'store.showTextShadow'(newValue) {

        }
    },
    created() {
        this.index = this.Accordion.count++;
    },
    setup() {
        const store = useGeneralStore()

        return {
            store,
        }
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";

ul {
    padding: 0;
}

.content-wrapper {
    padding: 20px 20px 30px 20px;
}

.accordion__item {
    border-bottom: 1px solid #ebebeb;
    position: relative;
}

.accordion__trigger {
    background-color: $primary;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    font-size: $font-size-24;
    color: $text-primary;
    cursor: pointer;

    .icon {
        position: absolute;
        right: 15px;
    }
}

.accordion__content {
    transition: height 1s ease, opacity 1s ease;
    overflow: hidden;
}

.accordion-leave-from,
.accordion-enter-to {
    transition: height 1s ease, opacity 1s ease;
    overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
    height: 0 !important;
    opacity: 0;
}
</style>
