import SectionTitle from '@/components/common/SectionTitle.vue';
import SkillBadge from '@/components/common/SkillBadge.vue';
import { skills } from '@/data/skills';
import { useSeo } from '@/composables/useSeo';
import { withStagger } from '@/composables/motionPresets';
const seo = useSeo();
seo({
    title: 'Skills',
    description: 'Tecnologías y herramientas: Vue, TypeScript, Tailwind, testing, CI/CD y mejores prácticas.',
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "container py-20" },
    'aria-labelledby': "skills-title",
});
/** @type {[typeof SectionTitle, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({
    id: "skills-title",
    title: "Skills",
    subtitle: "Tecnologías y herramientas que manejo",
}));
const __VLS_1 = __VLS_0({
    id: "skills-title",
    title: "Skills",
    subtitle: "Tecnologías y herramientas que manejo",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6" },
});
for (const [group, category, i] of __VLS_getVForSourceType((__VLS_ctx.skills))) {
    // @ts-ignore
    [skills,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (category),
        initial: ({ opacity: 0, y: 16 }),
        enter: ({
            opacity: 1,
            y: 0,
            transition: { duration: 350, delay: __VLS_ctx.withStagger(i, 120).delay },
        }),
        ...{ class: "card p-6 transition hover:scale-[1.02] hover:shadow-lg" },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    // @ts-ignore
    [withStagger, vMotion,];
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "text-base font-semibold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-3" },
    });
    (category.charAt(0).toUpperCase() + category.slice(1));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex flex-wrap gap-2" },
    });
    for (const [s] of __VLS_getVForSourceType((group))) {
        /** @type {[typeof SkillBadge, ]} */ ;
        // @ts-ignore
        const __VLS_4 = __VLS_asFunctionalComponent(SkillBadge, new SkillBadge({
            key: (s),
            label: s,
        }));
        const __VLS_5 = __VLS_4({
            key: (s),
            label: s,
        }, ...__VLS_functionalComponentArgsRest(__VLS_4));
    }
}
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-[1.02]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-zinc-200']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-zinc-700']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        SectionTitle: SectionTitle,
        SkillBadge: SkillBadge,
        skills: skills,
        withStagger: withStagger,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
