// in src/users.js
import React from 'react';
import { List, Datagrid, TextField, TextInput, EmailField, EditButton, Edit, SimpleForm, Create, Filter, ReferenceInput, SelectInput } from 'react-admin';


const DevoteeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        {/* <ReferenceInput label="Country" source="userId" reference="country" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
    </Filter>
);
export const DevoteeList = props => (
    <List title="List" filters={<DevoteeFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="initiatedName" />
            <TextField source="diacriticsName" />
            <EmailField source="email" />
            <TextField source="address" />
            <TextField source="country" />
            <EditButton />
        </Datagrid>
    </List>
);
export const DevoteeEdit = props => (
    <Edit title="update" {...props}>
        <SimpleForm>
            <TextInput source="initiatedName" />
            <TextInput source="diacriticsName" />
            <TextInput source="firstInitiationDate" />
            <TextInput source="secondInitationDate" />
            <TextInput source="initiationPlace" />

            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="address" />
            <TextInput source="country" />
            <TextInput source="nationality" />
            
            
        </SimpleForm>
    </Edit>
);

export const DevoteeCreate = props => (
    <Create title="Add New" {...props}>
        <SimpleForm>
            <TextInput source="initiatedName" />
            <TextInput source="diacriticsName" />
            <TextInput source="firstInitiationDate" />
            <TextInput source="secondInitationDate" />
            <TextInput source="initiationPlace" />

            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="address" />
            <TextInput source="country" />
            <TextInput source="nationality" />
            
            
        </SimpleForm>
    </Create>
);