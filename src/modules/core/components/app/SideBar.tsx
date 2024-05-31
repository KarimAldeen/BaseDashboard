import React, { useState } from "react";
import { Divider } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdLogout, MdExpandMore, MdExpandLess } from "react-icons/md";
import { useTranslation } from "react-i18next";
import useAuthState from "../../state/AuthState";
import { menuItems } from "../../page/Routes";
import { useWindowSize } from "../../hooks/useWindowSize";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuItem = ({ item, location, index ,isOpenSide}: any) => {
  const isActive = location.pathname.split("/")[1] === item.path?.slice(1);
  // console.log(location.pathname.split("/")[1]);

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const isDropdownOpen = openDropdown === index;
  const [t] = useTranslation();

  return (
    <>
      <div
        className={`SideBar_Link ${isActive ? "active" : ""} ${item?.children && "DropDownLink"} `}
      >
        <i>{item.icon}</i>
        <Link to={item.path || "/"}>  {!isOpenSide && t(item.text)}</Link>
        {item?.children && (
          <>
            {isDropdownOpen ? (
              <div
                className="DropDownIcon"
                onClick={() => handleDropdown(index)}
              >
                <MdExpandLess />
              </div>
            ) : (
              <div
                className="DropDownIcon"
                onClick={() => handleDropdown(index)}
              >
                <MdExpandMore />
              </div>
            )}
          </>
        )}
      </div>

      {item?.children && isDropdownOpen && (
        <div className="sub-menu">
          {item.children.map((childItem: any, index: any) => (
            <MenuItem
              key={index}
              item={childItem}
              location={location}
              index={index}
            />
          ))}
        </div>
      )}
    </>
  );
};

const SideBar = () => {
  const location = useLocation();

  const [isOpenSide, setIsOpenSide] = useState<boolean>(false);
  
  const handleHamburgerMenu = () => {
    setIsOpenSide(true);
    document.getElementById('DashboardLayout_Body')?.classList.add('DashboardLayout_Body_Open');
  };

  const handleImg = () => {
    setIsOpenSide(false);
    document.getElementById('DashboardLayout_Body')?.classList.remove('DashboardLayout_Body_Open');
  };



  return (
    <div className={isOpenSide ? 'SideBar SideBar_Open' : 'SideBar noOpen'}>
     <div className='SideBar_Top'>
        <div onClick={handleImg}>
         <img src="/Layout/Logo.svg" width={isOpenSide ? 70 : 130} alt="" />
        </div>
        <div className='HamburgerMenu' onClick={handleHamburgerMenu}>
          <GiHamburgerMenu />
        </div>
      </div>     
      <div className="side_bar_links">
        {menuItems.map((item:any, index:any) => {
          if (false) {
            return <></>;
          }
          return (
            <MenuItem
              key={index}
              item={item}
              location={location}
              index={index}
              isOpenSide={isOpenSide}
            />
          );
        })}
      </div>
      
    </div>
  );
};

export default SideBar;
