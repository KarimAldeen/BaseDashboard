import { useModalState } from "../state/Modal";

const useModalHandler = () => {
  const { setIsOpen } = useModalState((state) => state);

  const handel_open_model = (ENUM: any) => {
    setIsOpen(ENUM);
  };

  return { handel_open_model };
};

export default useModalHandler;
