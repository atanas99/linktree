import {useState, useCallback} from 'react';

export const useTabs = ({defaultValue = ''} = {}) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = useCallback((event, newValue) => {
        setValue(newValue);
    }, []);

    return {
        value,
        onChange,
    };
};