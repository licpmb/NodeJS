import fetch from "node-fetch";

// Base URL de la API FakeStore
const BASE_URL = "https://fakestoreapi.com";

// Función para manejar las solicitudes GET
const getProducts = async (productId = null) => {
  try {
    const url = productId
      ? `${BASE_URL}/products/${productId}`
      : `${BASE_URL}/products`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error("Error:", data);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error("Error al realizar la solicitud GET:", error.message);
  }
};

// Función para manejar las solicitudes POST
const createProduct = async (title, price, category) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price: parseFloat(price),
        category,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error:", data);
    } else {
      console.log("Producto creado con éxito:", data);
    }
  } catch (error) {
    console.error("Error al realizar la solicitud POST:", error.message);
  }
};

// Función para manejar las solicitudes DELETE
const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Error:", await response.json());
    } else {
      console.log(`Producto con ID ${productId} eliminado correctamente.`);
    }
  } catch (error) {
    console.error("Error al realizar la solicitud DELETE:", error.message);
  }
};

// Procesar argumentos de la terminal
const main = async () => {
  const [_, __, method, resource, ...args] = process.argv;

  // Separar el recurso y el parámetro (si existe)
  const [resourceName, resourceId] = resource.split("/");

  // Validar el nombre del recurso (en este caso, "products")
  if (resourceName !== "products") {
    console.error("Recurso no válido. Solo se permite 'products'.");
    return;
  }

  // Manejar el método HTTP
  switch (method) {
    case "GET":
      if (!resourceId) {
        // Consultar todos los productos
        await getProducts();
      } else {
        // Consultar un producto específico
        await getProducts(resourceId);
      }
      break;

    case "POST":
      if (args.length === 3) {
        const [title, price, category] = args;
        await createProduct(title, price, category);
      } else {
        console.error(
          "Uso incorrecto del comando POST. Debes ingresar: <title> <price> <category>"
        );
      }
      break;

    case "DELETE":
      if (resourceId) {
        await deleteProduct(resourceId);
      } else {
        console.error(
          "Uso incorrecto del comando DELETE. Debes ingresar un productId."
        );
      }
      break;

    default:
      console.error(
        "Comando no reconocido. Usa uno de los siguientes formatos:"
      );
      console.log("GET products");
      console.log("GET products/<productId>");
      console.log("POST products <title> <price> <category>");
      console.log("DELETE products/<productId>");
      break;
  }
};

// Ejecutar el programa
main();
