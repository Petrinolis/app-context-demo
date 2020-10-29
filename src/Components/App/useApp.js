
import { useAppContext } from '../../context/appContext'

const useApp = () => {
  const [{counter}, {increment, decrement}] = useAppContext();

  return {
    counter,
    increment,
    decrement
  }
}

export default useApp