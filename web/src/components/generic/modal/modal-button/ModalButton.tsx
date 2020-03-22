import React from 'react';
import { ModalButtonProps } from './';
import { Button, ModalOverlay } from 'components';

export function ModalButton({ button, children, header }: ModalButtonProps) {
  return (
    <>
      <Button className="rounded-button white plain" onClick={ () => console.log('click') }>
        { button }
      </Button>
      <ModalOverlay header={ header }>
        { children }
      </ModalOverlay>
    </>
  );
}