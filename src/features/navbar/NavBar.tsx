import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import style from './NavBar.module.css';
import { router } from '../../AppRouter';
import githubLogo from '../../assets/github-mark-white.svg'
import linkedInLogo from '../../assets/In-White.png'
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './components/SideBar';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';
import { pages } from './metaData';
import { useState } from 'react';

const buttonSxStyle = {
  fontWeight: 500,
  ":hover": {
    textDecorationLine: "underline",
    textUnderlineOffset: "3px",
  },
}

function NavBar() {
  const navigateTo = router.navigate;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [showSideBar, setShowSideBar] = useState<boolean>(false);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setShowSideBar(true)}
          >
            {!matches && <MenuIcon />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontFamily: 'monospace' }}>
            Han's Portfolio
          </Typography>
          <div className={style.verticalDivider}></div>
          {
            matches &&
              pages.map(x => (
                <Button
                  sx={buttonSxStyle}
                  onClick={() => navigateTo(x.route)}
                  color="inherit"
                  key={x.route}
                >
                  {x.name}
                </Button>
              ))
          }
          <div className={style.space}>
          </div>
          <Link
            rel="noopener"
            href={process.env.REACT_APP_LINKEDIN_LINK}
            sx={{
              ml: '1rem',
            }}
          >
            <img className={style.logoButton} src={linkedInLogo}></img>
          </Link>
          <Link
            rel="noopener"
            href='https://github.com/HanNguyen-dev'
            sx={{
              ml: '1rem',
            }}
          >
            <img className={style.logoButton} src={githubLogo}></img>
          </Link>
        </Toolbar>
      </AppBar>
      <SideBar open={showSideBar} onClose={() => setShowSideBar(false)}/>
    </Box>
  );
}

export default NavBar;