import React from 'react';
import { Icon } from 'components/index';
import { Link } from 'react-router-dom';
import { NavBarDropdownProps } from './index';

export function NavBarDropdown({ children, text, to }: NavBarDropdownProps) {
  return (
    <li className="navigation-item has-items">
      <Link to={to}>
        {text}
        <Icon className="ml-2" family="fas" type="caret-down" />
      </Link>
      <ul className="navigation-submenu">{children}</ul>
    </li>
  );
}
