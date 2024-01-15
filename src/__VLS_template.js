import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, todos, updateTodo } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_intrinsicElements.input;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
for (const [todo] of __VLS_getVForSourceType((__VLS_ctx.todos)!)) {
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, key: ((todo.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, key: ((todo.id)), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["span"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(todo.name);
(__VLS_13.slots!).default;
}
{
const __VLS_15 = __VLS_intrinsicElements["input"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{ onChange: {} as any, }, type: ("checkbox"), checked: ((todo.done ? 'checked' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{ onChange: {} as any, }, type: ("checkbox"), checked: ((todo.done ? 'checked' : '')), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
let __VLS_20 = { 'change': __VLS_pickEvent(__VLS_19['change'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_17>).onChange) };
__VLS_20 = {
change: $event => {
__VLS_ctx.updateTodo(todo);
// @ts-ignore
[todos, updateTodo,];
}
};
}
(__VLS_8.slots!).default;
}
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
