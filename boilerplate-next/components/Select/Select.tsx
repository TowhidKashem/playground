import React from 'react';
import type { NextPage } from 'next';

export type Option = {
  label: string;
  value: string;
};

const Select: NextPage<
  {
    options: Option[];
  } & React.HTMLAttributes<HTMLSelectElement>
> = ({ options, ...selectProps }) => {
  return (
    <select
      {...selectProps}
      className={`rounded-md p-2 ${selectProps.className}`}
      defaultValue={selectProps.defaultValue}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
