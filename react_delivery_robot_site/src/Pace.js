function calculate() {
  const item = document.getElementById("item").value;
  const quantity = parseInt(document.getElementById("quantity").value, 10);
  const floorFrom = parseInt(document.getElementById("floorFrom").value, 10);
  const floorTo = parseInt(document.getElementById("floorTo").value, 10);
  const disassembly = document.getElementById("disassembly").checked;
  const assembly = document.getElementById("assembly").checked;

  if (isNaN(quantity) || isNaN(floorFrom) || isNaN(floorTo)) {
    alert("Пожалуйста, введите корректные значения.");
    return;
  }

  let baseCost = 100;
  if (item === "wardrobe") {
    baseCost = 200;
  } else if (item === "bed") {
    baseCost = 150;
  } else if (item === "table") {
    baseCost = 50;
  }

  const floorCost = 10;

  const totalCost =
    baseCost * quantity + Math.abs(floorTo - floorFrom) * floorCost;

  let additionalCost = 0;
  if (disassembly) additionalCost += 50;
  if (assembly) additionalCost += 50;

  const finalCost = totalCost + additionalCost;

  document.getElementById("result").innerHTML = `
      <h3>Итоговая стоимость:</h3>
      <p>Предмет: ${item}</p>
      <p>Количество: ${quantity}</p>
      <p>Этаж от: ${floorFrom}</p>
      <p>Этаж до: ${floorTo}</p>
      <p>Разборка: ${disassembly ? "Да" : "Нет"}</p>
      <p>Сборка: ${assembly ? "Да" : "Нет"}</p>
      <p><strong>Итоговая стоимость: ${finalCost} руб.</strong></p>
    `;
}
