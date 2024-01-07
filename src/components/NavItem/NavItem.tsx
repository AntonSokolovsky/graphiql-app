import { Button, ListItem } from '@mui/material';
import { IPropsNavItem } from './NavItem.type';
import { NavLink } from 'react-router-dom';

export default function NavItem({ name, path }: IPropsNavItem) {
  return (
    <ListItem>
      <NavLink to={path}>
        <Button variant="contained">{name}</Button>
      </NavLink>
    </ListItem>
  );
}
