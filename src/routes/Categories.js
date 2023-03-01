import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <Button className="status-btn" onClick={() => dispatch(checkStatus())} value="Check Status" />
      <p>{status}</p>
    </>
  );
};

export default Categories;
