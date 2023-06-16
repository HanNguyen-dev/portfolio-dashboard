import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { pages } from "../metaData";
import { router } from "../../../AppRouter";

type Props = {
  open: boolean;
  onClose: () => void;
}

export default function SideBar(props: Props) {
  const navigateTo = router.navigate;

  const onPageClick = (page: string) => {
    navigateTo(page);
    props.onClose();
  }

  return (
    <Drawer
      anchor={'left'}
      open={props.open}
      onClose={props.onClose}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
      >
        <List>
          {pages.map((page, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => onPageClick(page.route)}>
                <ListItemText primary={page.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}