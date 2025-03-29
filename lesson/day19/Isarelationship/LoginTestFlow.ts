import LoginPage from "./LoginPage";

export default class LoginTestFlow {
    public static login(loginPage: LoginPage, username: string, password: string){
        loginPage.inputUsername(username);
        loginPage.inputPassword(password);
        loginPage.clickOnLoginButton();
    }
}