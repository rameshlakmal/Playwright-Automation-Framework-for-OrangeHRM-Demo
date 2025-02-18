export class LocatorFile {
    static get LoginPageLocators() {
      return {
        ENTER_EMAIL : '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input',
        ENTER_PASSWORD: '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input',
        CLICK_LOGIN_BTN: '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button'
        
    };
  }

  static get EmployeePageLocators() {
    return {
      CLICK_PMI_BTN : '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a',
      CLICK_NEW_BTN : '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button',
      FIRST_NAME : '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/input',
      LAST_NAME : '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input',
      EMP_ID : '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input',
      CLICK_SAVE_BTN : '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]',
  
      
  };
}





}