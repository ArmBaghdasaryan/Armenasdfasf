import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

import { makeStyles } from '@mui/styles';
import { ScrollLink as ScrollLinkHoc, Link as ScrollLinkBase, LinkProps, scroller } from 'react-scroll';
import { Typography, Box } from '@mui/material';
import qs from 'qs';

import styles, { muiStyles } from './styles';
import { iSection } from '../interfaces';
import SETTINGS from '../../../../settings';
interface iProps {
  section: iSection;
  activeID: string;
  // eslint-disable-next-line no-unused-vars
  setActiveID: (id: string) => void;
  onClick?: () => void;
  getOffset: ()=>number;
}

const useStyles = makeStyles(styles);

const ALink = ({children, ...other}: any) => (<a {...other}>{children}</a>)

function generateScrollerFromGetOffset(getOffset: ()=>number) {
  return {
    ...scroller,
    scrollTo: (...args: Parameters<typeof scroller["scrollTo"]>) => {
      return scroller.scrollTo(args[0], {
        ...args[1],
        offset: getOffset()
      })
    }
  }
}

// The scroller need to invoke getOffset the moment it is invoked. So, we need to customize the default one.
const ScrollLink = ({getOffset, ...other}: {getOffset: ()=>number} & LinkProps) => {
  const Component: any = useMemo(()=>{
    return ScrollLinkHoc(ALink, generateScrollerFromGetOffset(getOffset))
  }, [getOffset])
  return <Component {...other}/>
}

const NavigationLink: React.FC<iProps> = ({ section, activeID, setActiveID, onClick, getOffset }) => {

  const classes = useStyles();
  const router = useRouter();
  const { to, label, type } = section;

  const handleRedirect = () => {
    window.location.replace(`${SETTINGS.appUrl}/landing_page/registration?sectionPath=${to}`);
    if (onClick) {
      onClick();
    }
  }

/*   const handleScrollLinkClick = () => {
    if (onClick) {
      onClick();
    }

    setTimeout(() => {
      setActiveID(to);
      const search = qs.stringify({ sectionPath: to }, { skipNulls: true });
      router.replace({ search }, undefined, { shallow: true });
    }, 400)
  }
 */
  return type === 'scroll' ? (
    <Box
      component={ScrollLink}
      to={to}
      spy
      smooth
      duration={500}
      activeClass={activeID === to ? classes.active : classes.inactive}
      offset={getOffset()}
      getOffset={getOffset}
      ignoreCancelEvents
      sx={activeID === to ? muiStyles.active : muiStyles.inactive}
      onSetActive={() => setActiveID(to)}
      onClick={onClick}
      isDynamic
    >
      {label}
    </Box>) : (
    <Typography sx={muiStyles.inactive} onClick={handleRedirect}>
      {label}
    </Typography>
  );
};

export default React.memo(NavigationLink);
