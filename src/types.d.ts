/**
 * Override custom element register interface so customElements.define will accept MonsterJS components
 */
interface CustomElementRegistry {
    define(name: string, constructor: any, options?: ElementDefinitionOptions): void;
}