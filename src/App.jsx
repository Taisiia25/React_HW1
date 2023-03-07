
import './App.css';
import React, { useEffect, useState} from 'react';
import { userData } from './userData.js';
import User from './User';
import Modal from './Modal';



const App = () => {
  const [users, setUsers] = useState(userData);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalUser, setModalUser] = useState(null);
  const [filter, setFilter] = useState({
    name: '',
    sort: 'default',
  });

  useEffect(() => {
    const nameToLowerCase = filter.name.toLowerCase();
    const sortValue = filter.sort;
    const newUsers = userData
      .filter(user => user.name.toLowerCase().includes(nameToLowerCase))
      .sort((a,b) => sortValue === 'asc' ? a.age - b.age : b.age - a.age);
      setUsers(newUsers);
  }, [filter])

  const handleSortChange = (event) => {
    const { value } = event.target;
    setFilter({...filter, sort: value});
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFilter({...filter, name: value});
  }

  const clearFilters = () =>  {
    setFilter({name: '', sort: 'default'});
    setUsers(userData); 
  }

  const handleShowModal = (user) => {
    setIsShowModal(true);
    setModalUser(user);
  }

  const handleCloseModal = () => {
    setIsShowModal(false);
    setModalUser(null);
  }

  return (
    <>
    {isShowModal ? <Modal handleCloseModal={handleCloseModal} user={modalUser}/> : null}
      <header className='search'>
       Search: <input type="text" placeholder='Enter name' onChange={handleInputChange}/>
       <select onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
       </select>
       <button onClick={clearFilters}>Clear filters</button>
      </header>
      <div className='container'>
        {users.map(user => <User user={user}  handleShowModal = {() => handleShowModal(user)}/>)}
      </div>
    </>
  );
}

export default App;
