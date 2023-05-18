import { useEffect } from 'react';

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Lawyer Point`;
    }, [title])
};

export default useTitle;