import { useSeo } from '@/composables/useSeo';
const seo = useSeo();
seo({
    title: 'Inicio',
    description: 'Portfolio de desarrollador web especializado en Vue, TypeScript y Tailwind. Proyectos, skills y contacto.',
});
const techs = ['Vue', 'TypeScript', 'Tailwind', 'Python'];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "relative hero-gradient text-white overflow-hidden" },
});
__VLS_asFunctionalElement(__VLS_elements.div)({
    initial: ({ opacity: 0, scale: 0.9 }),
    enter: ({ opacity: 1, scale: 1, transition: { duration: 1000, easing: 'ease-out' } }),
    ...{ class: "absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" },
});
__VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
// @ts-ignore
[vMotion,];
__VLS_asFunctionalElement(__VLS_elements.div)({
    initial: ({ opacity: 0, scale: 0.9 }),
    enter: ({
        opacity: 1,
        scale: 1,
        transition: { duration: 1000, delay: 200, easing: 'ease-out' },
    }),
    ...{ class: "absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" },
});
__VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
// @ts-ignore
[vMotion,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center py-20" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    initial: ({ opacity: 0, y: -10 }),
    enter: ({ opacity: 1, y: 0, transition: { duration: 400 } }),
    ...{ class: "tag bg-white/20 border border-white/30 px-4 py-1 text-sm font-medium rounded-full backdrop-blur-sm transition hover:bg-white/30 hover:scale-105" },
});
__VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
// @ts-ignore
[vMotion,];
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    initial: ({ opacity: 0, y: 20 }),
    enter: ({ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }),
    ...{ class: "mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight" },
});
__VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
// @ts-ignore
[vMotion,];
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "text-yellow-300" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    initial: ({ opacity: 0, y: 20 }),
    enter: ({ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }),
    ...{ class: "mt-4 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed" },
});
__VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
// @ts-ignore
[vMotion,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    initial: ({ opacity: 0, y: 20 }),
    enter: ({ opacity: 1, y: 0, transition: { duration: 500, delay: 300 } }),
    ...{ class: "mt-8 flex flex-wrap items-center justify-center gap-3" },
});
__VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
// @ts-ignore
[vMotion,];
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/projects",
    ...{ class: "btn px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition hover:scale-105" },
}));
const __VLS_2 = __VLS_1({
    to: "/projects",
    ...{ class: "btn px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition hover:scale-105" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
var __VLS_3;
const __VLS_5 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    to: "/contact",
    ...{ class: "btn-secondary px-6 py-3 rounded-xl font-semibold border-white/60 text-white hover:bg-white/10 transition hover:scale-105" },
}));
const __VLS_7 = __VLS_6({
    to: "/contact",
    ...{ class: "btn-secondary px-6 py-3 rounded-xl font-semibold border-white/60 text-white hover:bg-white/10 transition hover:scale-105" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_9 } = __VLS_8.slots;
var __VLS_8;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    initial: ({ opacity: 0, y: 20 }),
    enter: ({ opacity: 1, y: 0, transition: { duration: 500, delay: 400 } }),
    ...{ class: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-90" },
});
__VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
// @ts-ignore
[vMotion,];
for (const [tech] of __VLS_getVForSourceType((__VLS_ctx.techs))) {
    // @ts-ignore
    [techs,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        key: (tech),
        ...{ class: "tag bg-white/15 border border-white/20 px-3 py-1 rounded-full transition hover:bg-white/25 hover:scale-105" },
    });
    (tech);
}
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-gradient']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['-top-24']} */ ;
/** @type {__VLS_StyleScopedClasses['-left-24']} */ ;
/** @type {__VLS_StyleScopedClasses['w-80']} */ ;
/** @type {__VLS_StyleScopedClasses['h-80']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/10']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['blur-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['-bottom-24']} */ ;
/** @type {__VLS_StyleScopedClasses['-right-24']} */ ;
/** @type {__VLS_StyleScopedClasses['w-96']} */ ;
/** @type {__VLS_StyleScopedClasses['h-96']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/10']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['blur-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-[calc(100vh-5rem)]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/20']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-white/30']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-white/30']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-6xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-extrabold']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-tight']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-tight']} */ ;
/** @type {__VLS_StyleScopedClasses['text-yellow-300']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white/90']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['border-white/60']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-white/10']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-12']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-90']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/15']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-white/20']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-white/25']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        techs: techs,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
