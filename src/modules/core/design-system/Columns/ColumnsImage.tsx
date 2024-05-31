import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Image, Space } from 'antd';
import { ImageBaseURL } from '../../api/config';
import useImageError from '../../hooks/useImageError';


const ColumnsImage= ({src}:any) => {
   const ErrorImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
    
   const imageUrl = ImageBaseURL + src || ErrorImage;
    
  const handleError = useImageError;
  // or you can download flipped and rotated image
  // https://codesandbox.io/s/zi-ding-yi-gong-ju-lan-antd-5-7-0-forked-c9jvmp
  const onDownload = (url:any) => {
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        
        // Extract file name from URL
        const fileName = url.split('/').pop();
        link.download = fileName || 'download'; // If file name cannot be extracted, set a default name
        
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(link.href);
        link.remove();
      })
      .catch((error) => {
        console.error('Error fetching resource:', error);
      });
  };
  
  
  return (
    <Image
      width={45}
      height={45}
      src={imageUrl }
      className='p-1 mb-1 columnImage '
      preview={{
        toolbarRender: (
          _,
          {
            transform: { scale },
            actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
          },
        ) => (
          <Space size={12} className="toolbar-wrapper">
            {/* <DownloadOutlined onClick={onDownload} /> */}
            <SwapOutlined rotate={90} onClick={onFlipY} />
            <SwapOutlined onClick={onFlipX} />
            <RotateLeftOutlined onClick={onRotateLeft} />
            <RotateRightOutlined onClick={onRotateRight} />
            <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
            <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
          </Space>
        ),
      }}
      onError={handleError}

    />
  );
};

export default ColumnsImage;







// {
//   name: t("image"),
//   center: "true",
//   cell: (row: any) => {
//     return (
//       <ColumnsImage src={row?.image} />
//     )
//   }
// },