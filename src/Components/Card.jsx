import ListItems from "./ListItems";

export default function Card({ arr }) {
  return (
    <>
      <ul>
        <ListItems item={arr[0]} />
        <ListItems item={arr[1]} />
        <ListItems item={arr[2]} />
        <ListItems item={arr[3]} />
      </ul>
    </>
  );
}
