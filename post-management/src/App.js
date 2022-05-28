import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { getPost } from './actions/postAction';
import PostPage from './pages/PostPage';

function App() {
  const [timeOut, setTimeOut] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeOut(true);
    setTimeout(() => {
      setTimeOut(false);
    }, 5000);
  }, []);

  const fetchPost = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'get',
      });

      const data = await res.json();
      setTimeOut(false);
      const action = getPost(data);
      dispatch(action);
    } catch (error) {
      alert('Something happened!');
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="pt-3">
      {timeOut ? (
        <Spinner
          animation="border"
          role="status"
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            width: '70px',
            height: '70px',
            alignSelf: 'center',
          }}
        />
      ) : (
        <PostPage />
      )}
    </div>
  );
}

export default App;
