import "./styles.css";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 }
];
function ListItems() {
  let listArray = products.map((listItem) => {
    return <li key={listItem.id}>{listItem.title}</li>;
  });
  return <ul>{listArray}</ul>;
}

function CreateTable() {
  function CreateHead() {
    let col = [];
    for (let key in products[0]) {
      col.push(<th>{key}</th>);
    }
    let row = <tr> {col} </tr>;
    return <thead> {row} </thead>;
  }
  function CreateCols() {
    let tr_s = products.map((listItem) => {
      let cols = [];
      for (let key in listItem) {
        let content = listItem[key];
        if (typeof listItem[key] == "boolean") {
          content = listItem[key] ? "Yes" : "No";
        }
        cols.push(<td>{content}</td>);
      }
      return <tr>{cols}</tr>;
    });
    return <tbody> {tr_s} </tbody>;
  }
  return (
    <table className="table">
      <CreateHead />
      <CreateCols />
    </table>
  );
}
export default function App() {
  return (
    <div>
      <ListItems />
      <CreateTable />
    </div>
  );
}
