// Inventario de bebidas
const inventory = [
  { name: "Roe & Co", category: 'Irish whiskey' },
  { name: "Bushmills", category: 'Irish whiskey' },
  { name: "Bushmills Malt 10YO", category: 'Irish whiskey' },
  { name: "Bushmills Malt 16YO", category: 'Irish whiskey' },
  { name: "Blackbush", category: 'Irish whiskey' },
  { name: "Jameson", category: 'Irish whiskey' },
  { name: "Jameson Crested", category: 'Irish whiskey' },
  { name: "Jameson Coppers Croze", category: 'Irish whiskey' },
  { name: "Jameson Distillers Croze", category: 'Irish whiskey' },
  { name: "Jameson Distillers Safe", category: 'Irish whiskey' },
  { name: "Yellow Spot", category: 'Irish whiskey' },
  { name: "Green Spot", category: 'Irish whiskey' },
  { name: "Powers", category: 'Irish whiskey' },
  { name: "Paddy", category: 'Irish whiskey' },
  { name: "Tullamore Dew", category: 'Irish whiskey' },
  { name: "Redbreast 12YO", category: 'Irish whiskey' },
  { name: "Redbreast 15YO", category: 'Irish whiskey' },
  { name: "Jack Daniels", category: 'Bourbon' },
  { name: "Jim Beam", category: 'Bourbon' },
  { name: "Bulleit", category: 'Bourbon' },
  { name: "Southern Comfort", category: 'Bourbon' },
  { name: "Makers Mark", category: 'Bourbon' },
  { name: "Johnnie Walker Red", category: 'Scotch' },
  { name: "Jhonnie Walker Black 12Y", category: 'Scotch' },
  { name: "Chivas Regal", category: 'Scotch' },
  { name: "Cutty Shark", category: 'Scotch' },
  { name: "Teachers", category: 'Scotch' },
  { name: "Hennesy", category: 'Brandy' },
  { name: "Bacardi", category: 'Rum' },
  { name: "Captain Morgan", category: 'Rum' },
  { name: "The Kraken", category: 'Rum' },
  { name: "Sea Dog", category: 'Rum' },
  { name: "Smirnoff", category: 'Vodka' },
  { name: "Absolute", category: 'Vodka' },
  { name: "Absolute Vanilla", category: 'Vodka' },
  { name: "Absolute Raspberry", category: 'Vodka' },
  { name: "Ciroc", category: 'Vodka' },
  { name: "Ketel One", category: 'Vodka' },
  { name: "Grey Goose", category: 'Vodka' },
  { name: "Gordons", category: 'Gin' },
  { name: "Gordons Pink", category: 'Gin' },
  { name: "Gordons 0.0", category: 'Gin' },
  { name: "Boe Violet", category: 'Gin' },
  { name: "Cork Dry", category: 'Gin' },
  { name: "Tanqueray", category: 'Gin' },
  { name: "Tanqueray London Nº10", category: 'Gin' },
  { name: "Hendricks", category: 'Gin' },
  { name: "Brockmans", category: 'Gin' },
  { name: "Bombay Sapphire", category: 'Gin' },
  { name: "Bombay East", category: 'Gin' },
  { name: "Dingle", category: 'Gin' },
  { name: "Gunpowder", category: 'Gin' },
  { name: "Beefeater", category: 'Gin' },
  { name: "Baileys", category: 'Liquors' },
  { name: "Grand Marnier", category: 'Liquors' },
  { name: "Irish Mist", category: 'Liquors' },
  { name: "Creme de Menthe", category: 'Liquors' },
  { name: "Peach Schnapps", category: 'Liquors' },
  { name: "Tia Maria", category: 'Liquors' },
  { name: "Kahlua", category: 'Liquors' },
  { name: "Drambuie", category: 'Liquors' },
  { name: "Cointreau", category: 'Liquors' },
  { name: "Jagermeister", category: 'Liquors' },
  { name: "Amaretto", category: 'Liquors' },
  { name: "Creme de Cassis", category: 'Liquors' },
  { name: "Sambuca", category: 'Liquors' },
  { name: "Tequila Siver", category: 'Tequila' },
  { name: "Tequila Rose", category: 'Tequila' },
  { name: "Pernod", category: 'Aperitifs' },
  { name: "Grand Marnier", category: 'Aperitifs' },
  { name: "Dubonnet", category: 'Aperitifs' },
  { name: "Martini", category: 'Aperitifs' },
  { name: "Bristol Cream", category: 'Aperitifs' },
  { name: "Tio Pepe", category: 'Aperitifs' },
  { name: "Pimms", category: 'Aperitifs' },
  { name: "Churchill", category: 'Aperitifs' },
  { name: "Budwiser", category: 'Boottles' },
  { name: "Heineken", category: 'Boottles' },
  { name: "Peroni", category: 'Boottles' },
  { name: "Coors", category: 'Boottles' },
  { name: "Corona", category: 'Boottles' },
  { name: "Rocshore", category: 'Boottles' },
  { name: "Kopparberg strawberry & lime", category: 'Boottles' },
  { name: "Kopparberg Mixed Fruit", category: 'Boottles' },
  { name: "Bulmers Original", category: 'Boottles' },
  { name: "Bulmers Light", category: 'Boottles' },
  { name: "WKD", category: 'Alcopops' },
  { name: "Smirnoff ice", category: 'Alcopops' },
  { name: "West Coast Cooler Original", category: 'Alcopops' },
  { name: "West Coast Cooler Rose", category: 'Alcopops' },
  { name: "", category: '' },

];

// Referencias a elementos del DOM
const inventoryTable = document.getElementById("inventory");
const generatePDFButton = document.getElementById("generatePDFButton");
const clearTableButton = document.getElementById("clearTableButton");
const categoryFilter = document.getElementById("categoryFilter");

// Función para renderizar la tabla
function renderTable(categoryFilter = "all") {
  inventoryTable.innerHTML = ""; // Limpia la tabla antes de renderizar

  // Filtra el inventario si la categoría no es "all"
  const filteredInventory = inventory.filter(
    (item) => categoryFilter === "all" || item.category === categoryFilter
  );

  // Itera sobre el inventario filtrado y genera las filas
  filteredInventory.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${item.name}</td>
          <td>
            <input type="number" id="needed-${index}" min="0" placeholder="0" class="input_needed">
          </td>
          <td>${item.category}</td>
        `;
    inventoryTable.appendChild(row);
  });
}



// Inicializar la tabla al cargar la página
renderTable();

// Función para generar el PDF
function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let yOffset = 20; // Posición vertical inicial en el PDF
  doc.setFontSize(24);
  doc.text("Beverage order", 80, 10);
  doc.setFontSize(16);

  let hasOrders = false; // Bandera para saber si hay pedidos

  inventory.forEach((item, index) => {
    const inputElement = document.getElementById(`needed-${index}`);
    const needed = inputElement ? Number(inputElement.value) : 0;

    if (needed > 0) {
      hasOrders = true;
      doc.text(`${item.name}: ${needed} Units`, 15, yOffset);
      yOffset += 10;
    }
  });

  if (!hasOrders) {
    alert("No has solicitado ninguna bebida.");
    return;
  }

  // Descargar el PDF
  doc.save("Beverage_order.pdf");
}

// Evento para generar PDF
generatePDFButton.addEventListener("click", generatePDF);

// Evento para limpiar la tabla
clearTableButton.addEventListener("click", () => renderTable());

// Evento para filtrar por categoría
categoryFilter.addEventListener("change", (e) => {
  const selectedCategory = e.target.value;
  renderTable(selectedCategory);
});
