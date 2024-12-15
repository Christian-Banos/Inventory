// Inventario de bebidas
const inventory = [
    { name: "Coca Cola", available: 20 },
    { name: "Fanta", available: 15 },
    { name: "Sprite", available: 10 },
    { name: "Agua", available: 50 },
  ];
  
  // Referencias a elementos del DOM
  const inventoryTable = document.getElementById("inventory");
  const generatePDFButton = document.getElementById("generatePDFButton");
  const clearTableButton = document.getElementById("clearTableButton");
  
  // Función para renderizar la tabla
  function renderTable() {
    inventoryTable.innerHTML = ""; // Limpia la tabla antes de renderizar
    inventory.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.available}</td>
          <td>
            <input type="number" id="needed-${index}" min="0" placeholder="0">
          </td>
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
    doc.setFontSize(14);
    doc.text("Pedido de Bebidas", 10, 10);
    doc.setFontSize(12);
  
    let hasOrders = false; // Bandera para saber si hay pedidos
  
    inventory.forEach((item, index) => {
      const needed = Number(document.getElementById(`needed-${index}`).value);
  
      if (needed > 0) {
        hasOrders = true;
        doc.text(`${item.name}: ${needed} unidades`, 10, yOffset);
        yOffset += 10;
      }
    });
  
    if (!hasOrders) {
      alert("No has solicitado ninguna bebida.");
      return;
    }
  
    // Descargar el PDF
    doc.save("pedido.pdf");
  }
  
  // Evento para generar PDF
  generatePDFButton.addEventListener("click", generatePDF);
  
  // Evento para limpiar la tabla
  clearTableButton.addEventListener("click", renderTable);
  