/**
 * Override custom element register interface so customElements.define will accept MonsterJS components
 */
interface CustomElementRegistry {
    define(name: string, constructor: any, options?: ElementDefinitionOptions): void;
}

declare module '*.jpg';
declare module '*.gif';
declare module '*.png';
declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';
declare module '*.svg';
declare module '*.eot';
declare module '*.jpeg';
declare module '*.ico';
