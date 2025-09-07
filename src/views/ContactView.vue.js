import { ref, computed } from 'vue';
import SectionTitle from '@/components/common/SectionTitle.vue';
import { useSeo } from '@/composables/useSeo';
const seo = useSeo();
seo({
    title: 'Contacto',
    description: '¿Tienes una idea o proyecto? Escríbeme para colaborar en tu próximo desarrollo web.',
});
/** Config */
const toEmail = 'tuemail@example.com';
const subjectBase = 'Contacto desde el portfolio';
/** State */
const name = ref('');
const email = ref('');
const message = ref('');
const hp = ref(''); // honeypot
const touched = ref(false);
const submitting = ref(false);
const status = ref('idle');
/** Validación */
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidName = computed(() => name.value.length >= 2);
const isValidEmail = computed(() => emailRe.test(email.value));
const isValidMessage = computed(() => message.value.length >= 10);
const formOk = computed(() => isValidName.value && isValidEmail.value && isValidMessage.value);
/** Mailto helper */
const mailtoHref = computed(() => {
    const subject = encodeURIComponent(subjectBase);
    const body = encodeURIComponent(`Nombre: ${name.value}\nEmail: ${email.value}\n\n${message.value}`);
    return `mailto:${toEmail}?subject=${subject}&body=${body}`;
});
async function onSubmit() {
    touched.value = true;
    status.value = 'idle';
    if (hp.value)
        return; // bot
    if (!formOk.value)
        return;
    try {
        submitting.value = true;
        window.location.href = mailtoHref.value;
        status.value = 'sent';
    }
    catch (e) {
        status.value = 'error';
    }
    finally {
        submitting.value = false;
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "container py-20" },
    'aria-labelledby': "contact-title",
});
/** @type {[typeof SectionTitle, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(SectionTitle, new SectionTitle({
    id: "contact-title",
    title: "Contacto",
    subtitle: "¿Tienes una idea o proyecto? ¡Conversemos!",
}));
const __VLS_1 = __VLS_0({
    id: "contact-title",
    title: "Contacto",
    subtitle: "¿Tienes una idea o proyecto? ¡Conversemos!",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "grid md:grid-cols-2 gap-10 mt-10" },
});
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ onSubmit: (__VLS_ctx.onSubmit) },
    initial: ({ opacity: 0, x: -24 }),
    enter: ({ opacity: 1, x: 0, transition: { duration: 400 } }),
    ...{ class: "card p-8 grid gap-4 transition hover:scale-[1.01] hover:shadow-xl" },
    novalidate: true,
    'aria-describedby': "contact-help",
});
__VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
// @ts-ignore
[onSubmit, vMotion,];
__VLS_asFunctionalElement(__VLS_elements.input)({
    value: (__VLS_ctx.hp),
    type: "text",
    ...{ class: "hidden" },
    'aria-hidden': "true",
    tabindex: "-1",
    autocomplete: "off",
});
// @ts-ignore
[hp,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "sr-only" },
    for: "name",
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    id: "name",
    value: (__VLS_ctx.name),
    type: "text",
    placeholder: "Tu nombre",
    ...{ class: "input-field" },
    'aria-invalid': ((__VLS_ctx.touched && !__VLS_ctx.isValidName) || undefined),
    'aria-describedby': (!__VLS_ctx.isValidName ? 'err-name' : undefined),
    required: true,
});
// @ts-ignore
[name, touched, isValidName, isValidName,];
if (__VLS_ctx.touched && !__VLS_ctx.isValidName) {
    // @ts-ignore
    [touched, isValidName,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        id: "err-name",
        ...{ class: "text-sm text-red-600 mt-1" },
    });
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "sr-only" },
    for: "email",
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    id: "email",
    type: "email",
    placeholder: "Tu correo",
    ...{ class: "input-field" },
    'aria-invalid': ((__VLS_ctx.touched && !__VLS_ctx.isValidEmail) || undefined),
    'aria-describedby': (!__VLS_ctx.isValidEmail ? 'err-email' : undefined),
    required: true,
});
(__VLS_ctx.email);
// @ts-ignore
[touched, isValidEmail, isValidEmail, email,];
if (__VLS_ctx.touched && !__VLS_ctx.isValidEmail) {
    // @ts-ignore
    [touched, isValidEmail,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        id: "err-email",
        ...{ class: "text-sm text-red-600 mt-1" },
    });
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "sr-only" },
    for: "message",
});
__VLS_asFunctionalElement(__VLS_elements.textarea, __VLS_elements.textarea)({
    id: "message",
    value: (__VLS_ctx.message),
    placeholder: "Tu mensaje",
    rows: "5",
    ...{ class: "input-field resize-none" },
    'aria-invalid': ((__VLS_ctx.touched && !__VLS_ctx.isValidMessage) || undefined),
    'aria-describedby': (!__VLS_ctx.isValidMessage ? 'err-message' : undefined),
    required: true,
});
// @ts-ignore
[touched, message, isValidMessage, isValidMessage,];
if (__VLS_ctx.touched && !__VLS_ctx.isValidMessage) {
    // @ts-ignore
    [touched, isValidMessage,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        id: "err-message",
        ...{ class: "text-sm text-red-600 mt-1" },
    });
}
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    id: "contact-help",
    ...{ class: "text-xs text-zinc-500 dark:text-zinc-400" },
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    type: "submit",
    ...{ class: "btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed" },
    disabled: (__VLS_ctx.submitting || !__VLS_ctx.formOk),
});
// @ts-ignore
[submitting, formOk,];
if (__VLS_ctx.submitting) {
    // @ts-ignore
    [submitting,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "animate-spin w-4 h-4 border-2 border-current border-r-transparent rounded-full" },
    });
}
(__VLS_ctx.submitting ? 'Preparando correo…' : 'Enviar mensaje');
// @ts-ignore
[submitting,];
if (__VLS_ctx.status === 'sent') {
    // @ts-ignore
    [status,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-sm text-emerald-600 mt-2" },
    });
    __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
        ...{ class: "link" },
        href: (__VLS_ctx.mailtoHref),
    });
    // @ts-ignore
    [mailtoHref,];
    (__VLS_ctx.toEmail);
    // @ts-ignore
    [toEmail,];
}
if (__VLS_ctx.status === 'error') {
    // @ts-ignore
    [status,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-sm text-red-600 mt-2" },
    });
    __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
        ...{ class: "link" },
        href: (__VLS_ctx.mailtoHref),
    });
    // @ts-ignore
    [mailtoHref,];
    (__VLS_ctx.toEmail);
    // @ts-ignore
    [toEmail,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    initial: ({ opacity: 0, x: 24 }),
    enter: ({ opacity: 1, x: 0, transition: { duration: 400, delay: 120 } }),
    ...{ class: "card p-8 transition hover:scale-[1.01] hover:shadow-xl" },
});
__VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
// @ts-ignore
[vMotion,];
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
    ...{ class: "text-2xl font-semibold mb-4" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-zinc-700 dark:text-zinc-300 mb-4" },
});
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
    ...{ class: "space-y-3" },
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    ...{ class: "link hover:underline" },
    href: (__VLS_ctx.mailtoHref),
});
// @ts-ignore
[mailtoHref,];
(__VLS_ctx.toEmail);
// @ts-ignore
[toEmail,];
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    ...{ class: "link hover:underline" },
    href: "https://github.com/tuusuario",
    target: "_blank",
    rel: "noopener noreferrer",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    ...{ class: "link hover:underline" },
    href: "https://www.linkedin.com/in/tuusuario",
    target: "_blank",
    rel: "noopener noreferrer",
});
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-10']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-[1.01]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
/** @type {__VLS_StyleScopedClasses['input-field']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
/** @type {__VLS_StyleScopedClasses['input-field']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
/** @type {__VLS_StyleScopedClasses['input-field']} */ ;
/** @type {__VLS_StyleScopedClasses['resize-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-zinc-500']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-zinc-400']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:opacity-60']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:cursor-not-allowed']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-spin']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-current']} */ ;
/** @type {__VLS_StyleScopedClasses['border-r-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-emerald-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-[1.01]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-zinc-700']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-zinc-300']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        SectionTitle: SectionTitle,
        toEmail: toEmail,
        name: name,
        email: email,
        message: message,
        hp: hp,
        touched: touched,
        submitting: submitting,
        status: status,
        isValidName: isValidName,
        isValidEmail: isValidEmail,
        isValidMessage: isValidMessage,
        formOk: formOk,
        mailtoHref: mailtoHref,
        onSubmit: onSubmit,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
