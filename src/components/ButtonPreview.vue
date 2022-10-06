<template>
    <div class="button-preview-wrapper" :style="previewStyleObj">
        <div class="preview-button-axes">
            <span class="axe-width">{{ store.btnWidth }}px</span>
            <span class="axe-height">{{ store.btnHeight }}px</span>
            <button class="preview-button" :style="styleObj">{{ store.btnText }}</button>
        </div>
    </div>
</template>

<script>
    import {useGeneralStore} from "@/stores/general.ts";

    export default {
        name: 'ButtonPreview',
        computed: {
            previewStyleObj() {
                let store = this.store;
                let obj = [];

                obj.push({backgroundColor: store.containerBgColorHex});

                return obj;
            },
            styleObj() {
                let store = this.store;
                let obj = [];
                let btn = document.querySelector('.preview-button');

                obj.push({color: store.fontColorHex});
                obj.push({fontSize: store.fontSize + store.fontSizeType});
                obj.push({fontFamily: store.fontFamily});
                obj.push({textAlign: store.fontAlign});
                obj.push({padding: `${store.sizeVertical}px ${store.sizeHorizontal}px`});
                obj.push({backgroundColor: store.btnBgColorHex});
                obj.push({fontWeight: store.fontBold ? 700 : 400});
                obj.push({fontStyle: store.fontItalic ? 'italic' : 'normal'});

                obj.push({
                    boxShadow:
                        `${store.boxShadowShiftRight}px
                        ${store.boxShadowShiftDown}px
                        ${store.boxShadowBlur}px
                        ${store.boxShadowSpread}px
                        ${store.boxShadowColorRgb}`
                });

                if (store.fontSize === 0) {
                    store.fontSize = null;
                }

                // Border size
                if (store.borderSize === 0
                    || store.borderSize === null
                    || store.borderSize === '') {
                    store.borderSize = null;
                }

                // Single border sizes
                if (store.borderTopSize === 0) {
                    store.borderTopSize = null;
                }

                if (store.borderRightSize === 0) {
                    store.borderRightSize = null;
                }

                if (store.borderBottomSize === 0) {
                    store.borderBottomSize = null;
                }

                if (store.borderLeftSize === 0) {
                    store.borderLeftSize = null;
                }

                if (store.borderTopSize > 0) {
                    obj.push({borderTop: `${store.borderTopSize}px ${store.borderTopType} ${store.borderTopColorHex}`});
                } else {
                    if (store.borderSize > 0 && store.borderSize !== null && store.borderSize !== '') {
                        obj.push({borderTop: `${store.borderSize}px ${store.borderType} ${store.borderColorHex}`});
                    }
                }

                if (store.borderRightSize > 0) {
                    obj.push({borderRight: `${store.borderRightSize}px ${store.borderRightType} ${store.borderRightColorHex}`});
                } else {
                    if (store.borderSize > 0 && store.borderSize !== null && store.borderSize !== '') {
                        obj.push({borderRight: `${store.borderSize}px ${store.borderType} ${store.borderColorHex}`});
                    }
                }

                if (store.borderBottomSize > 0) {
                    obj.push({borderBottom: `${store.borderBottomSize}px ${store.borderBottomType} ${store.borderBottomColorHex}`});
                } else {
                    if (store.borderSize > 0 && store.borderSize !== null && store.borderSize !== '') {
                        obj.push({borderBottom: `${store.borderSize}px ${store.borderType} ${store.borderColorHex}`});
                    }
                }

                if (store.borderLeftSize > 0) {
                    obj.push({borderLeft: `${store.borderLeftSize}px ${store.borderLeftType} ${store.borderLeftColorHex}`});
                } else {
                    if (store.borderSize > 0 && store.borderSize !== null && store.borderSize !== '') {
                        obj.push({borderLeft: `${store.borderSize}px ${store.borderType} ${store.borderColorHex}`});
                    }
                }

                //Radius
                if (store.borderTopLeftRadius === null || store.borderTopLeftRadius === '') {
                    store.borderTopLeftRadius = 0;
                }

                if (store.borderTopRightRadius === null || store.borderTopRightRadius === '') {
                    store.borderTopRightRadius = 0;
                }

                if (store.borderBottomRightRadius === null || store.borderBottomRightRadius === '') {
                    store.borderBottomRightRadius = 0;
                }

                if (store.borderBottomLeftRadius === null || store.borderBottomLeftRadius === '') {
                    store.borderBottomLeftRadius = 0;
                }

                if (store.borderTopLeftRadius > 0) {
                    obj.push({borderTopLeftRadius: `${store.borderTopLeftRadius}px`});
                } else {
                    if (store.borderRadius > 0 && store.borderRadius !== null && store.borderRadius !== '') {
                        obj.push({borderTopLeftRadius: `${store.borderRadius}px`});
                    }
                }

                if (store.borderTopRightRadius > 0) {
                    obj.push({borderTopRightRadius: `${store.borderTopRightRadius}px`});
                } else {
                    if (store.borderRadius > 0 && store.borderRadius !== null && store.borderRadius !== '') {
                        obj.push({borderTopRightRadius: `${store.borderRadius}px`});
                    }
                }

                if (store.borderBottomRightRadius > 0) {
                    obj.push({borderBottomRightRadius: `${store.borderBottomRightRadius}px`});
                } else {
                    if (store.borderRadius > 0 && store.borderRadius !== null && store.borderRadius !== '') {
                        obj.push({borderBottomRightRadius: `${store.borderRadius}px`});
                    }
                }

                if (store.borderBottomLeftRadius > 0) {
                    obj.push({borderBottomLeftRadius: `${store.borderBottomLeftRadius}px`});
                } else {
                    if (store.borderRadius > 0 && store.borderRadius !== null && store.borderRadius !== '') {
                        obj.push({borderBottomLeftRadius: `${store.borderRadius}px`});
                    }
                }

                return obj;
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

    .button-preview-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: calc(100% - 350px);
        width: -webkit-calc(100% - 350px);
    }

    .preview-button {
        border: 0;
        outline: 0;

        &-axes {
            position: relative;

            .axe-width {
                position: absolute;
                bottom: -110px;
                font-size: 24px;
                margin: 0 auto;
                text-align: center;
                left: 50%;
                transform: translateX(-50%);
                color: #FFFFFF;
                text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px, 2px -3px 2px rgba(255,57,201,0);            }

            .axe-height {
                position: absolute;
                left: -125px;
                font-size: 24px;
                height: 50px;
                margin: 0 auto;
                text-align: center;
                transform: rotate(-90deg) translateX(30%);
                top: 50%;
                color: #FFFFFF;
                text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px;
            }

            &::after {
                content: "";
                border: 1px dashed $secondary-light;
                height: 100%;
                position: absolute;
                left: -70px;
            }

            &::before {
                content: "";
                border: 1px dashed $secondary-light;
                width: 100%;
                position: absolute;
                bottom: -70px;
                right: 0;
            }
        }
    }
</style>