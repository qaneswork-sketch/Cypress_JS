import RegistrationPage from './HW 19_1_methods.js';


let nonValidEmail = 'E';
let shortNonValidEmail = 'f@f.c';
let longNonValidEmail = 'fdhjghfdjgjfkghdfkghjkdfhjkdshfjksdhfjsdkfhsjkdfhsdjkfhsdjkfhsdkjfhsdjkfhsjkfhsdjkfhskjfhsdjkfhsdkjfhjskhfjshfjshfjkshdfjksdhfsjdkhfskjdhfskdjhfskdjhfskjdfhsjkdhfsjkdfhskjdfhsdjkfhsdjkhfskjdfhsdjkfhjskdhfdsjkfhsdjkfhsdjkfhsdjfhsdjkshdjfhsjjdccdcs@gmail.com';
let shortValidEmail = 's@g.bo';
//Максимальное значение для валидного email - 255 сим
let longValidEmail = 'fdhjghfdjgjfkghdbkghjkdmhwrdshkjksdhfjsdkfhsjkdfhsdjkfhsdjkfhsdkjfhsdjkfhsjkfhsdjkfhskjfhsdjkfhsdkjfhjskhfjshfjshfjkshdfjksdhfsjdkhfskjdhfskdjhfskdjhfskjdfhsjkdhfsjkdfhskjdfhsdjkfhsdjkhfskjdfhsdjkfhjskdhfdsjkfhsdjkfhsdjkfhsdjfhsdjkshdjfhsjjdcccs@gmail.com';

let shortNonValidName = 'N';
let longNonValidName = 'heReisexactlytwentyon';
let nameWithSpecialCharacter = 'h\'';
let NameWithCyril = 'nЮ';
let nameWithNumber = 'Name2';
let nameForTrim = ' Name ';
let shortValidName = 'Na';
let longtValidName = 'hereisexactlytwentyo';

let shortNonValidLName = 'L';
let longNonValidLName = 'LaReisexactlytwentyon';
let lNameWithSpecialCharacter = 'h-';
let lNameWithCyril = 'lЖ';
let lNameWithNumber = 'Last9';
let lNameForTrim = '  Last  ';
let shortValidLName = 'La';
let longtValidLName = 'Lereisexactlytwentyo';

let shortNonValidPassword = 'Passw12';
let longNonValidPassword = 'PasswordQwerty12';
let passwordWithCapitelLetters = 'PASSW123';
let passwordWithSmallLetters = 'passw123';
let passwordWithoutNumber = 'Password';
let shortValidPassword = 'Passw123';
let longtValidPassword = 'PasswordQwerty1';


