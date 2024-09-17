import type { ExtractPropTypes } from 'vue';
import type { CollapseActiveName } from './collapse';
export declare const collapseItemProps: {
    readonly title: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => CollapseActiveName & {}) | (() => CollapseActiveName) | ((new (...args: any[]) => CollapseActiveName & {}) | (() => CollapseActiveName))[], unknown, unknown, undefined, boolean>;
    readonly icon: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
};
export declare type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;
