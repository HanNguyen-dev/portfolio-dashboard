import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import style from './NavBar.module.css';
import { router } from '../../AppRouter';

const buttonSxStyle = {
  fontWeight: 500,
  ":hover": {
    textDecorationLine: "underline",
    textUnderlineOffset: "3px",
  },
}

function NavBar() {
  const navigateTo = router.navigate;

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
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontFamily: 'monospace' }}>
            Han's Portfolio
          </Typography>
          <div className={style.verticalDivider}></div>
          <Button
            sx={buttonSxStyle}
            onClick={() => navigateTo('/')}
            color="inherit"
          >
            Dashboard
          </Button>
          <Button
            sx={buttonSxStyle}
            onClick={() => navigateTo('/blueprint')}
            color="inherit"
          >
            Blueprint
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;