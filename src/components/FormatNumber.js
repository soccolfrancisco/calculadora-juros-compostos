const formatoMoeda = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

const formatoPorcentagem = Intl.NumberFormat('pt-BR', {
  style: 'percent',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

function formatarMoeda(value) {
  return formatoMoeda.format(value);
}

function formatarPorcentagem(value) {
  return formatoPorcentagem.format(value);
}

export { formatarMoeda, formatarPorcentagem };
