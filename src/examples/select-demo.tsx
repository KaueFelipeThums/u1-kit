import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const items = [
  {
    label: 'Selecione uma opção',
    value: null,
    disabled: true,
  },
  {
    label: 'Apple Apple Apple Apple Apple Apple Apple Apple Apple Apple Apple ',
    value: 'apple',
  },
  {
    label: 'Banana',
    value: 'banana',
  },
  {
    label: 'Cherry',
    value: 'cherry',
  },
];

export function SelectDemo() {
  return (
    <div>
      <Select items={items}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} label={item.label} value={item.value} disabled={item.disabled}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
