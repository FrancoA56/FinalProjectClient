import { List, Datagrid, TextField } from 'react-admin';
import { useParams } from 'react-router-dom';

const PresetList = () => {
    const { presetId } = useParams();
    return (
        <List resource="preset" filter={{ presetId }}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="price" />
                <TextField source="defaultColor" />
                <TextField source="type" />
                <TextField source="category" />
                <TextField source="releasedAt" />
                <TextField source="isDisabled" />
            </Datagrid>
        </List>
    );
};

export default PresetList;