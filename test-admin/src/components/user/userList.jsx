import { List, Datagrid, TextField } from 'react-admin';
import { useParams } from 'react-router-dom';

const UserList = () => {
    const { userId } = useParams();
    return (
        <List resource="user" filter={{ userId }}>
            <Datagrid rowClick="edit">
                <TextField source="email" />
                <TextField source="password" />
                <TextField source="name" />
                <TextField source="logo" />
                <TextField source="about" />
                <TextField source="firstname" />
                <TextField source="lastname" />
                <TextField source="country" />
                <TextField source="city" />
                <TextField source="zipcode" />
                <TextField source="createdAt" />
                <TextField source="isDisabled" />
            </Datagrid>
        </List>
    );
};

export default UserList;