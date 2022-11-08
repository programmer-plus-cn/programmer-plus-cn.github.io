import Vue from 'vue';
declare const ModuleTransitionProps: import("vue/types/vue").ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, unknown, unknown, unknown, {
    delay: string;
    duration: string;
    transform: unknown[];
}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin>;
declare class ModuleTransition extends ModuleTransitionProps {
    setStyle(items: any): void;
    unsetStyle(items: any): void;
    render(): JSX.Element;
}
export default ModuleTransition;
