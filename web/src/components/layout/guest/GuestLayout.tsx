import React from 'react';
import './GuestLayout.scss';
import { GuestLayoutProps } from './';
import { GuestGuard, Header, LoginModal, NavBar, RegisterModal } from 'components';

export function GuestLayout({ children, section = 'home', style }: GuestLayoutProps) {
  return (
    <GuestGuard>
      <Header>
        <RegisterModal />
        <LoginModal />
      </Header>
      <NavBar />
      <main>
        <section className="page-container" data-page={section} style={style}>
          {children}
        </section>
      </main>
    </GuestGuard>
  );
}
