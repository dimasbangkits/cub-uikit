import React from "react";
import { SvgProps } from "../../../components/Svg";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <img alt="CubFinance" src="/images/cub/header_logo_wide.png" />
  );
};

export default Logo;
