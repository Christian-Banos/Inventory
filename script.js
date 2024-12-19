// Inventario de bebidas
const inventory = [
  { name: "Roe & Co", category: "Irish whiskey" },
  { name: "Bushmills", category: "Irish whiskey" },
  { name: "Bushmills Malt 10YO", category: "Irish whiskey" },
  { name: "Bushmills Malt 16YO", category: "Irish whiskey" },
  { name: "Blackbush", category: "Irish whiskey" },
  { name: "Jameson", category: "Irish whiskey" },
  { name: "Jameson Crested", category: "Irish whiskey" },
  { name: "Jameson Coppers Croze", category: "Irish whiskey" },
  { name: "Jameson Distillers Croze", category: "Irish whiskey" },
  { name: "Jameson Distillers Safe", category: "Irish whiskey" },
  { name: "Yellow Spot", category: "Irish whiskey" },
  { name: "Green Spot", category: "Irish whiskey" },
  { name: "Powers", category: "Irish whiskey" },
  { name: "Paddy", category: "Irish whiskey" },
  { name: "Tullamore Dew", category: "Irish whiskey" },
  { name: "Redbreast 12YO", category: "Irish whiskey" },
  { name: "Redbreast 15YO", category: "Irish whiskey" },
  { name: "Jack Daniels", category: "Bourbon" },
  { name: "Jim Beam", category: "Bourbon" },
  { name: "Bulleit", category: "Bourbon" },
  { name: "Southern Comfort", category: "Bourbon" },
  { name: "Makers Mark", category: "Bourbon" },
  { name: "Johnnie Walker Red", category: "Scotch" },
  { name: "Jhonnie Walker Black 12Y", category: "Scotch" },
  { name: "Chivas Regal", category: "Scotch" },
  { name: "Cutty Shark", category: "Scotch" },
  { name: "Teachers", category: "Scotch" },
  { name: "Hennesy", category: "Brandy" },
  { name: "Bacardi", category: "Rum" },
  { name: "Captain Morgan", category: "Rum" },
  { name: "The Kraken", category: "Rum" },
  { name: "Sea Dog", category: "Rum" },
  { name: "Smirnoff", category: "Vodka" },
  { name: "Absolute", category: "Vodka" },
  { name: "Absolute Vanilla", category: "Vodka" },
  { name: "Absolute Raspberry", category: "Vodka" },
  { name: "Ciroc", category: "Vodka" },
  { name: "Ketel One", category: "Vodka" },
  { name: "Grey Goose", category: "Vodka" },
  { name: "Gordons", category: "Gin" },
  { name: "Gordons Pink", category: "Gin" },
  { name: "Gordons 0.0", category: "Gin" },
  { name: "Boe Violet", category: "Gin" },
  { name: "Cork Dry", category: "Gin" },
  { name: "Tanqueray", category: "Gin" },
  { name: "Tanqueray London Nº10", category: "Gin" },
  { name: "Hendricks", category: "Gin" },
  { name: "Brockmans", category: "Gin" },
  { name: "Bombay Sapphire", category: "Gin" },
  { name: "Bombay East", category: "Gin" },
  { name: "Dingle", category: "Gin" },
  { name: "Gunpowder", category: "Gin" },
  { name: "Beefeater", category: "Gin" },
  { name: "Baileys", category: "Liquors" },
  { name: "Grand Marnier", category: "Liquors" },
  { name: "Irish Mist", category: "Liquors" },
  { name: "Creme de Menthe", category: "Liquors" },
  { name: "Peach Schnapps", category: "Liquors" },
  { name: "Tia Maria", category: "Liquors" },
  { name: "Kahlua", category: "Liquors" },
  { name: "Drambuie", category: "Liquors" },
  { name: "Cointreau", category: "Liquors" },
  { name: "Jagermeister", category: "Liquors" },
  { name: "Amaretto", category: "Liquors" },
  { name: "Creme de Cassis", category: "Liquors" },
  { name: "Sambuca", category: "Liquors" },
  { name: "Tequila Siver", category: "Tequila" },
  { name: "Tequila Rose", category: "Tequila" },
  { name: "Pernod", category: "Aperitifs" },
  { name: "Grand Marnier", category: "Aperitifs" },
  { name: "Dubonnet", category: "Aperitifs" },
  { name: "Martini", category: "Aperitifs" },
  { name: "Bristol Cream", category: "Aperitifs" },
  { name: "Tio Pepe", category: "Aperitifs" },
  { name: "Pimms", category: "Aperitifs" },
  { name: "Churchill", category: "Aperitifs" },
  { name: "Budwiser", category: "Boottles" },
  { name: "Heineken", category: "Boottles" },
  { name: "Peroni", category: "Boottles" },
  { name: "Coors", category: "Boottles" },
  { name: "Corona", category: "Boottles" },
  { name: "Rocshore", category: "Boottles" },
  { name: "Kopparberg strawberry & lime", category: "Boottles" },
  { name: "Kopparberg Mixed Fruit", category: "Boottles" },
  { name: "Bulmers Original", category: "Boottles" },
  { name: "Bulmers Light", category: "Boottles" },
  { name: "WKD", category: "Alcopops" },
  { name: "Smirnoff ice", category: "Alcopops" },
  { name: "West Coast Cooler Original", category: "Alcopops" },
  { name: "West Coast Cooler Rose", category: "Alcopops" },
  { name: "Club Tonic", category: "Mixers" },
  { name: "Cub Slimline Tonic", category: "Mixers" },
  { name: "Club Ginger Ale", category: "Mixers" },
  { name: "Club Bitter Lemon", category: "Mixers" },
  { name: "Club Soda Water", category: "Mixers" },
  { name: "Still Small", category: "Mixers" },
  { name: "Sparking Small", category: "Mixers" },
  { name: "Still Large", category: "Mixers" },
  { name: "Sparking Large", category: "Mixers" },
  { name: "Coke", category: "Soft Drinks" },
  { name: "Coke Zero", category: "Soft Drinks" },
  { name: "Diet Coke", category: "Soft Drinks" },
  { name: "7 Up", category: "Soft Drinks" },
  { name: "Diet 7 Up", category: "Soft Drinks" },
  { name: "Club Lemon", category: "Soft Drinks" },
  { name: "Club Orange", category: "Soft Drinks" },
  { name: "Lucozate", category: "Soft Drinks" },
  { name: "Cidona", category: "Soft Drinks" },
  { name: "Red Bull", category: "Soft Drinks" },
  { name: "Paulita Sauvingnon Blanc", category: "Wine" },
  { name: "Pinot Grigio", category: "Wine" },
  { name: "Casa Roja Viura", category: "Wine" },
  { name: "Chardonnay", category: "Wine" },
  { name: "3Wooly Sheep", category: "Wine" },
  { name: "Paulita Cabernet Sauvignon", category: "Wine" },
  { name: "Havalos Merlot", category: "Wine" },
  { name: "Casa Roja Tempranillo", category: "Wine" },
  { name: "Babington Brook Shiraz", category: "Wine" },
  { name: "Montepuiciano", category: "Wine" },
  { name: "Fleurie Georges Deboeuf", category: "Wine" },
  { name: "Malbec", category: "Wine" },
  { name: "Chateau La Fleur Picon", category: "Wine" },
  { name: "Hope Bay Pinotage Rose", category: "Wine" },
  { name: "Prossecco", category: "Sparking Wine" },
  { name: "Prosecco Rose", category: "Sparking Wine" },
  { name: "Champagne Taittinger", category: "Sparking Wine" },
  { name: "Orange Juice", category: "Juice" },
  { name: "Apple Juice", category: "Juice" },
  { name: "Cranberry Juice", category: "Juice" },
  { name: "Pineapple Juice", category: "Juice" },
  { name: "Strawberry Pure", category: "Pure" },
  { name: "Passion Fruit Pure", category: "Pure" },
  { name: "Rraspberry Pure", category: "Pure" },
  { name: "Mango Pure", category: "Pure" },
  { name: "Lemon", category: "Fruits" },
  { name: "Lime", category: "Fruits" },
  { name: "Strawberries", category: "Fruits" },
  { name: "Berries", category: "Fruits" },
  { name: "Mint", category: "Fruits" },
  { name: "Raspberries", category: "Fruits" },
  { name: "Eggs", category: "Fruits" },
  { name: "Papper Cups", category: "Coffee" },
  { name: "Coffee Beans", category: "Coffee" },
  { name: "Decaf Coffee", category: "Coffee" },
  { name: "Plastic Lids", category: "Coffee" },
];

