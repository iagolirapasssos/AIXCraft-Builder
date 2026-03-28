const timelineData = [
  { name: "Build Front-end", team: "Web Squad", time: "2m 10s" },
  { name: "Testes Automatizados", team: "QA Ops", time: "58s" },
  { name: "Validação de Segurança", team: "DevSec", time: "35s" },
  { name: "Deploy Produção", team: "Platform", time: "49s" }
];

const resourceData = [
  { label: "Front-end", value: 72 },
  { label: "Back-end", value: 64 },
  { label: "Infra", value: 81 },
  { label: "Dados", value: 55 }
];

const timeline = document.getElementById("timeline");
const bars = document.getElementById("resource-bars");

timelineData.forEach((item) => {
  const li = document.createElement("li");
  li.className = "timeline__item";
  li.innerHTML = `
    <span class="timeline__dot" aria-hidden="true"></span>
    <div>
      <strong>${item.name}</strong>
      <div class="timeline__meta">${item.team}</div>
    </div>
    <span class="timeline__meta">${item.time}</span>
  `;
  timeline.append(li);
});

resourceData.forEach((item) => {
  const row = document.createElement("div");
  row.className = "bar__row";
  row.innerHTML = `
    <div class="bar__label">
      <span>${item.label}</span>
      <strong>${item.value}%</strong>
    </div>
    <div class="bar__track" role="img" aria-label="Uso de ${item.label}">
      <div class="bar__fill" style="width: ${item.value}%"></div>
    </div>
  `;
  bars.append(row);
});
