function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  document.body.append(ul);

  for (let names of friends) {
    let list = `${names.firstName} ${names.lastName}`;
    let li = document.createElement('li');
    li.textContent = list;
    ul.append(li);
  }
  return ul;
}
