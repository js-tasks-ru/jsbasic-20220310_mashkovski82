function showSalary(users, age) {
  let newUsers = users.filter(user => user.age <= age);
  let userBalanceName = newUsers.map(user => `${user.name}, ${user.balance}`);
  userBalanceName = userBalanceName.join('\n');
  
  return userBalanceName;
}

