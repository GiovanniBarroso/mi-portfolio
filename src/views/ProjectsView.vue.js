import SectionTitle from '@/components/common/SectionTitle.vue';
import ProjectCard from '@/components/common/ProjectCard.vue';
import { projects } from '@/data/projects';
import { useSeo } from '@/composables/useSeo';
import { withStagger } from '@/composables/motionPresets';
const seo = useSeo();
seo({
    title: 'Proyectos',
    description: 'Mira mis proyectos destacados y prácticas técnicas: SPA, CI/CD, performance y accesibilidad.',
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "container py-20" },
    'aria-labelledby': "projects-title",
});
/** @type {[typeof SectionTitle, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({
    id: "projects-title",
    title: "Proyectos",
    subtitle: "Trabajos destacados y prácticas técnicas",
}));
const __VLS_1 = __VLS_0({
    id: "projects-title",
    title: "Proyectos",
    subtitle: "Trabajos destacados y prácticas técnicas",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8" },
});
for (const [p, i] of __VLS_getVForSourceType((__VLS_ctx.projects))) {
    // @ts-ignore
    [projects,];
    /** @type {[typeof ProjectCard, ]} */ ;
    // @ts-ignore
    const __VLS_4 = __VLS_asFunctionalComponent(ProjectCard, new ProjectCard({
        key: (p.slug),
        ...(p),
        delay: (__VLS_ctx.withStagger(i, 120).delay),
    }));
    const __VLS_5 = __VLS_4({
        key: (p.slug),
        ...(p),
        delay: (__VLS_ctx.withStagger(i, 120).delay),
    }, ...__VLS_functionalComponentArgsRest(__VLS_4));
    // @ts-ignore
    [withStagger,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-16 text-center" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-zinc-600 dark:text-zinc-400 mb-4" },
});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "https://github.com/tuusuario",
    target: "_blank",
    rel: "noopener noreferrer",
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-8']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-16']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-zinc-600']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-zinc-400']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        SectionTitle: SectionTitle,
        ProjectCard: ProjectCard,
        projects: projects,
        withStagger: withStagger,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
