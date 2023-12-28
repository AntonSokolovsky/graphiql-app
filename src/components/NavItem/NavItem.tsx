import { ListItem, ListItemButton } from '@mui/material';
import { IPropsNavItem } from './NavItem.type';

export default function NavItem({ name, path }: IPropsNavItem) {
  return (
    <ListItem>
      <ListItemButton href={path}>{name}</ListItemButton>
    </ListItem>
  );
}
