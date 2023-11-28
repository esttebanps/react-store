export const GetApiProducts = async (title, categoryId) => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products?title=${title}&categoryId=${categoryId}`);
        const data = await response.json();

        if (Array.isArray(data)) {
            console.log(data);
            return data;
        } else {
            console.error('Error: Response is not an array');
            return [];
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const GetApiCategories = async () => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}


export default {GetApiProducts, GetApiCategories}