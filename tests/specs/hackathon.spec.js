import TabBar from '../screenobjects/components/tab.bar';
import LoginScreen from '../screenobjects/login.screen';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    // beforeEach(() => {
    //     TabBar.waitForTabBarShown(true);
    //     TabBar.openLogin();
    //     LoginScreen.waitForIsShown(true);
    // });

    

    it('should be able login successfully', () => {

        // async function delay(ms) {
        //     return new Promise( resolve => setTimeout(resolve, ms) );
        // }

        // console.log(await browser.getContexts());
        // browser.switchContext("WEBVIEW_org.utz.portaldev.RealityVerificationApp")

        
        // LoginScreen.loginContainerButon.click();
        
        // $("#b2-menu").waitForDisplayed(3000);
        // browser.click("#b2-menu");
        // $("#Input_UsernameVal").setValue('sampletest@test.com')
        // LoginScreen.userName.setValue('sampletest@test.com');
        // LoginScreen.password.setValue('test');

        // if (driver.isKeyboardShown()) {
        //     driver.hideKeyboard();
        // }
        // LoginScreen.loginButton.click();
        // LoginScreen.alert.waitForIsShown();
        // expect(LoginScreen.alert.text()).toEqual('Success\nYou are logged in!');

        // LoginScreen.alert.pressButton('OK');
        // LoginScreen.alert.waitForIsShown(false);

        browser.waitUntil(
            ()=> {
                const contexts = browser.getContexts()

                console.log('contexts =', contexts );
                return contexts.length > 1
            }, 15000
        )

        browser.switchContext('WEBVIEW');

        $("#b2-Menu").waitForDisplayed(15000);
        $('#b2-Menu').click();
        browser.pause(1000)
        $(".user-info-login .OSFillParent").click();
        browser.pause(1000);
        $("#Input_UsernameVal").addValue('sampletest@test.com')
        
        $("#Input_PasswordVal").addValue('test');
        $("#loginbutton").click();
        expect($(".heading3").getText()).toEqual("Welcome back sample test");

        $(".feedback-message-error").click();
        $('#b2-Menu').click();
        expect($(".user-info").isDisplayed()).toEqual(true)


    });

    it('should be able to see a list with farms', () => {
        $(".ThemeGrid_MarginGutter").click();
        // console.log($$("#ListOfAllFarms .list-item").length)
        // expect($$("#ListOfAllFarms .list-item").length).toBeGreaterThan(0)
    })

    // Try to implement this yourself
    xit('should be able sign up successfully', () => {

    });
});
