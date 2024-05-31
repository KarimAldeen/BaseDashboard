import React from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { useLanguage, useLanguageMenu } from '../hooks/useLanguage';
import i18next from 'i18next';

export default function Translate() {
  const { changeLanguage } = useLanguage();
  const { languageOptions } = useLanguageMenu();  

  const handleLanguageChange = (newLanguage:string) => {
    changeLanguage(newLanguage);
  };

  return (
    <div className='Translate'>
      <Menu menuButton={<MenuButton>
        {languageOptions.map((option:any,index:number) => (
          option.code === i18next.language ?
            <React.Fragment key={index}>
              <img alt='' src={option.icon} width={20} height={20} /> {option.label}
            </React.Fragment>
            : null
        ))}
      </MenuButton>} transition>
        {languageOptions.map((option:any) => (
          <MenuItem key={option.code} onClick={() => handleLanguageChange(option.code)}>
            <img alt='' src={option.icon} width={20} height={20} /> {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
