// Inventario de bebidas
const inventory = [
  { name: "Coca Cola", category: "Soft drink" },
  { name: "Fanta", category: "Soft drink" },
  { name: "Sprite", category: "Soft drink" },
  { name: "Agua", category: "Soft drink" },
  { name: "Vino", category: "Alcoholic" },
  { name: "Cerveza", category: "Alcoholic" },
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
            <input type="number" id="needed-${index}" min="0" placeholder="0">
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
