const insert_Row = () => {
  const table = document.querySelector('#sampleTable');
  const tableLen = table.rows.length;
  const row = table.insertRow(tableLen);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const rowLen = table.rows[0].cells.length;
  cell1.innerHTML = `Row${tableLen + 1} cell${rowLen - 1}`;
  cell2.innerHTML = `Row${tableLen + 1} cell${rowLen}`;
};
