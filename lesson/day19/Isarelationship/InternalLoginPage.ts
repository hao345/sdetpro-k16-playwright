import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage{

    private usernameSel = '#username';
    private passwordSel = '#password';
    private loginBtnSel = '#loginbtn';


    public inputUsername(username: string): void {
        console.log(`Input username: ${username} for selector ${this.usernameSel}`)
    }
    
    public inputPassword(password: string): void {
        console.log(`Input password: ${password} for selector ${this.passwordSel}`)
    }

    public clickOnLoginButton(): void {
        console.log(`Click on login button for selector ${this.loginBtnSel}`)
    }
}