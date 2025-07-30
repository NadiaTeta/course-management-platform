const statuses = ['Done', 'Pending', 'Not Started'];

function isValidStatus(status) {
  return statuses.includes(status);
}

module.exports = { statuses, isValidStatus };
