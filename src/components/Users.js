import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    Edit,
    EditButton,
    SimpleForm,
    TextInput,
    Create,
    Link,
    FunctionField
  } from 'react-admin';
   
  export const UserList = props => (
    <List {...props} resource="students">
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />    
        <FunctionField label="username"  render={record => (
          <Link to={`/users/${record.username}/repos`}> {record.username} </Link>
        )} />
        <EmailField source="email" />
        <TextField source="phone" />
        <EditButton basepath='/students'/>
      </Datagrid>
    </List>
  );
   
  export const UserEdit = props => (
    <Edit {...props} resource="students">
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
      </SimpleForm>
    </Edit>
  );
   
  export const UserCreate = props => (
    <Create {...props} resource="students">
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
      </SimpleForm>
    </Create>
  );