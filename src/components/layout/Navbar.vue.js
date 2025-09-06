import { ref, computed } from 'vue';
import { toggleTheme } from '@/plugins/theme';
defineOptions({ name: 'AppNavbar' });
const open = ref(false);
const toggle = () => (open.value = !open.value);
const close = () => (open.value = false);
const isDark = computed(() => document.documentElement.classList.contains('dark'));
const onToggleTheme = () => {
    toggleTheme();
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({
    ...{ class: "fixed top-0 z-50 w-full bg-white/80 dark:bg-zinc-950/70 backdrop-blur border-b border-zinc-200/60 dark:border-zinc-800" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container flex h-16 items-center justify-between" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/",
    ...{ class: "flex items-center gap-2 font-extrabold text-xl" },
}));
const __VLS_2 = __VLS_1({
    to: "/",
    ...{ class: "flex items-center gap-2 font-extrabold text-xl" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "text-zinc-900 dark:text-white" },
});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
    ...{ class: "hidden md:flex items-center gap-6 font-medium" },
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
const __VLS_5 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ class: "hover:text-brand-600" },
    to: "/",
}));
const __VLS_7 = __VLS_6({
    ...{ class: "hover:text-brand-600" },
    to: "/",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_9 } = __VLS_8.slots;
var __VLS_8;
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
const __VLS_10 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    ...{ class: "hover:text-brand-600" },
    to: "/about",
}));
const __VLS_12 = __VLS_11({
    ...{ class: "hover:text-brand-600" },
    to: "/about",
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const { default: __VLS_14 } = __VLS_13.slots;
var __VLS_13;
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
const __VLS_15 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    ...{ class: "hover:text-brand-600" },
    to: "/projects",
}));
const __VLS_17 = __VLS_16({
    ...{ class: "hover:text-brand-600" },
    to: "/projects",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const { default: __VLS_19 } = __VLS_18.slots;
var __VLS_18;
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
const __VLS_20 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    ...{ class: "hover:text-brand-600" },
    to: "/skills",
}));
const __VLS_22 = __VLS_21({
    ...{ class: "hover:text-brand-600" },
    to: "/skills",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const { default: __VLS_24 } = __VLS_23.slots;
var __VLS_23;
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
const __VLS_25 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    ...{ class: "hover:text-brand-600" },
    to: "/contact",
}));
const __VLS_27 = __VLS_26({
    ...{ class: "hover:text-brand-600" },
    to: "/contact",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
const { default: __VLS_29 } = __VLS_28.slots;
var __VLS_28;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex items-center gap-2" },
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.onToggleTheme) },
    'aria-label': "Theme",
    ...{ class: "p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" },
});
// @ts-ignore
[onToggleTheme,];
if (__VLS_ctx.isDark) {
    // @ts-ignore
    [isDark,];
    __VLS_asFunctionalElement(__VLS_elements.svg, __VLS_elements.svg)({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        ...{ class: "h-5 w-5 fill-current" },
    });
    __VLS_asFunctionalElement(__VLS_elements.path)({
        d: "M21.64 13a1 1 0 0 0-1.05-.14A8 8 0 0 1 11.11 4.4a1 1 0 0 0-1.25-1.25A10 10 0 1 0 22 14.69a1 1 0 0 0-.36-1.69Z",
    });
}
else {
    __VLS_asFunctionalElement(__VLS_elements.svg, __VLS_elements.svg)({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        ...{ class: "h-5 w-5 fill-current" },
    });
    __VLS_asFunctionalElement(__VLS_elements.path)({
        d: "M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.45 14.32l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM12 4V1h-1v3h1zm0 19v-3h-1v3h1zm8-8h3v-1h-3v1zM1 12H4v-1H1v1zm15.24-7.16l1.42-1.42 1.79 1.8-1.41 1.41-1.8-1.79zM4.22 19.78l1.41 1.41 1.8-1.79-1.42-1.42-1.79 1.8zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z",
    });
}
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.toggle) },
    ...{ class: "md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" },
    'aria-label': "Menú",
});
// @ts-ignore
[toggle,];
if (!__VLS_ctx.open) {
    // @ts-ignore
    [open,];
    __VLS_asFunctionalElement(__VLS_elements.svg, __VLS_elements.svg)({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        ...{ class: "h-6 w-6" },
    });
    __VLS_asFunctionalElement(__VLS_elements.path)({
        stroke: "currentColor",
        'stroke-linecap': "round",
        'stroke-width': "2",
        d: "M4 6h16M4 12h16M4 18h16",
    });
}
else {
    __VLS_asFunctionalElement(__VLS_elements.svg, __VLS_elements.svg)({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        ...{ class: "h-6 w-6" },
    });
    __VLS_asFunctionalElement(__VLS_elements.path)({
        stroke: "currentColor",
        'stroke-linecap': "round",
        'stroke-width': "2",
        d: "M6 18L18 6M6 6l12 12",
    });
}
const __VLS_30 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
Transition;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
    name: "fade",
}));
const __VLS_32 = __VLS_31({
    name: "fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_34 } = __VLS_33.slots;
if (__VLS_ctx.open) {
    // @ts-ignore
    [open,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "md:hidden border-t border-zinc-200 dark:border-zinc-800" },
    });
    __VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
        ...{ class: "container py-4 flex flex-col gap-3 font-medium" },
    });
    __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
    const __VLS_35 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
        ...{ 'onClick': {} },
        to: "/",
    }));
    const __VLS_37 = __VLS_36({
        ...{ 'onClick': {} },
        to: "/",
    }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    let __VLS_39;
    let __VLS_40;
    const __VLS_41 = ({ click: {} },
        { onClick: (__VLS_ctx.close) });
    const { default: __VLS_42 } = __VLS_38.slots;
    // @ts-ignore
    [close,];
    var __VLS_38;
    __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
    const __VLS_43 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({
        ...{ 'onClick': {} },
        to: "/about",
    }));
    const __VLS_45 = __VLS_44({
        ...{ 'onClick': {} },
        to: "/about",
    }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    let __VLS_47;
    let __VLS_48;
    const __VLS_49 = ({ click: {} },
        { onClick: (__VLS_ctx.close) });
    const { default: __VLS_50 } = __VLS_46.slots;
    // @ts-ignore
    [close,];
    var __VLS_46;
    __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
    const __VLS_51 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({
        ...{ 'onClick': {} },
        to: "/projects",
    }));
    const __VLS_53 = __VLS_52({
        ...{ 'onClick': {} },
        to: "/projects",
    }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    let __VLS_55;
    let __VLS_56;
    const __VLS_57 = ({ click: {} },
        { onClick: (__VLS_ctx.close) });
    const { default: __VLS_58 } = __VLS_54.slots;
    // @ts-ignore
    [close,];
    var __VLS_54;
    __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
    const __VLS_59 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({
        ...{ 'onClick': {} },
        to: "/skills",
    }));
    const __VLS_61 = __VLS_60({
        ...{ 'onClick': {} },
        to: "/skills",
    }, ...__VLS_functionalComponentArgsRest(__VLS_60));
    let __VLS_63;
    let __VLS_64;
    const __VLS_65 = ({ click: {} },
        { onClick: (__VLS_ctx.close) });
    const { default: __VLS_66 } = __VLS_62.slots;
    // @ts-ignore
    [close,];
    var __VLS_62;
    __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
    const __VLS_67 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({
        ...{ 'onClick': {} },
        to: "/contact",
    }));
    const __VLS_69 = __VLS_68({
        ...{ 'onClick': {} },
        to: "/contact",
    }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    let __VLS_71;
    let __VLS_72;
    const __VLS_73 = ({ click: {} },
        { onClick: (__VLS_ctx.close) });
    const { default: __VLS_74 } = __VLS_70.slots;
    // @ts-ignore
    [close,];
    var __VLS_70;
}
var __VLS_33;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/80']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-zinc-950/70']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-zinc-200/60']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-zinc-800']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-extrabold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['w-8']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-br']} */ ;
/** @type {__VLS_StyleScopedClasses['from-brand-500']} */ ;
/** @type {__VLS_StyleScopedClasses['to-purple-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-zinc-900']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brand-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brand-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brand-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brand-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brand-600']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-zinc-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:hover:bg-zinc-800']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['fill-current']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['fill-current']} */ ;
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-zinc-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:hover:bg-zinc-800']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-zinc-200']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-zinc-800']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        open: open,
        toggle: toggle,
        close: close,
        isDark: isDark,
        onToggleTheme: onToggleTheme,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
