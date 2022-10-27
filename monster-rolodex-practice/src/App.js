import './App.css';
import { useEffect, useState } from 'react';
import MonsterSearchBox from './components/search-box/search-box.component';
import Cardlist from './components/CardList/cardlist.component';  
const App = () => {

  const [searchField,setSearchField] = useState("");

  const [monsters,setMonsters] = useState([]);

  const [filteredMonsters,setFilteredMonsters] = useState(monsters)

  useEffect( ()=> {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json()).then((users) => {
    
    setMonsters(users);
})
  },[])

  const onSearchChangeHandler = (event) => {
      const searchString = event.target.value;
      setSearchField(searchString);
  }

  useEffect( ()=> {
    const newFlteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
    setFilteredMonsters(newFlteredMonsters)
    console.log(newFlteredMonsters);
  },[monsters,searchField])

return (
  <div className="App">
  <h1 className='app-title' >Monsters Rolodex</h1>
  <MonsterSearchBox onChangeHanlder={onSearchChangeHandler} placeholder="search monsters" className="search-box"></MonsterSearchBox>
  <Cardlist filteredMonsters={filteredMonsters}></Cardlist>
</div>

);

}

export default App;
