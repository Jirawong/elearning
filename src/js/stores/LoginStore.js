import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstant';
import BaseStore from './BaseStore';


class LoginStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerAction.bind(this));
        this._username;
    }

    _registerAction(action) {
        switch (action.actionType) {
            case LOGIN_USER:
                this._username = 'admin';
                this.emitChange();
                break;
            case LOGOUT_USER:
                this._username = null;
                this.emitChange();
                break;
        }
    }

    get username() {
        return this._username;
    }

    isLoggedIn() {
        return !!this._username;
    }
}

export default new LoginStore();