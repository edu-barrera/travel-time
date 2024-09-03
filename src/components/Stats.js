export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list 😊</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const porcentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {porcentage === 100
          ? "You got everything ready to go 🛩️"
          : ` You have ${numItems} items on your list, and you have packed ${numPacked}
        (${porcentage}%) ✍🏻`}
      </em>
    </footer>
  );
}
