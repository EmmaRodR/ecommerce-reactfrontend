import React, { ReactNode } from 'react'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineSmsFailed } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import './Alert.css'

type AlertProps = {
    variant?: "success" | "danger" | "warning";
    children: ReactNode;
}

const Alert: React.FC<AlertProps> = ({variant="success",children}) => {

    return (
        <div
          className={`alert ${variant} active`}
        >
          <span className='icon'>
            {variant === "success" ? (
              <AiOutlineCheckCircle />
            ) : variant === "warning" ? (
              <MdOutlineSmsFailed />
            ) : (
              <RxCross2 />
            )}
          </span>
          {children}
        </div>
      );
}

export default Alert;