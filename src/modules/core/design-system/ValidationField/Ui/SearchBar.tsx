import React, { useState } from "react";
import "./SearchBar.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    const { value } = event.target;
    setSearchQuery(value);
    updateUrlParams(value);
  };

  const updateUrlParams = (value: any) => {
    navigate(`?search=${value}`, { replace: true });
  };

  return (
    <div className="SearchBar">
      <div className="group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1b5stb0 icon"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="SearchIcon"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          placeholder="Search Product...."
          type="search"
          className="input"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
