import DesktopBG from '../../../../public/bg/appointment-bg.png';
import TabletBG from '../../../../public/bg/appointment-tablet-bg.png';
import MobileBG from '../../../../public/bg/appointment-mobile-bg.png';

const muiStyles = {
  container: {
    height: '100%',
    background: {xs: `url("${MobileBG.src}")`, sm: `url("${TabletBG.src}")`, md: `url("${TabletBG.src}")`, lg: `url("${DesktopBG.src}")`},
    backgroundPosition: { xs: '0 0', sm: '0 0', md: '0 0', lg: '0 0', xl: '0 0' },
    backgroundRepeat: { xs: 'no-repeat', sm: 'no-repeat', md: 'no-repeat', lg: 'no-repeat', xl: 'no-repeat' },
    backgroundSize: { xs: '100% 100%', sm: '100% 100%', md: '100% 100%', lg: '100% 100%', xl: '100% 100%' },
    mt: {
      xs: 7,
      sm: 10,
      md: 10,
      lg: 10,
      xl: 10,
    },
  },
  mainBlock: {
    height: '100%',
    padding: {
      xs: '0 16px',
      sm: '0 152px',
      md: '0 152px',
      lg: '0 120px',
      xl: '0 120px',
    },
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: {
      xs: 'center',
      sm: 'center',
      md: 'center',
      lg: 'space-between',
      xl: 'space-between',
    },
    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
  },
  infoBlock: {
    maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '624px', xl: '624px' },
    width: { xs: '100%', sm: '100%', md: '100%', lg: '624px', xl: '624px' },
    marginBottom: { xs: '48px', sm: '48px', md: '48px', lg: '0', xl: '0' },
    minWidth: '360px',
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' },
    justifyContent: {
      xs: 'center',
      sm: 'flex-start',
      md: 'flex-start',
      lg: 'center',
      xl: 'center',
    },
  },
  formBlock: {
    maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '472px', xl: '472px' },
    display: 'flex',
  },
  registerBtn: {
    width: { xs: '100%', sm: '344px', md: '344px' },
    color: 'white',
    fontSize: '16px',
    mt: { xs: 5, sm: 7, md: 7 },
    display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' },
    padding: '12px 24px',
  },
};
export { muiStyles };
