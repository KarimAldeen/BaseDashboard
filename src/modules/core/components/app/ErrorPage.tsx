import React from 'react';
import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { useLocation, useNavigate } from 'react-router-dom';

import { useQueryClient } from 'react-query';
const ErrorPage: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const naviagate = useNavigate()
  const location = useLocation();
  const queryClient = useQueryClient(); // Initialize useQueryClient hook


  const handleRefetch = () => {
  
    const firstPath = location.pathname.split('/')[1]; // Get the first path segment from the URL
    console.log(firstPath,"firstPath");
    
    queryClient.invalidateQueries(firstPath === "/" ? 'home'  : firstPath); 
  };

  const handleGoToLogin = () => {
    naviagate("/")
  };

  return (
    <Result
      status="error"
      title={t('errorPage.networkError')}
      subTitle={t('errorPage.checkAndModify')} 
      extra={[
        <Button type="primary" key="refetch" onClick={handleRefetch}>
          {t('errorPage.refetch')} {/* Translate button text */}
        </Button>,
        <Button key="goToLogin" onClick={handleGoToLogin}>
          {t('errorPage.goToHome')} {/* Translate button text */}
        </Button>,
      ]}
    >
     
    </Result>
  );
};

export default ErrorPage;
