import './app.styles.scss';
import { Component } from "@monster-js/core";

@Component('monster-app')
export class App {
    render() {
        return <div style="width: 100%;height: 100%;font-family: 'Kanit', sans-serif;text-align: center;">
            <div style="position: absolute;top: 45%;left: 50%;transform: translate(-50%,-50%);">
                <div style="text-align: center;margin: 0;padding: 0;">
                    <img src="../assets/img/dragon.svg" alt="" width='175' height='175'/>
                </div>
                <div>
                    <p style="font-size: 30px;letter-spacing: 3px; color: #143258;margin-top:10px;">Welcome to <strong>MonsterJs</strong>!</p>
                </div>
                <div>
                    <div style="display: flex;width: 100%;">
                        <div style="border-radius: 5px;border: 1px solid rgb(170, 170, 170);padding: 15px 30px;margin: 5px 10px;width: 150px;">
                            <a style="color: #143258;font-size: 14px;text-decoration: none;" href="https://monster-js.org/docs/" target="_blank"><i style="margin-right: 10px;font-size: 18px;color: #143258;" class="fa-solid fa-rocket"></i>Get Started here</a>
                        </div>
                        <div style="border-radius: 5px;border: 1px solid rgb(170, 170, 170);padding: 15px 30px;margin: 5px 10px;width: 150px;">
                            <a style="color: #143258;font-size: 14px;text-decoration: none;" href="https://monster-js.org/docs/cli-installation" target="_blank"><i style="margin-right: 10px;font-size: 18px;color: #143258;"  class="fa-solid fa-terminal"></i>CLI Guide</a>
                        </div> 
                    </div>
                    <div style="display: flex;width: 100%; justify-content: center;">
                        <div style="border-radius: 5px;border: 1px solid rgb(170, 170, 170);padding: 15px 30px;margin: 5px 10px;width: 150px;">
                            <a style="color: #143258;font-size: 14px;text-decoration: none;" href="https://monster-js.org/docs/testing" target="_blank"><i style="margin-right: 10px;font-size: 18px;color: #143258;"  class="fa-solid fa-code"></i>Testing</a>
                        </div>
                    </div>
                </div>
            </div>   
            <div style="position: fixed; bottom:0;left:50%; transform:translate(-50%); margin-bottom: 20px;">
                <p style="font-size: 16px; color: #143258; margin-bottom: 5px;">Available Built-in Packages</p>
                <div style="display: inline-flex; margin-bottom: 15px;">
                    <div style="margin: 5px 10px;">
                        <a style="text-decoration: underline;font-size: 14px;color: #143258;" href="https://monster-js.org/docs/router" target="_blank">Router</a>
                    </div>
                    <div style="margin: 5px 10px;">
                        <a style="text-decoration: underline;font-size: 14px;color: #143258;" href="https://monster-js.org/docs/store" target="_blank">Store</a>
                    </div>
                    <div style="margin: 5px 10px;">
                        <a style="text-decoration: underline;font-size: 14px;color: #143258;" href="https://monster-js.org/docs/http" target="_blank">HTTP</a>
                    </div>   
                </div>  
                <div style="bottom: 0;align-items: center;width: 100%;">
                    <div style="text-align: center; padding: 20px;">
                        <a style="font-size: 16px; padding: 20px 20px;" href="https://www.facebook.com/fbmonsterjs" target="_blank"><i style="color: #143258;" class="fa-brands fa-facebook"></i></a>
                        <a style="font-size: 16px; padding: 20px 20px;" href="https://twitter.com/mfpjayb" target="_blank"><i style="color: #143258;" class="fa-brands fa-twitter"></i></a>
                        <a style="font-size: 16px; padding: 20px 20px;" href="https://discord.gg/CY28Qq5yWE" target="_blank"><i style="color: #143258;" class="fa-brands fa-discord"></i></a>
                        <a style="font-size: 16px; padding: 20px 20px;" href="https://stackoverflow.com/questions/tagged/monster-js" target="_blank"><i style="color: #143258;" class="fa-brands fa-stack-overflow"></i></a>
                        <a style="font-size: 16px; padding: 20px 20px;" href="https://github.com/monster-js" target="_blank"><i style="color: #143258;" class="fa-brands fa-github"></i></a>
                    </div>
                </div>                               
            </div>         
        </div>
    }
}