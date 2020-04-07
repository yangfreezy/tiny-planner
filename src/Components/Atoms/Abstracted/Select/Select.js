import React, { useState } from "react";

import { MAIN_GREEN } from "../../../../Colors";
import { Column } from "../../../Layouts/Column/Column";
import { Row } from "../../../Layouts/Row/Row";
import { Text } from "../Text/Text";

export const Select = ({ name, label, options, selections, setSelections }) => {
  const checkedSelections = selections.reduce((cache, value) => {
    cache[value] = false;
    return cache;
  }, {});
  const [checkedItems, setCheckedItems] = useState(checkedSelections);
  const handleChange = (e, selections) => {
    const currentCheckedItems = JSON.parse(JSON.stringify(checkedItems));
    currentCheckedItems[e.target.id] = !checkedItems[e.target.id];
    setCheckedItems(currentCheckedItems);

    const selectedOptions = Object.keys(currentCheckedItems).filter(
      option => currentCheckedItems[option] === true
    );
    setSelections(selectedOptions);
  };
  return (
    <Column margin="0px 25px" alignItems="flex-start">
      <Text color={MAIN_GREEN}> {label}</Text>
      {options.map(option => (
        <Row alignItems="middle" justifyContent="flex-start" key={option}>
          <input
            onChange={handleChange}
            type="checkbox"
            id={option}
            value={option}
            name={name}
          />
          <Text margin="0px 10px" fontSize="10px">
            {option}
          </Text>
        </Row>
      ))}
    </Column>
  );
};
