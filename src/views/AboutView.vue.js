import SectionTitle from '@/components/common/SectionTitle.vue';
import { useSeo } from '@/composables/useSeo';
import { slideInLeft, slideInRight, withStagger } from '@/composables/motionPresets';
const seo = useSeo();
seo({
    title: 'Sobre mí',
    description: 'Conoce mi experiencia, metodología de trabajo y logros destacados en desarrollo web.',
});
const tags = ['Gandía', 'Remoto', 'Freelance'];
const stats = [
    { k: 'Años exp.', v: '5+' },
    { k: 'Proyectos', v: '20+' },
    { k: 'Stack', v: 'Vue • TS • Tailwind' },
];
const achievements = [
    'SPA con autenticación JWT y pagos integrados.',
    'Integración CI/CD con despliegues automatizados.',
    'Diseño responsive y accesible siguiendo WCAG AA.',
];
const tools = [
    'Vue',
    'TypeScript',
    'Tailwind',
    'Pinia',
    'Vite',
    'Vitest',
    'ESLint',
    'Prettier',
    'Husky',
    'PWA',
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "container py-20" },
    'aria-labelledby': "about-title",
});
/** @type {[typeof SectionTitle, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({
    id: "about-title",
    title: "Sobre mí",
    subtitle: "Conoce un poco sobre mi experiencia y metodología",
}));
const __VLS_1 = __VLS_0({
    id: "about-title",
    title: "Sobre mí",
    subtitle: "Conoce un poco sobre mi experiencia y metodología",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-10 grid md:grid-cols-3 gap-8 items-start" },
});
__VLS_asFunctionalElement(__VLS_elements.article, __VLS_elements.article)({
    initial: (__VLS_ctx.slideInLeft.initial),
    enter: (__VLS_ctx.slideInLeft.enter),
    ...{ class: "card p-8 transition hover:scale-[1.02] hover:shadow-xl" },
});
__VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
// @ts-ignore
[slideInLeft, slideInLeft, vMotion,];
__VLS_asFunctionalElement(__VLS_elements.img)({
    alt: "Avatar de [Tu Nombre]",
    ...{ class: "w-32 h-32 rounded-2xl object-cover mb-6 border-4 border-yellow-300" },
});
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
    ...{ class: "text-3xl font-bold mb-2" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4" },
});
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
    ...{ class: "flex flex-wrap gap-2 mt-2" },
    role: "list",
});
for (const [t] of __VLS_getVForSourceType((__VLS_ctx.tags))) {
    // @ts-ignore
    [tags,];
    __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
        key: (t),
        ...{ class: "tag" },
    });
    (t);
}
__VLS_asFunctionalElement(__VLS_elements.article, __VLS_elements.article)({
    initial: (__VLS_ctx.slideInRight.initial),
    enter: (__VLS_ctx.slideInRight.enter),
    ...{ class: "md:col-span-2 card p-8 transition hover:scale-[1.01] hover:shadow-xl" },
});
__VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
// @ts-ignore
[vMotion, slideInRight, slideInRight,];
__VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({
    ...{ class: "text-2xl font-semibold mb-3" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-zinc-700 dark:text-zinc-300 leading-relaxed" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "grid sm:grid-cols-3 gap-4 mt-6" },
});
for (const [s, i] of __VLS_getVForSourceType((__VLS_ctx.stats))) {
    // @ts-ignore
    [stats,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (s.k),
        initial: ({ opacity: 0, y: 10 }),
        enter: ({
            opacity: 1,
            y: 0,
            transition: { duration: 300, delay: __VLS_ctx.withStagger(i, 80).delay },
        }),
        ...{ class: "rounded-xl border border-zinc-200/60 dark:border-zinc-800 p-4 text-center transition hover:scale-[1.03] hover:shadow-md" },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    // @ts-ignore
    [vMotion, withStagger,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-3xl font-bold" },
    });
    (s.v);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400" },
    });
    (s.k);
}
__VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({
    ...{ class: "mt-8 text-2xl font-semibold" },
});
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
    ...{ class: "mt-3 space-y-2" },
    role: "list",
});
for (const [a, i] of __VLS_getVForSourceType((__VLS_ctx.achievements))) {
    // @ts-ignore
    [achievements,];
    __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
        key: (i),
        ...{ class: "flex items-start gap-3" },
        initial: ({ opacity: 0, x: -8 }),
        enter: ({
            opacity: 1,
            x: 0,
            transition: { duration: 250, delay: __VLS_ctx.withStagger(i, 70).delay },
        }),
    });
    __VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    // @ts-ignore
    [vMotion, withStagger,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-500" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "text-zinc-700 dark:text-zinc-300" },
    });
    (a);
}
__VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({
    ...{ class: "mt-8 text-2xl font-semibold" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-3 flex flex-wrap gap-2" },
});
for (const [tool] of __VLS_getVForSourceType((__VLS_ctx.tools))) {
    // @ts-ignore
    [tools,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        key: (tool),
        ...{ class: "px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800" },
    });
    (tool);
}
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-8']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-[1.02]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['w-32']} */ ;
/** @type {__VLS_StyleScopedClasses['h-32']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['border-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-yellow-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-zinc-700']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-zinc-300']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['md:col-span-2']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-[1.01]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-zinc-700']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-zinc-300']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-zinc-200/60']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-zinc-800']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-[1.03]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-widest']} */ ;
/** @type {__VLS_StyleScopedClasses['text-zinc-500']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-zinc-400']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-brand-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-zinc-700']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-zinc-300']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-zinc-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-zinc-800']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        SectionTitle: SectionTitle,
        slideInLeft: slideInLeft,
        slideInRight: slideInRight,
        withStagger: withStagger,
        tags: tags,
        stats: stats,
        achievements: achievements,
        tools: tools,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
