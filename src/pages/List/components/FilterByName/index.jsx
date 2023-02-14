import { Input } from "./style";

const Component = ({ setFilter }) => {
  return (
    <div style={{ position: "relative", width: "240px" }}>
      <Input
        name="id"
        placeholder="Busca por nombre del producto"
        onChange={(ev) => {
          setFilter({
            field: "title",
            value: ev.target.value !== "" ? ev.target.value : "no",
            special: (item, value) => {
              return item.title.includes(value);
            },
          });
        }}
      />
    </div>
  );
};

export default Component;
