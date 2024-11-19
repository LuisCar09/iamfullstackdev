import {Link} from 'react-router-dom'
import InputCreate from "./InputCreate.jsx";
const Home = ({data,reloadDataFunction}) => {
  
  return (
    <>
    <h2>Lista de datos</h2>
    <InputCreate needToReload = {reloadDataFunction} />
    <ul>
      {data.map(item => (
        <li key={item._id}>
          <Link to={`/${item._id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
    </>
  )
};

export default Home;