// Referencias a elementos del DOM
const inventoryTable = document.getElementById("inventory");
const generatePDFButton = document.getElementById("generatePDFButton");
const clearTableButton = document.getElementById("clearTableButton");
const categoryFilter = document.getElementById("categoryFilter");

// Objeto para almacenar cantidades ingresadas
let inputValues = {};

// Función para renderizar la tabla
function renderTable(categoryFilter = "all") {
  inventoryTable.innerHTML = ""; // Limpia la tabla antes de renderizar

  // Filtra el inventario si la categoría no es "all"
  const filteredInventory = inventory.filter(
    (item) => categoryFilter === "all" || item.category === categoryFilter
  );

  // Itera sobre el inventario filtrado y genera las filas
  filteredInventory.forEach((item) => {
    const currentValue = inputValues[item.name] || 0; // Recupera el valor almacenado
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${item.name}</td>
          <td>
            <input 
              type="number" 
              id="needed-${item.name}" 
              min="0" 
              placeholder="0" 
              class="input_needed" 
              value="${currentValue}"
              onchange="updateInputValue('${item.name}', this.value)"
            >
          </td>
          <td>${item.category}</td>
        `;
    inventoryTable.appendChild(row);
  });
}

// Función para actualizar el valor en el objeto
function updateInputValue(name, value) {
  inputValues[name] = Number(value) || 0; // Asegura que el valor sea un número
}

// Función para generar el PDF
function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Ancho de la página actual (para calcular el espaciado relativo)
  const pageWidth = doc.internal.pageSize.getWidth();

  let yOffset = 20; // Posición vertical inicial en el PDF
  const footerY = 280; // Posición del pie de página
  doc.setFontSize(24);
  doc.text("Beverage order", 80, 10);
  doc.setFontSize(16);

  let hasOrders = false; // Bandera para saber si hay pedidos

  Object.keys(inputValues).forEach((name) => {
    const needed = inputValues[name];
    if (needed > 0) {
      hasOrders = true;
      // Estilo negrita para el nombre
      doc.setFont("helvetica", "bold"); 
      doc.text(`${name}:`, 15, yOffset);
       // Unidades con espaciado dinámico (usando el ancho de la página)
       doc.setFont("helvetica", "normal");
       doc.text(`${needed} Units`, pageWidth - 50, yOffset); // Espaciado ajustado dinámicamente
       yOffset += 10; // Incremento vertical
    }
  });

  if (!hasOrders) {
    alert("No has solicitado ninguna bebida.");
    return;
  }

  // Agregar correo electrónico al pie de página
  doc.setFontSize(12);
  doc.text(
    "For inquiries, email us at: christiandepaulbp@gmail.com",
    15,
    footerY
  );

  // Descargar el PDF
  doc.save("Beverage_order.pdf");
}

// Función para limpiar la tabla y los datos
function clearTable() {
  inputValues = {}; // Resetea los valores almacenados
  renderTable(); // Renderiza la tabla con los valores limpiados
}

// Evento para generar PDF
generatePDFButton.addEventListener("click", generatePDF);

// Evento para limpiar la tabla
clearTableButton.addEventListener("click", clearTable);

// Evento para filtrar por categoría
categoryFilter.addEventListener("change", (e) => {
  const selectedCategory = e.target.value;
  renderTable(selectedCategory);
});
