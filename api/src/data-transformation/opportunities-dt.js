module.exports = (opportunities) => ({
  id: opportunities.id,
  title: opportunities.title,
  value: opportunities.value,
  currency: opportunities.currency,
  add_time: opportunities.add_time,
  update_time: opportunities.update_time,
  active: opportunities.active,
  deleted: opportunities.deleted,
  status: opportunities.status,
  org_name: opportunities.org_name,
});
