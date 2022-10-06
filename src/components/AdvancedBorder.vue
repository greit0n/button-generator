<template>
    <div class="wrapper">
        <div class="border-selection">
            <div class="output">
                <button class="btn btn-top"
                        @click="setSelectedConfig"
                        data-selected-border="borderTop"
                        :class="selectedConfig === 'borderTop' ? 'btn-top--selected' : ''"
                >
                    edit
                </button>
                <button class="btn btn-right"
                        @click="setSelectedConfig"
                        data-selected-border="borderRight"
                        :class="selectedConfig === 'borderRight' ? 'btn-right--selected' : ''"
                >
                    edit
                </button>
                <button class="btn btn-bottom"
                        @click="setSelectedConfig"
                        data-selected-border="borderBottom"
                        :class="selectedConfig === 'borderBottom' ? 'btn-bottom--selected' : ''"
                >
                    edit
                </button>
                <button class="btn btn-left"
                        @click="setSelectedConfig"
                        data-selected-border="borderLeft"
                        :class="selectedConfig === 'borderLeft' ? 'btn-left--selected' : ''"
                >
                    edit
                </button>

                <input type="number" class="radius radius-top-left" min="0" max="100" v-model="store.borderTopLeftRadius"/>
                <input type="number" class="radius radius-top-right" min="0" max="100" v-model="store.borderTopRightRadius">
                <input type="number" class="radius radius-bottom-right" min="0" max="100" v-model="store.borderBottomRightRadius">
                <input type="number" class="radius radius-bottom-left" min="0" max="100" v-model="store.borderBottomLeftRadius">
            </div>
        </div>
        <div class="border-config">
            <span> {{ selectedConfig }}</span>
            <div v-for="border in borders"
                 :key="border"
                 class="config"
                 :class="[border, selectedConfig === border ? 'selected' : '']">
                <Number headline="Size" placeHolder="Enter your size here ..." :store-label="`${border}Size`"/>
                <Dropdown headline="Type" :options="borderTypeOptions" :store-label="`${border}Type`"/>
                <Color headline="Color" :store-hex-color-label="`${border}ColorHex`" :store-rgb-color-label="`${border}ColorRgb`"/>
            </div>
        </div>
    </div>
</template>

<script>
import {useGeneralStore} from "@/stores/general.ts";
import Color from '@/components/inputs/Color.vue';
import Number from '@/components/inputs/Number.vue';
import Dropdown from "@/components/inputs/Dropdown.vue";

export default {
    name: 'AdvancedBorder',
    data: () => ({
        borderTypeOptions: ['solid', 'dotted', 'dashed'],
        borders: ['borderTop', 'borderRight', 'borderBottom', 'borderLeft'],
        selectedConfig: 'borderTop'
    }),
    components: {
        Dropdown,
        Color,
        Number
    },
    methods: {
        setSelectedConfig(e) {
            this.selectedConfig = e.target.getAttribute('data-selected-border');
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

    .config {
        display: none;
    }

    .border-selection {
        display: flex;
        justify-content: center;
    }

    .radius {
        position: absolute;
        border: none;
        outline: none;
        width: 30px;
        height: 30px;
        text-align: center;
        font-size: $font-size-18;

        &-top-left {
            left: 47px;
            top: 24px;
        }

        &-top-right {
            left: 167px;
            top: 24px;
        }

        &-bottom-right {
            left: 167px;
            top: 142px;
        }

        &-bottom-left {
            left: 47px;
            top: 142px;
        }
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    .btn {
        position: absolute;
        background: none;
        border: none;
        outline: none;
        font-size: $font-size;
        text-transform: uppercase;
        cursor: pointer;

        &-top {
            border-bottom: 3px solid $primary-light;
            width: 85px;
            height: 40px;
            left: 50%;
            transform: translateX(-50%);
            font-weight: 700;

            &--selected {
                border-bottom: 3px solid $secondary-light;
                color: $secondary-dark;
            }
        }

        &-left {
            border-right: 3px solid $primary-light;
            width: 60px;
            height: 85px;
            top: 50%;
            transform: translateY(-50%);
            font-weight: 700;

            &--selected {
                border-right: 3px solid $secondary-light;
                color: $secondary-dark;
            }
        }

        &-bottom {
            border-top: 3px solid $primary-light;
            width: 85px;
            height: 40px;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            font-weight: 700;

            &--selected {
                border-top: 3px solid $secondary-light;
                color: $secondary-dark;
            }
        }

        &-right {
            border-left: 3px solid $primary-light;
            width: 60px;
            height: 85px;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            font-weight: 700;

            &--selected {
                border-left: 3px solid $secondary-light;
                color: $secondary-dark;
            }
        }
    }

    .output {
        width: 250px;
        height: 200px;
        position: relative;
        margin-bottom: 20px;
    }

    .selected {
        display: block;
    }

    .border-config {
        span {
            display: flex;
            justify-content: center;
            font-size: $font-size-18;
            color: $secondary-dark;
            width: 100%;
            text-decoration: underline;
        }
    }
</style>