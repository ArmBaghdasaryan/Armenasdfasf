import LoginIcon from '../../../../../public/icons/login.svg';
import RegisterIcon from '../../../../../public/icons/register.svg';
import LoginPlatformIcon from '../../../../../public/icons/platformLogin.svg';
import M from '../../../../../../src/messages';

const cards = [
  {
    id: 'registration',
    title: M.get('pages.landing.howItWork.registerCard.title'),
    description: M.get('pages.landing.howItWork.registerCard.desc'),
    icon: LoginIcon,
  },
  {
    id: 'login',
    title: M.get('pages.landing.howItWork.loginCard.title'),
    description: M.get('pages.landing.howItWork.loginCard.desc'),
    icon: RegisterIcon,
  },
  {
    id: 'platformLogin',
    title: M.get('pages.landing.howItWork.platformCard.title'),
    description: M.get('pages.landing.howItWork.platformCard.desc'),
    icon: LoginPlatformIcon,
  },
];

export { cards };
