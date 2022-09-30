import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Divider, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import SidebarLogo from '../../../src/assets/icons/sidebar/sidebar-logo.svg';
import QuestionSVG from '../../../src/assets/icons/sidebar/question.svg';
import { variables } from '../../../src/configs'
import M from '../../../src/messages';
import { links } from './config';
import { muiStyles } from './styles';

const Sidebar: FC = () => {
  const router = useRouter();

  const isLinkActive = (link: string) => router.pathname === link;

  const handleClick = (link: string) => {
    router.push({ pathname: link }, undefined);
  }

  const handleHelpClick = () => {
    console.log("Clicked Help center")
  }

  const handleClickLogo = () => {
    console.log('Clicked logo')
  }

  const drawer = (
    <Box component="div" sx={{ backgroundColor: 'primary.main', mt: '36px' }}>
      <List sx={{ background: 'inherit', p: 0 }}>
        {links.map((item) => item.type === 'divider' ? (
          <Box key={item.id} sx={{ p: '8px 24px' }}><Divider sx={muiStyles.divider} /></Box>
        ) : (
          <ListItem sx={{ ...muiStyles.listItem, ...(isLinkActive(item.link) && muiStyles.listItemActive) }} key={item.id} disablePadding onClick={() => handleClick(item.link)}>
            <ListItemButton disableRipple sx={{ ...muiStyles.listItemBtn, ...(isLinkActive(item.link) && muiStyles.listItemBtnActive) }}>
              <ListItemIcon sx={{ minWidth: 'auto', mr: '12px', ...(isLinkActive(item.link) && muiStyles.activeLinkIcon) }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} sx={{ color: 'white', ...(isLinkActive(item.link) && muiStyles.activeLinkTitle)}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="nav" sx={{ width: variables.overviewDrawerWidth }}>
        <Drawer
          variant="permanent"
          sx={{
            '& .MuiDrawer-paper': {borderRight: 'none', oxSizing: 'border-box',width: variables.overviewDrawerWidth,backgroundColor: 'primary.main'},
          }}
          open
        >
          <Box onClick={handleClickLogo} sx={{ p: '46px 0', alignSelf: 'center', cursor: 'pointer' }}>
            <SidebarLogo />
          </Box>
          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box component="div">
              <Avatar sx={{ width: 72, height: 72 }} alt="name" src="https://www.nj.com/resizer/iqV2J-QFgh0227ybHBor4exTVBk=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" />
            </Box>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
              <Typography sx={muiStyles.welcomeUser}>{M.get('sidebar.welcome')}</Typography>
              <Typography sx={muiStyles.userName}>Name Surname</Typography>
            </Box>
          </Box>
          {drawer}
          <Box sx={muiStyles.helpBlock} onClick={handleHelpClick}>
            <Box sx={{ mr: '12px' }}><QuestionSVG /></Box>
            <Typography sx={muiStyles.help}>{M.get('sidebar.help')}</Typography>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;