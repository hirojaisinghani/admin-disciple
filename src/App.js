// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { DevoteeList, DevoteeEdit, DevoteeCreate } from './devotees';
import { PostList } from './posts';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import {Host} from './Host';



const dataProvider = jsonServerProvider(Host);
const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="devotees" icon={UserIcon} list={DevoteeList} edit={DevoteeEdit} create={DevoteeCreate} />
    </Admin>
);

export default App;