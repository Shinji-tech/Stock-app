import React from 'react'
import {Label} from "@/components/ui/label"
import { Controller } from 'react-hook-form'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const items = [
{ label: "Light", value: "light" },
{ label: "Dark", value: "dark" },
{ label: "System", value: "system" },
]


const SelectField = ({ name, label, placeholder, options, control, error, required = false }: SelectFieldProps) => {
  return (
    <div className="space-y-2">
        <label htmlFor={name} className="form-label">{label}</label>

        <Controller 
            name={name} 
            control={control}
            rules={{ required: required ? `Please select a ${label.toLowerCase()}` : false }}
            render={({ field }) => (
            <Select items={items} onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="select-trigger">
                <SelectValue placeholder={placeholder}/>
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600 text-white">
                {options.map((option) => (
                    <SelectItem value={option.value} key={option.value} className="focus:bg-gray-600 focus:text-white">
                        {option.label}
                    </SelectItem>
                ))}    
            </SelectContent>
            {error && <p className="text-sm text-red-500">{error.message}</p>}
            </Select>
            )}
        />
    </div>
  )
}

export default SelectField