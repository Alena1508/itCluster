import {BODY, NO_TOUCH} from './_constants';
import {isTouch} from './_utils';
import './components';

if (!isTouch()) BODY.addClass(NO_TOUCH);
