import { UseToastOptions } from "@chakra-ui/toast";

export const toastSuccess = (message: string): UseToastOptions => {
        return {
          position: "top",
          description: message,
          status: "success",
          variant: "subtle",
          title: "",
          duration: 5000,
          isClosable: true,
        };
      };    

export const toastError = (messageError: string): UseToastOptions => {
    return {
        position: "top",
        description: messageError,
        status: "error",
        variant: "subtle",
        title: "",
        duration: 5000,
        isClosable: true,        
        };
};      
    