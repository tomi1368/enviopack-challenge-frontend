import { useEffect, useState } from "react";
import { SelectedField } from "./style";
const Component = ({ setFilter, selectData, fieldName }) => {
  const [currentAction, setCurrentAction] = useState(selectData[0]);
  useEffect(() => {
    setFilter({
      field: fieldName,
      value: currentAction.value,
      groupal: currentAction.action,
    });
  }, [currentAction]);
  return (
    <SelectedField
      onChange={(ev) => {
        setCurrentAction(
          selectData.find((selectItem) => selectItem.value === ev.target.value)
        );
      }}
    >
      {selectData.map((selectItem) => {
        return (
          <option key={selectItem.value} value={selectItem.value}>
            {selectItem.label}
          </option>
        );
      })}
    </SelectedField>
  );
};

export default Component;
