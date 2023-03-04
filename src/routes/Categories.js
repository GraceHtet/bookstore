import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const styles = {
    catContainer: {
      margin: '5% 10%',
    },
    catStatus: {
      color: 'gray',
      fontSize: '2em',
      textTransform: 'capitalize',
      fontWeight: 'bold',
      margin: '5% 0',
    },
  };
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cat-container" style={styles.catContainer}>
        <Button
          className="status-btn"
          onClick={() => dispatch(checkStatus())}
          value="Check Status"
        />
        <p className="cat-status" style={styles.catStatus}>
          {status}
        </p>
      </div>
    </>
  );
};

export default Categories;
