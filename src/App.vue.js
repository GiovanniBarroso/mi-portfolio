import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';
import { useHead } from '@unhead/vue';
import { SITE_NAME } from '@/config/seo';
import { routeFade } from '@/composables/motionPresets';
useHead({
    titleTemplate: (sub) => (sub ? `${sub} | ${SITE_NAME}` : SITE_NAME),
    meta: [
        // Ojo: si ya tienes <meta name="viewport"> en index.html, no lo dupliques aquí.
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0ea5e9' },
    ],
    link: [
        // Si tienes favicons en /public
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans" },
});
/** @type {[typeof Navbar, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Navbar, new Navbar({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)({
    ...{ class: "flex-1 pt-20 container mx-auto px-4" },
});
const __VLS_4 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.RouterView, ]} */ ;
// @ts-ignore
RouterView;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
{
    const { default: __VLS_8 } = __VLS_7.slots;
    const [{ Component }] = __VLS_getSlotParameters(__VLS_8);
    const __VLS_9 = ((Component));
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
        initial: (__VLS_ctx.routeFade.initial),
        enter: (__VLS_ctx.routeFade.enter),
    }));
    const __VLS_11 = __VLS_10({
        initial: (__VLS_ctx.routeFade.initial),
        enter: (__VLS_ctx.routeFade.enter),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    // @ts-ignore
    [routeFade, routeFade, vMotion,];
    __VLS_7.slots['' /* empty slot name completion */];
}
var __VLS_7;
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-zinc-950']} */ ;
/** @type {__VLS_StyleScopedClasses['text-zinc-900']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-zinc-100']} */ ;
/** @type {__VLS_StyleScopedClasses['font-sans']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-20']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        Navbar: Navbar,
        Footer: Footer,
        routeFade: routeFade,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
