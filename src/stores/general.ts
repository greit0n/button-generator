import { defineStore } from 'pinia'
import hexToRgba from 'hex-to-rgba';

export const useGeneralStore = defineStore('general', {
    state: () => ({
        containerBgColorHex: '#2e4e60',

        btnText: 'Lorem Ipsum',
        className: '',
        btnBgColorHex: '#263238',
        btnWidth: 340,
        btnHeight: 127,

        fontColorHex: '#ffffff',
        fontSize: 24,
        fontSizeType: 'px',
        fontFamily: 'Arial',
        fontBold: false,
        fontItalic: false,

        borderSize: null,
        borderType: 'solid',
        borderColorHex: '#263238',
        borderRadius: 0,

        borderTopSize: null,
        borderTopType: 'solid',
        borderTopColorHex: '#263238',

        borderRightSize: null,
        borderRightType: 'solid',
        borderRightColorHex: '#263238',

        borderBottomSize: null,
        borderBottomType: 'solid',
        borderBottomColorHex: '#263238',

        borderLeftSize: null,
        borderLeftType: 'solid',
        borderLeftColorHex: '#263238',

        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,

        sizeHorizontal: 100,
        sizeVertical: 50,

        boxShadowShiftRight: 6,
        boxShadowShiftDown: 40,
        boxShadowSpread: -20,
        boxShadowBlur: 30,
        boxShadowOpacity: 0.8,
        boxShadowColorHex: '#000000',

        textShadowShiftRight: 6,
        textShadowShiftDown: 40,
        textShadowSpread: -20,
        textShadowBlur: 30,
        textShadowOpacity: 0.8,
        textShadowColorHex: '#ffffff',

        showTextShadow: false,
        showAdvancedBorder: false,
    }),
    getters: {
        fontColorRgb: (state) => hexToRgba(state.fontColorHex),
        btnBgColorRgb: (state) => hexToRgba(state.btnBgColorHex),
        borderColorRgb: (state) => hexToRgba(state.borderColorHex),
        borderTopColorRgb: (state) => hexToRgba(state.borderTopColorHex),
        borderRightColorRgb: (state) => hexToRgba(state.borderRightColorHex),
        borderBottomColorRgb: (state) => hexToRgba(state.borderBottomColorHex),
        borderLeftColorRgb: (state) => hexToRgba(state.borderLeftColorHex),
        boxShadowColorRgb: (state) => hexToRgba(state.boxShadowColorHex, state.boxShadowOpacity),
        textShadowColorRgb: (state) => hexToRgba(state.textShadowColorHex, state.textShadowOpacity),
        containerBgColorRgb: (state) => hexToRgba(state.containerBgColorHex),
    }
})