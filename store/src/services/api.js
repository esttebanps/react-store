export const Login = async (email = "maria@mail.com", password = "12345") => {
  const url = "https://api.escuelajs.co/api/v1/auth/login";

  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      const accessToken = result.access_token;
      const refreshToken = result.refresh_token;
      console.log(accessToken);
      return { accessToken, refreshToken };
    } else {
      console.error("Error:", result);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const GetApiProducts = async (title, categoryId) => {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?title=${title}&categoryId=${
        categoryId != null ? categoryId : ""
      }`
    );
    const data = await response.json();

    if (Array.isArray(data)) {
      return data;
    } else {
      console.error("Error: Response is not an array");
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const GetApiCategories = async () => {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export default { GetApiProducts, GetApiCategories, Login };
