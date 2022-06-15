import './app.styles.scss';
import { Component } from "@monster-js/core";

@Component('monster-app')
export class App {
    render() {
        return <div class='container'>
            <div class='content-wrapper'>
                <div class='logo'>
                    <img src="../assets/img/dragon.svg" alt="" width='100' height='100'/>
                </div>
                <div>
                    <p class='logo-desc'>Welcome to <strong>MonsterJs</strong>!</p>
                </div>
                <div class='references'>
                    <div class='group'>
                        <div class='admonition'>
                            <a href="https://monster-js.org/docs/" target="_blank"><i class="fa-solid fa-rocket"></i>Get Started here</a>
                        </div>
                        <div class="admonition">
                            <a href="https://monster-js.org/docs/cli-installation" target="_blank"><i class="fa-solid fa-terminal"></i>CLI Guide</a>
                        </div> 
                    </div>
                    <div class='group justify-center'>
                        <div class="admonition">
                            <a href="https://monster-js.org/docs/testing" target="_blank"><i class="fa-solid fa-code"></i>Testing</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class='footer'>
                <p class='descriptions'>Available Built-in Packages</p>
                <div class="group">
                    <div class='packages'>
                        <a href="https://monster-js.org/docs/router" target="_blank">Router</a>
                    </div>
                    <div class='packages'>
                        <a href="https://monster-js.org/docs/store" target="_blank">Store</a>
                    </div>
                    <div class="packages">
                        <a href="https://monster-js.org/docs/http" target="_blank">HTTP</a>
                    </div>   
                </div>                                 
                <div class='socials-wrapper'>
                    <div class='wrapper'>
                         <a href="https://www.facebook.com/fbmonsterjs" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/mfpjayb" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://discord.gg/CY28Qq5yWE" target="_blank"><i class="fa-brands fa-discord"></i></a>
                        <a href="https://stackoverflow.com/questions/tagged/monster-js" target="_blank"><i class="fa-brands fa-stack-overflow"></i></a>
                        <a href="https://github.com/monster-js" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                   
                </div>
            </div>
        </div>
    }
}