import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]); // État pour stocker les utilisateurs

  useEffect(() => {
    // Appel API pour obtenir la liste des utilisateurs
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data); // Mettre à jour l'état avec les données de l'API
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      });
  }, []); // [] pour que l'appel se fasse uniquement lors du premier rendu du composant

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
