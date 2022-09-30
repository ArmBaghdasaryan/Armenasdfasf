import DesktopBG from '../../../public/bg/appointment-bg.png';
import TabletBG from '../../../public/bg/appointment-tablet-bg.png';
import MobileBG from '../../../public/bg/appointment-mobile-bg.png';

const muiStyles = {
  container: {
    background: { xs: `url("${MobileBG.src}")`, sm: `url("${TabletBG.src}")`, md: `url("${TabletBG.src}")`, lg: `url("${DesktopBG.src}")` },
    backgroundPosition: { xs: '0 0', sm: '0 0', md: '0 0', lg: '0 0', xl: '0 0' },
    backgroundRepeat: { xs: 'no-repeat', sm: 'no-repeat', md: 'no-repeat', lg: 'no-repeat', xl: 'no-repeat' },
    backgroundSize: { xs: '100% 100%', sm: '100% 100%', md: '100% 100%', lg: '100% 100%', xl: '100% 100%' },
  },
  mainBlock: {
    padding: {
      xs: '169px 16px',
      sm: '136px 32px',
      md: '136px 32px',
      lg: '72px 120px',
      xl: '72px 120px',
    },
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: { xs: 'start', sm: 'start', md: 'start', lg: 'center' },
    
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
    maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '40%', xl: '40%' },
    width: { xs: '100%', sm: '100%', md: '100%', lg: '40%', xl: '40%' },
    marginBottom: 0,
    minWidth: '360px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  formBlock: {
    maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '472px', xl: '472px' },
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' },
  },
  bookBtn: {
    width: { xs: '100%', sm: '344px', md: '344px' },
    color: 'white',
    fontSize: '16px',
    fontFamily: 'Poppins',
    mt: { xs: 8, sm: 8, md: 8 },
    display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' },
    padding: '12px 24px',
  },
};
export { muiStyles };
