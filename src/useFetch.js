import {useEffect,useState} from "react";
const useFetch = (url) => {
    const [Data, setData] = useState(null);
    const [isPending,setisPending] = useState(true);   
    const [error,setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url , {signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error ('could not fetch the data from the resource');
            }
            return res.json();
        })
        .then( data => {
            setError(null)
            setData(data)
            setisPending(false)
        })    
        .catch(err => {
            if(err.name === 'AbortError'){
            }
            else{
            setisPending(false)
            setError(err.message);}
        })
        return () => abortCont.abort();
    }, [url]);
    return{Data,isPending,error};
}

export default useFetch;