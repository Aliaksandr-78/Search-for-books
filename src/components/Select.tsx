import React from 'react'
interface SelectProps {
  label: string
  value: string
  options: { value: string, label: string }[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
const Select: React.FC<SelectProps> = ({ label, value, options, onChange }) => {
  return (
    <div className="select-container">
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
export default Select
