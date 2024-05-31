import React from "react";
import { Spin } from "antd";

interface Props {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
}

const KarimSpinner: React.FC<Props> = ({ loading, className, children }) => {
  return (
    <div className={className ?? ""}>
      {loading ? (
        <div className="text-center">
          <Spin />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default KarimSpinner;
