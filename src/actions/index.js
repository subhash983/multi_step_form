export function changeText(event) {
    var type = '';
     switch (event.target.name) {
        case 'email':
            type = 'EMAIL_CHANGED';
            break;
        case 'password':
            type = 'PASSWORD_CHANGED';
            break;
        case 'confirmPassword':
            type = 'CONFIRM_PASSWORD_CHANGED';
            break;
        default:

    }
    return {type: type, value: event.target.value};
}