describe('Registration Form Validation', () => {
    beforeEach(() => {
      RegistrationPage.visit();
      RegistrationPage.openRegistrationForm();
    });

    it('Проверка формы регистрации на пустые поля', () => {
        RegistrationPage.checkButtonDisabled();

        RegistrationPage.fillName(shortNonValidName);
        RegistrationPage.clearField('input[name="name"]');
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Name required');

        RegistrationPage.fillLastName(shortNonValidLName);
        RegistrationPage.clearField('input[name="lastName"]');
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Last name required');

        RegistrationPage.fillEmail(nonValidEmail);
        RegistrationPage.clearField('input[name="email"]');
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Email required');

        RegistrationPage.fillPassword(shortNonValidPassword);
        RegistrationPage.clearField('input[name="password"]');
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Password required');

        RegistrationPage.fillRepeatPassword(shortNonValidPassword);
        RegistrationPage.clearField('input[name="repeatPassword"]');
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Re-enter password required');

        RegistrationPage.checkButtonDisabled();
      });


      it('Проверка формы регистрации на минимальные значения полей', () => {
        RegistrationPage.fillName(shortNonValidName);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Name has to be from 2 to 20 characters long');

        RegistrationPage.fillLastName(shortNonValidLName);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Last name has to be from 2 to 20 characters long');

        RegistrationPage.fillEmail(nonValidEmail);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Email is incorrect');

        RegistrationPage.fillPassword(shortNonValidPassword);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');

        RegistrationPage.fillRepeatPassword(shortNonValidPassword);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');

        RegistrationPage.checkButtonDisabled();
      });
    
      it('Проверка формы регистрации на максимальные значения полей', () => {
        RegistrationPage.fillName(longNonValidName);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Name has to be from 2 to 20 characters long');

        RegistrationPage.fillLastName(shortNonValidLName);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Last name has to be from 2 to 20 characters long');

        RegistrationPage.fillEmail(shortNonValidEmail); //Максимальное значение для email будет проверено отдельным кейсом
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Email is incorrect');

        RegistrationPage.fillPassword(longNonValidPassword);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');

        RegistrationPage.fillRepeatPassword(longNonValidPassword);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');

        RegistrationPage.checkButtonDisabled();
      });

      it('Проверка формы регистрации на НЕвалидные значения Name, Last name', () => {
        RegistrationPage.fillName(NameWithCyril);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Name is invalid');
        RegistrationPage.clearField('input[name="name"]');

        RegistrationPage.fillLastName(lNameWithCyril);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Last name is invalid');
        RegistrationPage.clearField('input[name="lastName"]');

        RegistrationPage.fillName(nameWithNumber);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Name is invalid');
        RegistrationPage.clearField('input[name="name"]');

        RegistrationPage.fillLastName(lNameWithNumber);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Last name is invalid');
        RegistrationPage.clearField('input[name="lastName"]');

        RegistrationPage.fillName(nameWithSpecialCharacter);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Name is invalid');
        RegistrationPage.clearField('input[name="name"]');

        RegistrationPage.fillLastName(lNameWithSpecialCharacter);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Last name is invalid');
        RegistrationPage.clearField('input[name="lastName"]');

        RegistrationPage.checkButtonDisabled();
      });

      it('Проверка формы регистрации на трим пробелов в полях Name, Last name', () => {
        RegistrationPage.fillName(nameForTrim);
        RegistrationPage.fillLastName(lNameForTrim);
        RegistrationPage.fillEmail(shortValidEmail);
        RegistrationPage.fillPassword(shortValidPassword);
        RegistrationPage.fillRepeatPassword(shortValidPassword);

        RegistrationPage.registration();
      });

      it('Проверка формы регистрации на НЕвалидные поля Password, Re-enter password', () => {
        RegistrationPage.fillPassword(passwordWithSmallLetters);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        RegistrationPage.fillRepeatPassword(passwordWithSmallLetters);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        RegistrationPage.clearField('input[name="password"]');
        RegistrationPage.clearField('input[name="repeatPassword"]');

        RegistrationPage.fillPassword(passwordWithCapitelLetters);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        RegistrationPage.fillRepeatPassword(passwordWithCapitelLetters);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        RegistrationPage.clearField('input[name="password"]');
        RegistrationPage.clearField('input[name="repeatPassword"]');

        RegistrationPage.fillPassword(passwordWithoutNumber);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        RegistrationPage.fillRepeatPassword(passwordWithoutNumber);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        RegistrationPage.clearField('input[name="password"]');
        RegistrationPage.clearField('input[name="repeatPassword"]');

        RegistrationPage.fillPassword(shortValidPassword);
        RegistrationPage.fillRepeatPassword(longtValidPassword);
        RegistrationPage.changeFocus();
        RegistrationPage.checkErrorMessage('Passwords do not match');

        RegistrationPage.checkButtonDisabled();
      });

        
      it('Проверка формы регистрации на длинное значение поля email', () => {
        RegistrationPage.fillName(shortValidName);
        RegistrationPage.fillLastName(longtValidLName);
        RegistrationPage.fillEmail(longNonValidEmail);
        RegistrationPage.fillPassword(shortValidPassword);
        RegistrationPage.fillRepeatPassword(shortValidPassword);

        RegistrationPage.registration();
        RegistrationPage.checkDifferentError('Data too long for column \'email\' at row 1');
      });
    
      it('Регистрация юзера по минимальным валидным значениям', () => {
        RegistrationPage.fillName(shortValidName);
        RegistrationPage.fillLastName(shortValidLName);
        RegistrationPage.fillEmail(shortValidEmail);
        RegistrationPage.fillPassword(shortValidPassword);
        RegistrationPage.fillRepeatPassword(shortValidPassword);

        RegistrationPage.registration();
        RegistrationPage.LogOut();
      });

      it('Регистрация уже зарегистрированого юзера', () => {
        RegistrationPage.fillName(shortValidName);
        RegistrationPage.fillLastName(shortValidLName);
        RegistrationPage.fillEmail(shortValidEmail);
        RegistrationPage.fillPassword(shortValidPassword);
        RegistrationPage.fillRepeatPassword(shortValidPassword);

        RegistrationPage.registration();
        RegistrationPage.checkDifferentError('User already exists');
      });

      it('Регистрация юзера по максимальным валидным значениям', () => {
        RegistrationPage.fillName(longtValidName);
        RegistrationPage.fillLastName(longtValidLName);
        RegistrationPage.fillEmail(longValidEmail);
        RegistrationPage.fillPassword(longtValidPassword);
        RegistrationPage.fillRepeatPassword(longtValidPassword);

        RegistrationPage.registration();
        RegistrationPage.LogOut();
      });

});

describe('Log in', () => {
    it('Log in', () => {
        cy.login('w@t.co', 'Password_01');
      });
});