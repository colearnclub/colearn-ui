import { useCallback } from 'react';
import { DayPicker, DayClickEventHandler, Matcher } from 'react-day-picker';
import Calendar from '../../assets/calendar-outline.svg';

import {
  chakra,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';

const CalendarIcon = chakra(Calendar, {
  baseStyle: { width: '1rem', height: '1rem', g: { stroke: '#3699ae' } },
});

type Props = Omit<InputGroupProps, 'onChange'> & {
  value?: Date;
  disabledMatchers?: Matcher | Matcher[];
  formatter?: (d: Date) => string;
  isReadOnly?: boolean;
  onChange: (date?: Date) => void;
};

export default function DateSelect({
  value,
  onChange,
  disabledMatchers,
  formatter,
  isReadOnly,
  ...rest
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dayClick: DayClickEventHandler = useCallback(
    (day) => {
      onChange(day);
      onClose();
    },
    [onChange, onClose],
  );

  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <InputGroup
          cursor="pointer"
          onClick={!isReadOnly ? onOpen : undefined}
          {...rest}
        >
          <InputLeftElement pointerEvents="none">
            <CalendarIcon />
          </InputLeftElement>
          <Input
            placeholder="Select Date"
            value={value && formatter?.(value)}
            isReadOnly
          />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent w="16rem">
        <PopoverArrow />
        <PopoverBody my="1rem">
          <DayPicker
            defaultMonth={value}
            disabled={disabledMatchers}
            selected={value}
            onDayClick={dayClick}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
