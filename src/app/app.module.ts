import { BaseModule, Module } from "@monster-js/module";
import { App } from "./app.component";

@Module({
    root: App
})
export class AppModule extends BaseModule { }