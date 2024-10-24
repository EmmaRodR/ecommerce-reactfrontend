import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

type RedirectionAlertProps = {
  children: React.ReactNode;
  actionType: 'login' | 'register' | 'addProduct' | 'editProduct' | 'addCategory' | 'editCategory';
};


function RedirectionAlert({children=null,actionType}: RedirectionAlertProps) {
  
  const navigate = useNavigate();

  let redirectPath = "";  

  switch (actionType) {
    case "login":
      redirectPath = "/products";
      break;
    case "register":
      redirectPath = "/login";
      break;

    case "addProduct":
      redirectPath = "/manageProducts";
      break;

    case "addCategory":
      redirectPath = "/manageCategories";
      break;

    case "editProduct":
      redirectPath = "/manageProducts";
      break;

    case "editCategory":
      redirectPath = "/manageCategories";
      break;

    default:
      return "";
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
      navigate(redirectPath);
    }
  , [navigate, actionType, redirectPath]);


  return (
    <div className='redirection-alert'>
      {children}
    </div>
  )
}

export default RedirectionAlert