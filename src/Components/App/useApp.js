import { useAppContext } from "../../context/appContext";

const useApp = () => {
  const [{ counter }, { increment, decrement }] = useAppContext();

  const handleIncrement = () => {
    increment(1);
  };
  const handleDecrement = () => {
    decrement(-1);
  };

  return {
    counter,
    handleIncrement,
    handleDecrement,
  };
};

export default useApp;
