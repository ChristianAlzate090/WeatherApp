// Promisificar
export const getCoordinates = async () => {
    try {
        const position = await new Promise((resolve, reject) => {
            // Cuando se ejecuta resolve, la promesa se resuelve con el valor pasado a resolve
            // Cuando se ejecuta reject, la promesa se rechaza
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    
        return { 
            latitude: position.coords.latitude, 
            longitude: position.coords.longitude,
         };
    } catch (_) {
        return null;
    }
};        