import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { getCategoriesAndDocuments } from './utils/firebase-utils';
import { useEffect } from 'react';
import { Await } from 'react-router-dom';
import { SignIn } from './components/routes/signin/sign.component';
import { useDispatch } from 'react-redux';
import { setCategoriesArray } from './store/categories/categories.action';
import { Home } from './components/routes/home/home.component';
import { Navigation } from './components/routes/navigation/navigation.component';
import { Shop } from './components/routes/Shop/shop.component';
function App() {
  const dispatch = useDispatch();
 
  useEffect(() => {
      const getDocuments = async () => {
        const documents = await getCategoriesAndDocuments();
        dispatch(setCategoriesArray(documents));
        console.log(documents);
      };
      getDocuments();
  },[]);
  return (
    <Routes>  
    <Route path="/" element={<Navigation />}>
     <Route index element={<Home />}/>
     <Route path='shop/*' element={<Shop />} />
     <Route path='signin/*' element={<SignIn />} />

   </Route>
 </Routes>
   );
}

export default App;
