import Vue from 'vue';
declare const RecoIconProps: import("vue/types/vue").ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, unknown, unknown, unknown, {
    icon: string;
    link: string;
}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin>;
declare class RecoIcon extends RecoIconProps {
    getClass(icon: string): string;
    go(link: any): void;
    render(): JSX.Element;
}
export default RecoIcon;
