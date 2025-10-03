import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Option = {
  value: string
  label: string
}

interface DropdownProps {
  options: Option[]
  placeholder?: string
  onChange?: (value: string) => void
}

export function Dropdown({
  options,
  placeholder = "Select an option",
  onChange,
}: DropdownProps) {
  return (
    <Select onValueChange={onChange}>
      {/* Trigger Button */}
      <SelectTrigger className="w-auto rounded-full border border-gray-400 text-sm font-bold cursor-pointer bg-[#1e293b] text-white">
        {/* ✅ Force white text */}
        <SelectValue placeholder={placeholder} className="!text-white" />
      </SelectTrigger>

      {/* Dropdown List */}
      <SelectContent className="bg-[#1e293b] text-white border border-gray-600">
        {options.map((opt) => (
          <SelectItem
            key={opt.value}
            value={opt.value}
            className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700 text-white"
          >
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
