export async function getCatalog() {
    const response = await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog');
    const data = await response.json();

    return data;    
}
