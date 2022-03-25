import React from 'react';
import type { NextPage } from 'next';

export type Option = {
  label: string;
  value: string;
  selected: boolean;
};

const Select: NextPage<
  {
    options: Option[];
  } & React.HTMLAttributes<HTMLSelectElement>
> = ({ options, ...selectProps }) => {
  return (
    <select
      {...selectProps}
      className={`p-2 rounded-md ${selectProps.className}`}
    >
      {options.map(({ label, value, selected }) => (
        <option key={value} value={value} selected={selected}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
