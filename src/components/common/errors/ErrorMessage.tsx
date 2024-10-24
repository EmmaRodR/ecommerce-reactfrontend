import { useEffect } from "react";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  useEffect(() => {}, [message]);

  return (
    <>
      <div className="alert-container">
        <p className="error-message">{message}</p>
        <div className="icon-container">
          <img src="src/assets/alert-icon.png" alt="" />
        </div>
      </div>
    </>
  );
};
