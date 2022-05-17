const ApiRequest = async (url='', requestOptions=null, error=null) => {
    try {
        const response = await fetch(url, requestOptions);
        if(!response.ok) throw Error("Please reload the application")
    } catch (err) {
        error = err.message;
    } finally {
        return error;
    }
}

export default ApiRequest;