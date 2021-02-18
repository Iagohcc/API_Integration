module.exports = (order) =>
  `<?xml version="1.0" encoding="iso-8859-1"?><pedido><cliente><nome>${order.org_name}</nome></cliente><itens><item><codigo>${order.id}</codigo><descricao>${order.title}</descricao><un>Un</un><qtde>1</qtde><vlr_unit>${order.value}</vlr_unit></item></itens></pedido>`;
