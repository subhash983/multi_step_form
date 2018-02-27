export default function(state = {
    email: '',
    password: '',
    confirmPassword: ''
}, action) {
    switch (action.type) {
        case 'EMAIL_CHANGED':
            return Object.assign({}, state, {email: action.value});
            break;
        case 'PASSWORD_CHANGED':
            return Object.assign({}, state, {password: action.value});
            break;
        case 'CONFIRM_PASSWORD_CHANGED':
            return Object.assign({}, state, {confirmPassword: action.value});
            break;
        default:
            return state;
    }
}
